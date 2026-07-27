import threading
import time
from collections import deque
from datetime import datetime, timezone


class SlidingWindowRateLimiter:
    def __init__(self, max_requests: int, window_size_seconds: float):
        """
        Args:
            max_requests: Maximum allowed requests within the time window.
            window_size_seconds: The length of the sliding window in seconds.
        """
        self.max_requests = max_requests
        self.window_size_seconds = window_size_seconds
        self.history = {}
        self._lock = threading.Lock()
        # Initialize internal tracking structures

    def hit(self, api_key: str) -> bool:
        with self._lock:
            now = datetime.now(timezone.utc)

            # Initialize if it's a new API key
            if api_key not in self.history:
                self.history[api_key] = deque()

            user_history = self.history[api_key]

            # 1. Evict any timestamps that have fallen out of the sliding window
            while user_history and (now - user_history[0]).total_seconds() > self.window_size_seconds:
                user_history.popleft()

            # 2. Check if the user has room in the window
            if len(user_history) < self.max_requests:
                user_history.append(now)
                return True
            else:
                # Rate limit exceeded
                return False


# --- TEST CASES ---
if __name__ == "__main__":
    # Allow 3 requests every 2 seconds
    limiter = SlidingWindowRateLimiter(max_requests=3, window_size_seconds=2.0)

    # Test 1: Immediate bursts within limits
    assert limiter.hit("user_key_1") is True
    assert limiter.hit("user_key_1") is True
    assert limiter.hit("user_key_1") is True

    # 4th request must be rate limited
    assert limiter.hit("user_key_1") is False

    # Test 2: Separate API key isolation
    assert limiter.hit("user_key_2") is True

    # Test 3: Window sliding behavior
    print("Waiting for window to slide...")
    time.sleep(1.1)
    # Still within the 2-second window of the first 3 requests if we measure strictly,
    # let's wait long enough for all initial requests to expire out of the window.
    time.sleep(1.0)

    # Window cleared, should accept requests again
    assert limiter.hit("user_key_1") is True
    assert limiter.hit("user_key_1") is True

    print("All Exercise 2 tests passed!")
