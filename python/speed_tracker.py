from collections import deque


class BusSpeedTracker:
    def __init__(self, time_window_seconds: int):
        """
        Initializes the tracker with a maximum time window duration in seconds.
        """
        # init empty deque
        self.window = time_window_seconds
        self.readings = deque([])

    def ping(self, timestamp: int, speed: float) -> None:
        """
        Records a new speed measurement at a given Unix timestamp.
        Assumes timestamps arrive in non-decreasing order.
        Removes any data points older than (current_timestamp - time_window_seconds).
        """

        # append timestamp and speed tuple
        self.readings.append((timestamp, speed))

        # prune stale timestamps
        while self.readings and self.readings[0][0] < timestamp - self.window:
            self.readings.popleft()

    def get_max_speed(self) -> float:
        """
        Returns the maximum speed recorded within the current active time window.
        If no data points exist in the window, return 0.0.
        """
        max_speed = 0.0

        for reading in self.readings:
            max_speed = max(reading[1], max_speed)

        return max_speed


# ==========================================
# TEST CASES
# ==========================================


def test_speed_tracker_windowing():
    tracker = BusSpeedTracker(time_window_seconds=10)

    tracker.ping(timestamp=100, speed=25.0)
    tracker.ping(timestamp=105, speed=45.0)
    assert tracker.get_max_speed() == 45.0

    # Ping at 111 rolls the window to [101, 111]. Timestamp 100 (speed 25.0) drops off.
    tracker.ping(timestamp=111, speed=30.0)
    assert tracker.get_max_speed() == 45.0

    # Ping at 116 rolls the window to [106, 116]. Timestamp 105 (speed 45.0) drops off.
    tracker.ping(timestamp=116, speed=20.0)
    assert tracker.get_max_speed() == 30.0


def test_speed_tracker_empty():
    tracker = BusSpeedTracker(time_window_seconds=5)
    assert tracker.get_max_speed() == 0.0


test_speed_tracker_empty()
test_speed_tracker_windowing()
