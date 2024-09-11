/**
 * @param {number[]} nums
 * @return {number}
 */
// const removeDuplicates = (nums) => {
//   const obj = {};
//   const result = [];
//   for (int of nums) {
//     obj.hasOwnProperty(int) ? obj[int] += 1 : obj[int] = 1;
//     if (obj[int] <= 2) result.push(int);
//   }
//   return result;
// };
const removeDuplicates = (arr) => {
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


console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))
console.log(removeDuplicates([1,1,1,2,2,3]))
