const removeDuplicates = arr => {
  let count = 1;
  let index = 1;
  
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      count++;
    } else {
      count = 1;
    }
    
    if (count <= 2) {
      arr[index++] = arr[i];
    }
  }
  
  arr.length = index;
  return arr;
}

let arr = [1, 1, 1, 1, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4];
removeDuplicates(arr);
console.log(arr); // Output: [1, 1, 2, 2, 3, 3, 4]
