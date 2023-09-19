def format_money_orig(amount):
  amount_list = str(amount).split(".")
  dollars = amount_list[0]
  
  if len(amount_list) == 1:
    cents = "00"
  elif len(amount_list[1]) == 1:
    cents = f"{amount_list[1]}0"
  else:
    cents = amount_list[1]
  
  return f"${dollars}.{cents}"

def format_money(amount):
  return '${:.2f}'.format(amount)

print(format_money(3))
print(format_money(2.1))
print(format_money(39.33))
