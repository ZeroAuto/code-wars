# import math
# import heapq
# from typing import List, Dict, Tuple


class PostRanker:
    def __init__(self):
        # TODO: Initialize internal data structures
        self.posts: dict[str, dict] = {}

    def add_or_update_post(
        self, post_id: str, upvotes: int, downvotes: int, created_at_timestamp: int
    ) -> None:
        """
        Stores or updates the post details.
        Timestamps are given in epoch seconds.
        """
        self.posts[post_id] = {
            "upvotes": upvotes,
            "downvotes": downvotes,
            "created_at_timestamp": created_at_timestamp,
        }

    def __calculate_score(self, post, current_timestamp: int):
        net_upvotes = post["upvotes"] - post["downvotes"]
        post_age = math.floor(
            abs(current_timestamp - post["created_at_timestamp"]) / 3600
        )

    def get_top_k(self, current_timestamp: int, k: int) -> list[str]:
        """
        Computes scores dynamically based on current_timestamp and returns top k post_ids.
        Score formula: (upvotes - downvotes) / ((age_in_hours + 2) ** 1.5)
        Where age_in_hours = max(0, (current_timestamp - created_at_timestamp) / 3600.0)
        """
        # TODO: Implement this method
        pass


# ==========================================
# Test Suite
# ==========================================
if __name__ == "__main__":
    ranker = PostRanker()

    # Base timestamp: T = 100,000 seconds
    T0 = 100000

    # Post A: Created 1 hr ago, net votes = 10
    ranker.add_or_update_post(
        "post_A", upvotes=15, downvotes=5, created_at_timestamp=T0 - 3600
    )

    # Post B: Created 10 hrs ago, net votes = 100
    ranker.add_or_update_post(
        "post_B", upvotes=110, downvotes=10, created_at_timestamp=T0 - 36000
    )

    # Post C: Created just now, net votes = 5
    ranker.add_or_update_post("post_C", upvotes=5, downvotes=0, created_at_timestamp=T0)

    # Test 1: Top 2 posts at T0
    top_2 = ranker.get_top_k(current_timestamp=T0, k=2)
    print(f"Top 2 at T0: {top_2}")
    # Expected ranking logic at T0:
    # post_A age = 1hr  => 10 / (3^1.5)  = 10 / 5.196 = 1.92
    # post_B age = 10hr => 100 / (12^1.5) = 100 / 41.569 = 2.40
    # post_C age = 0hr  => 5 / (2^1.5)   = 5 / 2.828 = 1.76
    assert top_2 == ["post_B", "post_A"], f"Expected ['post_B', 'post_A'], got {top_2}"

    # Test 2: Top 2 posts 24 hours later (T0 + 86400)
    top_2_future = ranker.get_top_k(current_timestamp=T0 + 86400, k=2)
    print(f"Top 2 at T0 + 24h: {top_2_future}")
    # Older posts decay rapidly relative to newer ones
    assert len(top_2_future) == 2

    print("All PostRanker tests passed!")
