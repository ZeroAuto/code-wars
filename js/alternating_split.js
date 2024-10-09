// https://www.codewars.com/kata/57814d79a56c88e3e0000786/train/javascript

const concatenate = str => {
  let odds = '';
  let evens = '';

  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      evens += str.charAt(i)
    } else {
      odds += str.charAt(i);
    }
  }

  return odds + evens;
}

const encrypt = (s, n) => {
  if (n === 0) return s;

  for (let i = 1; i <= n; i++) {
    s = concatenate(s);
  }

  return s;
};

const decrypt = (encryptedText, n) => {
  if (!encryptedText || n <= 0) return encryptedText;
  const ans = new Array(encryptedText.length);
  while (n--) {
    let j = 0;
    for (let i = 1; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    for (let i = 0; i < ans.length; i += 2) {
      ans[i] = encryptedText[j++];
    }
    encryptedText = ans.join('');
  }
  return encryptedText;
}

// console.log(concatenate('This is a test!'));
console.log(encrypt('This is a test!', 0));
console.log(encrypt('This is a test!', 1));
console.log(encrypt('This is a test!', 2));
console.log(encrypt('This is a test!', 3));

console.log(decrypt('hsi  etTi sats!', 1));
