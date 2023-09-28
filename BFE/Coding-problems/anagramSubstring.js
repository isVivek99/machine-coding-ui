/**
 * @param {string} str
 * @return {number}
 */
function countPalindromicSubstr(str) {
  // your code here
  let count = 0;

  const isPanlindrome = (stringSub) => {
    const reverseString = stringSub.split("").reverse().join("");
    console.log({ stringSub });
    return reverseString === stringSub;
  };

  for (i = 0; i < str.length; i++) {
    // console.log(isPanlindrome(str.substring(i,str.length-i)),str.substring(i,str.length-i) )
    for (j = i; j < str.length; j++) {
      if (isPanlindrome(str.substring(i, j + 1))) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(countPalindromicSubstr("madam"));
