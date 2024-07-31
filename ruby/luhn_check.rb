def luhn_check(number)
  digits = number.to_s.chars.map(&:to_i)
  checksum = digits.pop

  sum = digits.reverse.each_slice(2).flat_map do |x, y|
    [(x * 2).divmod(10), y || 0]
  end.flatten.inject(:+)

  checksum.zero? ? sum % 10 == 0 : (10 - sum % 10) == checksum

  # doubled_digits = reversed_digits.map.with_index do |digit, index|
  #   index.even? ? digit : (digit * 2 > 9 ? digit * 2 - 9 : digit * 2)
  # end
  #
  # total = doubled_digits.sum + checksum
  # total % 10 == 0
end

# Example usage:
puts luhn_check(79927398713)  # Outputs: true
puts luhn_check(79927398714)  # Outputs: false
