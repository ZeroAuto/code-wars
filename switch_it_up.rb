def switch_it_up(num)
  dict = {
    1 => "One",
    2 => "Two",
    3 => "Three",
    4 => "Four",
    5 => "Five",
    6 => "Six",
    7 => "Seven",
    8 => "Eight",
    9 => "Nine",
    0 => "Zero",
  }
  dict[num]
end


def switch_it_up_switch_statement(number)
  case number
  when 1
    "One"
  when 2
    "Two"
  when 3
    "Three"
  when 4
    "Four"
  when 5
    "Five"
  when 6
    "Six"
  when 7
    "Seven"
  when 8
    "Eight"
  when 9
    "Nine"
  when 0
    "Zero"
  else
    switch_it_up(number % 10)
  end
end
