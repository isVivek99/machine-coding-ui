// Given a non-empty string, return the most frequently ocurring character.
// If there are multiple characters with same occurrance, return an array of them.

function count(st) {
  let str = st;
  if (str.length <= 1) return str;
  if (typeof str !== "string") {
    console.log("here", str.toString());
    str = str.toString();
  }
  const myMap = new Map();
  const arr = [];
  let maxFrequency = 0;

  for (let i = 0; i < str.length; i++) {
    if (myMap.has(str[i])) {
      myMap.set(str[i], myMap.get(str[i]) + 1);
      maxFrequency = Math.max(maxFrequency, myMap.get(str[i]));
      continue;
    }
    myMap.set(str[i], 1);
  }
  for (let [key, value] of myMap) {
    if (value === maxFrequency) {
      arr.push(key);
    }
  }
  if (arr.length > 1) {
    return arr;
  }
  return arr[0];
}

console.log(count("abbcccddd"));
count("abbccc");
// 'c'

count("abbcccddd");
// ['c', 'd']
