# https://www.codewars.com/kata/5503013e34137eeeaa001648/train/ruby
def diamond(n)
  return if n.even? || n < 1
  
  triangle = (1..n).step(2).map { |i| " " * ((n-i)/2) + "*" * i + "\n" }
  (triangle + triangle.reverse[1..-1]).join
end
