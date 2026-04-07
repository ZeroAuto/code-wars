class SimpleCache
  def initialize(capacity)
    @capacity = capacity
    @cache = {}
  end

  def get(key)
    if @cache.has_key? key
      val = @cache[key]
      @cache.delete(key)
      @cache[key] = val
    else
      return -1
    end

    @cache[key]
  end

  def put(key, value)
    if @cache.has_key? key
      @cache.delete(key)
    end

    @cache[key] = value

    if @cache.size > @capacity
      first_key = @cache.keys.first
      @cache.delete(first_key)
    end
  end
end

cache = SimpleCache.new(2)
cache.put(1, 1)
cache.put(2, 2)
puts cache.get(1)    # Expected: 1
cache.put(3, 3)      # Evicts key 2
puts cache.get(2)    # Expected: -1 or nil
