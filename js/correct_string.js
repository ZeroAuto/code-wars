const correct = str => str.split('').map(letter => {
  if (letter === '0') {
    return 'O';
  } else if (letter === '1') {
    return 'I';
  } else if (letter === '5') {
    return 'S'
  } else {
    return letter;
  }
}).join('');
