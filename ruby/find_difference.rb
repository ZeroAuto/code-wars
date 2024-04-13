# https://www.codewars.com/kata/58cb43f4256836ed95000f97/train/ruby
# def find_difference(a,b)
#   result = a.inject(:*) - b.inject(:*)
#   result.abs()
# end

# oneline
def find_difference(a,b)
  (a.inject(:*) - b.inject(:*)).abs()
end
