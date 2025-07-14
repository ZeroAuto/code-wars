LOOKUP = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM'

def rot13(str)
  str.chars.map do |char|
    idx = LOOKUP.index(char)
    idx ? LOOKUP[idx + 13] : char
  end.join
end

puts rot13("Hello, World!")  # => "Uryyb, Jbeyq!"
puts rot13("Uryyb, Jbeyq!")  # => "Hello, World!"
