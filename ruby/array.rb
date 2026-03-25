# https://www.codewars.com/kata/570597e258b58f6edc00230d/train/ruby

def array(string)
  result = []
  arr = string.split(',')
  arr.each_with_index do |v, i|
    if i != 0 && i != arr.length - 1
      result.push(v)
    end
  end

  if result.length >= 1
    return result.join(' ')
  else
    return nil
  end
end
