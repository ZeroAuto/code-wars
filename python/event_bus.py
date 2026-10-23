import pytest
import threading
from typing import Callable, List, Tuple


class EventBus:
    def __init__(self):
        self._lock = threading.Lock()
        # List of tuples: (pattern_segments, callback)
        self._subscribers: List[Tuple[List[str], Callable[[str, dict], None]]] = []

    def subscribe(self, pattern: str, callback: Callable[[str, dict], None]) -> None:
        """
        Registers a callback for a specific pattern.
        Patterns can include single-segment wildcards (*).
        Example: 'orders.*.created' matches 'orders.us.created'
        """
        pattern_parts = pattern.split(".")
        with self._lock:
            self._subscribers.append((pattern_parts, callback))

    def publish(self, event_name: str, payload: dict) -> None:
        """
        Publishes an event to all matching registered callbacks.
        Execution of one failing callback must not prevent others from running.
        """
        event_parts = event_name.split(".")
        matching_callbacks = []

        # Snapshot matching callbacks under the lock quickly
        with self._lock:
            for pattern_parts, callback in self._subscribers:
                if self._match_pattern(pattern_parts, event_parts):
                    matching_callbacks.append(callback)

        # Execute callbacks outside the lock to prevent deadlocks
        for callback in matching_callbacks:
            try:
                callback(event_name, payload)
            except Exception:
                # Log error or suppress so other callbacks continue running
                pass

    @staticmethod
    def _match_pattern(pattern_parts: List[str], event_parts: List[str]) -> bool:
        if len(pattern_parts) != len(event_parts):
            return False

        for p_part, e_part in zip(pattern_parts, event_parts):
            if p_part != "*" and p_part != e_part:
                return False

        return True


class TestEventBus:
    def test_exact_match(self):
        bus = EventBus()
        received = []
        bus.subscribe("user.login", lambda name, payload: received.append(payload))
        
        bus.publish("user.login", {"id": 123})
        assert received == [{"id": 123}]

    def test_wildcard_single_segment(self):
        bus = EventBus()
        received = []
        bus.subscribe("orders.*.created", lambda name, payload: received.append(payload))
        
        bus.publish("orders.us.created", {"order_id": 1})
        bus.publish("orders.eu.created", {"order_id": 2})
        bus.publish("orders.us.ny.created", {"order_id": 3})  # Should NOT match
        
        assert received == [{"order_id": 1}, {"order_id": 2}]

    def test_exception_isolation(self):
        bus = EventBus()
        received = []

        def failing_callback(name, payload):
            raise RuntimeError("Boom")

        bus.subscribe("app.start", failing_callback)
        bus.subscribe("app.start", lambda name, payload: received.append(payload))

        bus.publish("app.start", {"status": "ok"})
        assert received == [{"status": "ok"}]