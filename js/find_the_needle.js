const findNeedle = haystack => {
  let position;
  for (i in haystack) {
    if (haystack[i] === 'needle') {
      position = i
    }
  }
  return 'found the needle at position ' + position;
};

const findNeedleOneline = haystack => 'found the needle at position ' + haystack.indexOf('needle');


console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))
