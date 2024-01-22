# https://www.codewars.com/kata/515e271a311df0350d00000f/train/ruby
def square_sum(numbers)
  numbers.inject(0) { |sum, num| sum + (num ** 2)}
end

def square_sum_alt(numbers)
  numbers.sum { |n| n * n }
end
