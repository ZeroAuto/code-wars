# https://www.codewars.com/kata/57e92e91b63b6cbac20001e5/train/ruby

def duty_free(norm, discount, hol)
  # could also use 'floor'
  # (hol / (norm * (discount/100.to_f))).floor

  # count also just add '.0' to the end of the discount
  # (hol / (norm * (discount/100.0))).to_i
  (hol / (norm * (discount/100.to_f))).to_i
end
