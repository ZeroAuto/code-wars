class ThreadSafeTokenBucket
  def initialize(max_capacity, refill_rate)
    @max_capacity = max_capacity
    @refill_rate = refill_rate # e.g., tokens per second
    
    @buckets = {}
    @lock = Mutex.new
  end

  def allow?(client_id)
    @lock.synchronize do
      now = Time.now.to_f
      
      bucket = @buckets[client_id] ||= { tokens: @max_capacity, last_updated_at: now }
      
      elapsed_time = now - bucket[:last_updated_at]
      new_tokens = elapsed_time * @refill_rate
      
      bucket[:tokens] = [ @max_capacity, bucket[:tokens] + new_tokens ].min
      bucket[:last_updated_at] = now

      if bucket[:tokens] >= 1
        bucket[:tokens] -= 1
        true  # Request allowed
      else
        false # Request denied (rate limited)
      end
    end
  end
end
