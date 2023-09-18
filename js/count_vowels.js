const getCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (s of str) {
    if (vowels.includes(s)) {
      count ++;
    }
  }

  return count;
};

const getCountMatch = (str) => {
  return (str.match(/[aeiou]/ig)||[]).length;
};

const getCountSplit = (str) => {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
};

const getCountReplace = (str) => {
  return str.replace(/[^aeiou]/gi, '').length;
};

console.log(getCountSplit('blahblah'));
