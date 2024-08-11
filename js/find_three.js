// find three numbers in an array that add up to a target number
const findThree = (arr, target) => {
    arr.sort((a, b) => a - b); // Sort the array in ascending order

    for (let i = 0; i < arr.length - 2; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) continue; // Skip duplicates

        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];

            if (sum === target) {
                return [arr[i], arr[left], arr[right]];
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }
    return null; // Return null if no such triplet is found
};

const numbers1 = [1, 2, 3, 4, 5, 6];
const target1 = 12;
const result1 = findThree(numbers1, target1);
console.log(`Test Case 1: ${JSON.stringify(result1)}`); // Expected: [3, 4, 5]

// Test Case 2
const numbers2 = [10, 20, 30, 40, 50];
const target2 = 100;
const result2 = findThree(numbers2, target2);
console.log(`Test Case 2: ${JSON.stringify(result2)}`); // Expected: [20, 30, 50]

// Test Case 3
const numbers3 = [1, 1, 1, 1, 1];
const target3 = 3;
const result3 = findThree(numbers3, target3);
console.log(`Test Case 3: ${JSON.stringify(result3)}`); // Expected: [1, 1, 1]

// Test Case 4
const numbers4 = [-1, 0, 1, 2, -1, -4];
const target4 = 0;
const result4 = findThree(numbers4, target4);
console.log(`Test Case 4: ${JSON.stringify(result4)}`); // Expected: [-1, -1, 2]

// Test Case 5
const numbers5 = [1, 4, 45, 6, 10, 8];
const target5 = 22;
const result5 = findThree(numbers5, target5);
console.log(`Test Case 5: ${JSON.stringify(result5)}`); // Expected: [4, 8, 10]

// Test Case 6
const numbers6 = [12, 3, 4, 1, 6, 9];
const target6 = 24;
const result6 = findThree(numbers6, target6);
console.log(`Test Case 6: ${JSON.stringify(result6)}`); // Expected: [3, 9, 12]

// Test Case 7
const numbers7 = [0, -1, 2, -3, 1];
const target7 = -1;
const result7 = findThree(numbers7, target7);
console.log(`Test Case 7: ${JSON.stringify(result7)}`); // Expected: [-3, 1, 1]
