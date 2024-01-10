const peopleWithAgeDrink = age => {
  let result;
  if (age < 14) {
    result = 'toddy';
  } else if (age < 18) {
    result = 'coke';
  } else if (age < 21) {
    result = 'beer';
  } else {
    result = 'whisky';
  }
  return `drink ${result}`
};

const peopleWithAgeDrinkOneLine = age => `drink ${old < 14 ? 'toddy' : old < 18 ? 'coke' : old < 21 ? 'beer' : 'whisky'}`;
