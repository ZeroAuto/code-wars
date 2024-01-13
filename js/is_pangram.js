const isPangram = string => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const testString = string.toLowerCase();
  return alphabet.every(l => testString.includes(l));
}

const isPangramRegex = string => (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
