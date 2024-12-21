const evaporator = (c, e, t) => {
  let days = 0;
  let current = 100;

  while (current > t) {
    current -= current * (e / 100);
    days += 1;
  }

  return days;
}
