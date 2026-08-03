from collections import defaultdict
from dataclasses import dataclass
# from typing import List, Dict, Tuple, Optional


@dataclass
class TelemetryEvent:
    event_id: str
    bus_id: str
    timestamp: int  # Unix timestamp
    stop_arm_active: bool
    speed_mph: float


def aggregate_stop_arm_violations(
    events: list[TelemetryEvent], min_speed_threshold: float = 0.0
) -> dict[str, list[str]]:
    """
    Groups events by bus_id and returns a dictionary mapping each bus_id
    to a list of event_ids where a violation occurred.

    A violation occurs when:
    1. stop_arm_active is True
    2. speed_mph is strictly greater than min_speed_threshold

    The resulting event_ids for each bus must be sorted by timestamp ascending.
    """
    citations = defaultdict(list)

    events.sort(key=lambda x: x.timestamp)

    for event in events:
        if event.stop_arm_active and event.speed_mph > min_speed_threshold:
            citations[event.bus_id].append(event.event_id)

    return citations


# ==========================================
# TEST CASES
# ==========================================


def test_aggregate_stop_arm_violations_basic():
    events = [
        TelemetryEvent("e1", "bus_A", 1000, True, 15.0),
        TelemetryEvent("e2", "bus_A", 900, True, 5.0),
        TelemetryEvent("e3", "bus_B", 1050, False, 20.0),
        TelemetryEvent("e4", "bus_A", 1100, False, 0.0),
        TelemetryEvent("e5", "bus_B", 1200, True, 10.0),
    ]

    expected = {"bus_A": ["e2", "e1"], "bus_B": ["e5"]}
    assert aggregate_stop_arm_violations(events) == expected


def test_aggregate_stop_arm_violations_with_threshold():
    events = [
        TelemetryEvent("e1", "bus_A", 1000, True, 2.0),
        TelemetryEvent("e2", "bus_A", 1050, True, 12.0),
    ]

    # Threshold at 5.0 mph should exclude e1
    expected = {"bus_A": ["e2"]}
    assert aggregate_stop_arm_violations(events, min_speed_threshold=5.0) == expected


def test_aggregate_stop_arm_violations_empty():
    assert aggregate_stop_arm_violations([]) == {}
