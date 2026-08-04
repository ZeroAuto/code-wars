from collections import OrderedDict

class LRUCache:
    """
    Design an LRU cache supporting get(key) and put(key, value) in O(1) average time.
    """
    def __init__(self, capacity: int):
      self.capacity = capacity
      self.cache = OrderedDict()  # Use an ordered dictionary to maintain the order of insertion

    def get(self, key: int) -> int:
        if key in self.cache:
            self.cache.move_to_end(key)
            return self.cache[key]
        return -1

    def put(self, key: int, value: int) -> None:
        if key in self.cache:
            self.cache.move_to_end(key)
        elif len(self.cache) >= self.capacity:
            self.cache.popitem(last=False)
        self.cache[key] = value

# Test Case
lru = LRUCache(2)
lru.put(1, 1)
lru.put(2, 2)
assert lru.get(1) == 1       # returns 1
lru.put(3, 3)                # evicts key 2
assert lru.get(2) == -1      # returns -1 (not found)
lru.put(4, 4)                # evicts key 1
assert lru.get(1) == -1      # returns -1 (not found)
assert lru.get(3) == 3       # returns 3
assert lru.get(4) == 4       # returns 4