import math
import threading
import time
import unittest

class TokenBucketRateLimiter:
    def __init__(self, capacity: int, refill_rate: float):
        """
        Initializes the token bucket.
        
        :param capacity: Maximum number of tokens the bucket can hold.
        :param refill_rate: Number of tokens added per second.
        """
        self.capacity = capacity
        self.refill_rate = refill_rate
        self.tokens = float(capacity)
        self.last_refill_time = time.time()
        self._lock = threading.Lock()

    def _refill(self) -> None:
        """
        Internal method to calculate and add tokens based on elapsed time.
        """
        current_time = time.time()
        diff = current_time - self.last_refill_time
        tokens_to_add = self.refill_rate * diff
        self.tokens = min(float(self.capacity), self.tokens + tokens_to_add)
        self.last_refill_time = current_time

    def allow_request(self, tokens_requested: int = 1) -> bool:
        """
        Checks if the request can be processed. Consumes tokens if true.
        """
        with self._lock:
            self._refill()

            if self.tokens >= tokens_requested:
                self.tokens -= tokens_requested
                return True

            return False


class TestTokenBucketRateLimiter(unittest.TestCase):
    def test_initial_state(self):
        """Condition 1: Bucket should start full and allow immediate requests."""
        limiter = TokenBucketRateLimiter(capacity=5, refill_rate=1.0)
        self.assertTrue(limiter.allow_request(5))

    def test_consume_tokens_successfully(self):
        """Condition 2: Standard consumption should decrease token count correctly."""
        limiter = TokenBucketRateLimiter(capacity=5, refill_rate=1.0)
        # Force implementation to mock initial state if needed, or rely on full capacity
        self.assertTrue(limiter.allow_request(2))
        self.assertTrue(limiter.allow_request(3))

    def test_reject_when_insufficient_tokens(self):
        """Condition 3: Request should be blocked if it exceeds available tokens."""
        limiter = TokenBucketRateLimiter(capacity=5, refill_rate=1.0)
        self.assertFalse(limiter.allow_request(6))

    def test_token_refill_over_time(self):
        """Condition 4: Tokens should replenish correctly after time elapses."""
        limiter = TokenBucketRateLimiter(capacity=5, refill_rate=2.0) # 2 tokens per second
        
        # Drain the bucket
        self.assertTrue(limiter.allow_request(5))
        self.assertFalse(limiter.allow_request(1))
        
        # Simulate a 1-second pause for a refill of 2 tokens
        limiter.last_refill_time -= 1.0
        
        # Should now be able to accept up to 2 tokens
        self.assertTrue(limiter.allow_request(2))
        self.assertFalse(limiter.allow_request(1))

    def test_bucket_capacity_cap(self):
        """Condition 5: Refilled tokens should never exceed maximum capacity."""
        limiter = TokenBucketRateLimiter(capacity=5, refill_rate=10.0)
        
        # Simulate a 10-second pause (should generate 100 tokens, capped at 5)
        limiter.last_refill_time -= 10.0
        
        # Total capacity is 5, so asking for 6 must fail despite the long wait
        self.assertFalse(limiter.allow_request(6))

    def test_burst_behavior(self):
        """Condition 6: Large bursts up to full capacity should pass, then fail."""
        limiter = TokenBucketRateLimiter(capacity=3, refill_rate=1.0)
        
        self.assertTrue(limiter.allow_request(1))
        self.assertTrue(limiter.allow_request(1))
        self.assertTrue(limiter.allow_request(1))
        self.assertFalse(limiter.allow_request(1))


if __name__ == '__main__':
    unittest.main()
