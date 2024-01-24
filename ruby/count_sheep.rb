def count_sheep(num)
  result = ""
  num.times do |i|
    result += "#{i + 1} sheep..."
  end
  return result
end

def count_sheel_map(num)
  (1...num).map {|i| "#{i} sheep..."}.join
end

def count_sheep_reduce(num)
  (1...num).reduce("") {|acc, e| acc += "#{e} sheep..."}
end
