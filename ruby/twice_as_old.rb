# https://www.codewars.com/kata/5b853229cfde412a470000d0/train/ruby
def twice_as_old(dad, son)
  (dad - ((dad - son) * 2)).abs()
end
