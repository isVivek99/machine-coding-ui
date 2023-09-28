/**
 * @param {number[]} arr
 * @returns number
 */
function findSingle(arr) {
  // your code here
  const myMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (myMap.has(arr[i])) {
      myMap.set(arr[i], myMap.get(arr[i]) + 1);
      continue;
    }
    myMap.set(arr[i], 1);
  }

  for (let [key, value] of myMap) {
    if (value === 1) return key;
  }
}
const arr = [10, 2, 2, 1, 0, 0, 10];
findSingle(arr); // 1

// time complexity O(n)
// space Complxity O(n)
