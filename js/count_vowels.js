const getCount = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;
  for (let s of str) {
    if (vowels.includes(s)) {
      count ++;
    }
  }

  return count;
};

const doAThing = n => {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}

const getCountMatch = (str) => {
  return (str.match(/[aeiou]/ig)||[]).length;
};

const getCountSplit = (str) => {
  return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
};

const getCountReplace = (str) => {
  // use regex to sub vowels for empty string, thereby reducing the length
  return str.replace(/[^aeiou]/gi, '').length;
};

// console.log(getCountSplit('blahblah'));
console.log(doAThing(20));
