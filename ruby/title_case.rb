def title_case(title, minor_words='')
  minor_words = minor_words.split.map(&:downcase)
  title.capitalize.split.map do |word|
    minor_words.include?(word) ? word : word.capitalize
  end.join(' ')
end
