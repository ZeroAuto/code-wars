def group_anagrams(strs)
  groups = Hash.new { |hash, key| hash[key] = [] }

  strs.each do |word|
    key = word.chars.sort.join
    groups[key] << word
  end

  groups.values
end

def group_anagrams_oneline(strs)
  strs.group_by { |word| word.chars.sort.join }.values
end

words = ["eat", "tea", "tan", "ate", "nat", "bat"]
p group_anagrams(words)
p group_anagrams_oneline words
# Expected Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]
