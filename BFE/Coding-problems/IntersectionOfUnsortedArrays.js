/**
 * @param {any[]} arr1
 * @param {any[]} arr2
 * @returns {any[]}
 */
function getIntersection(arrOne, arrTwo) {
  // your code here
  const set1 = new Set(arrOne);
  const set2 = new Set(arrTwo);
  const arr1 = [];
  const arr2 = [];
  set1.forEach((item) => arr1.push(item));
  set2.forEach((item) => arr2.push(item));
  return arr1.filter((item) => {
    if (arr2.indexOf(item) !== -1) {
      return item;
    }
  });
}

console.log(getIntersection([1, 2, 3], [1, 2]));

{
  /*
  [1,2,3], [3,2,1]  

[], [3,2,1]  

[1,100, 200, 8,8,8,3,6,100, 10, 10], [8, 7, 7, 50,50, 1,1,1,1,3,3]  

[1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,3,3,3,3,3,,2,2,2,], [2]  
  */
}
