/**
 * @param {string} v1
 * @param {string} v2
 * @returns 0 | 1 | -1
 */
function compare(v1, v2) {
  // your code here
  const semverArr1 = v1.split(".");
  const semverArr2 = v2.split(".");

  for (let i = 0; i < semverArr1.length; i++) {
    // console.log(semverArr1[i], semverArr2[i])
    if (parseInt(semverArr1[i]) === parseInt(semverArr2[i])) continue;
    if (parseInt(semverArr1[i]) > parseInt(semverArr2[i])) {
      return 1;
    } else {
      return -1;
    }
  }
  return 0;
}

console.log(compare("12.1.0", "12.0.9"));
console.log(compare("12.1.0", "12.1.2"));
console.log(compare("0.1.100", "0.1.99"));
