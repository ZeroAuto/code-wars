from typing import Dict, List, Any
from datetime import datetime

class CredentialStatusTracker:
    def __init__(self):
        self.status_dict = {} 

    def process_event(self, event: Dict[str, Any]) -> bool:
        p_id = event["provider_id"]
        event_status = event["status"]
        event_timestamp = event["timestamp"]

        if p_id in self.status_dict:
            current_status = self.status_dict[p_id]["status"]
            current_timestamp = self.status_dict[p_id]["timestamp"]
            
            if datetime.fromisoformat(event_timestamp) < datetime.fromisoformat(current_timestamp):
                return True  # Ignore out-of-order older events
                
            self.__resolve_status(current_status, event_status, p_id, event_timestamp)
        else:
            self.status_dict[p_id] = {
                "status": event_status,
                "timestamp": event_timestamp
            }

        return event_status == self.status_dict[p_id]["status"]

    def get_provider_status(self, provider_id: str) -> str:
        if provider_id in self.status_dict:
            return self.status_dict[provider_id]["status"]
        return "UNKNOWN"

    def __resolve_status(self, current_status: str, event_status: str, p_id: str, event_timestamp: str):
        if current_status == "PENDING" and event_status == 'REVIEW':
            self.status_dict[p_id]["status"] = event_status
            self.status_dict[p_id]["timestamp"] = event_timestamp

        if current_status == "REVIEW" and event_status == "APPROVED":
            self.status_dict[p_id]["status"] = event_status
            self.status_dict[p_id]["timestamp"] = event_timestamp


# --- TEST CASES ---
if __name__ == "__main__":
    tracker = CredentialStatusTracker()

    events = [
        {"provider_id": "p1", "status": "PENDING", "timestamp": "2026-07-01T10:00:00Z"},
        {"provider_id": "p1", "status": "REVIEW", "timestamp": "2026-07-02T11:00:00Z"},
        # Invalid direct transition from PENDING to APPROVED
        {"provider_id": "p2", "status": "PENDING", "timestamp": "2026-07-01T10:00:00Z"},
        {"provider_id": "p2", "status": "APPROVED", "timestamp": "2026-07-02T11:00:00Z"},
        # Out of order valid event (timestamp is early, but status flow matches rules historically)
        {"provider_id": "p1", "status": "APPROVED", "timestamp": "2026-07-04T09:00:00Z"},
        {"provider_id": "p1", "status": "REVIEW", "timestamp": "2026-07-03T09:00:00Z"}, 
    ]

    # Test 1: Sequentially valid flows
    assert tracker.process_event(events[0]) is True
    assert tracker.process_event(events[1]) is True
    assert tracker.get_provider_status("p1") == "REVIEW"

    # Test 2: Invalid transition flow
    assert tracker.process_event(events[2]) is True
    assert tracker.process_event(events[3]) is False  # PENDING -> APPROVED breaks rules

    # Test 3: Out of order processing
    assert tracker.process_event(events[4]) is True  # REVIEW -> APPROVED
    assert tracker.get_provider_status("p1") == "APPROVED"
    
    # This event is older than the current 'APPROVED' status timestamp, but valid in the timeline
    assert tracker.process_event(events[5]) is True  
    assert tracker.get_provider_status("p1") == "APPROVED"  # Current status should remain APPROVED

    print("All Exercise 1 tests passed!")
