def print_array(arr)
  arr.map do |i|
    i.to_s
  end
  arr.join(",")
end
