def digitize(n):
  l = list(str(n))
  result = []
  for num in reversed(l):
    result.append(int(num))
  return result

def digitize_list_map(n):
  return list(map(int, str(n)))[::-1]

print(digitize_list_map(123))
print(digitize(35231))
print(digitize_list_map(0))
print(digitize_list_map(23582357))
