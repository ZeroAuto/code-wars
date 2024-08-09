words = ["apple", "apricot", "grape", "plum", "peach", "orange", "strawberry"]

def auto_complete(str):
  result = []

  for word in words:
    if (word[0:len(str)] == str.lower()):
      result.append(word)

  return result


print(auto_complete('ap'))
print(auto_complete('pl'))
print(auto_complete('za'))
print(auto_complete('Gr'))
print(auto_complete('app'))
