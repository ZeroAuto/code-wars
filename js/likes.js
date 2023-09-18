const likes = namesArr => {
  let end;
  let names;
  namesArr.length > 1 ? end = 'like this' : end = 'likes this';
  // namesArr.length > 1 && namesArr.length < 4 ? end = 'likes this' : end = 'like this'
  if (namesArr.length > 3) {
    names = `${namesArr[0]}, ${namesArr[1]} and ${namesArr.length -2} others`;
  } else if (namesArr.length == 0) {
    names = 'no one';
  } else {
    names = namesArr.map((name, idx, arr) => {
      if (arr.length === 1 || idx === arr.length - 2) {
        return name;
      } else if (idx === arr.length - 1) {
        return `and ${name}`;
      } else {
        return `${name},`;
      }
    }).join(' ');
  }
  return `${names} ${end}`;
};

// tee hee
const likesSwitch = namesArr => {
  switch(namesArr.length) {
    case 0: return 'no one likes this'; break;
    case 1: return `${namesArr[0]} likes this`; break;
    case 2: return `${namesArr[0]} and ${namesArr[1]} like this`; break;
    case 3: return `${namesArr[0]}, ${namesArr[1]} and ${namesArr[2]} like this`; break;
    default: return `${namesArr[0]}, ${namesArr[1]} and ${namesArr.length - 2} like this`; break;
  }
};

console.log(likes([])); // no one likes this
console.log(likes(['Peter'])); // "Peter likes this"
console.log(likes(['Jacob', 'Alex'])); // Jacob and Alex like this
console.log(likes(['Max', 'John', 'Mark'])); // Max, John and Mark like this
console.log(likes(['Alex', 'Jacob', 'Mark', 'Max'])); // Alex, Jacob and 2 others like this
