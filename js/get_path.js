/**
 * Safely gets a nested value from an object using a dot/bracket notation path.
 * @param {Object} object 
 * @param {string} path 
 * @param {*} defaultValue 
 * @returns {*}
 */
function getValue(object, path, defaultValue) {
  const keys = path.match(/[^.[\]]+/g);
  if (!keys) return defaultValue;

  // Reduce walks through the keys array, using the object as the starting accumulator
  const result = keys.reduce((current, key) => {
    return (current !== null && current !== undefined) ? current[key] : undefined;
  }, object);

  return result !== undefined ? result : defaultValue;
}

// --- TEST CONDITIONS ---
console.log("\n2. Testing getValue...");
const userObj = { a: { b: [{ c: 'Senior Developer Found!' }] } };

console.log(getValue(userObj, 'a.b[0].c'));
// Expected: 'Senior Developer Found!'

console.log(getValue(userObj, 'a.b.c', 'Not Found'));
// Expected: 'Not Found' (because b is an array, b.c doesn't exist directly)

console.log(getValue(userObj, 'x.y.z', 'Fallback Value'));
// Expected: 'Fallback Value'
