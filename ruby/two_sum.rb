# https://www.codewars.com/kata/52c31f8e6605bcc646000082/train/ruby
def two_sum(numbers, target)
  numbers.each_with_index do |x, i|
    numbers.each_with_index do |y, j|
      return [i,j] if i != j and x + y == target
    end
  end
end

# there's a more performant way to do it
def two_sum_with_hash(numbers, target)
  checked = {}
  numbers.each_with_index do |value, i|
    diff = target - value
    if checked[diff]
      return [checked[diff], i]
    else
      checked[value] = i
    end
  end
end
