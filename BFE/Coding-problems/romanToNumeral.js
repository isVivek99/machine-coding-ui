/**
 * @param {number} integer
 * @returns {string} str - roman numeral string
 */

const romanToNumberMapping = {
  I: "1",
  IV: "4",
  V: "5",
  IX: "9",
  X: "10",
  XIX: "19",
  XX: "20",
  XIX: "29",
  XXX: "30",
  XL: "40",
  L: "50",
  LX: "60",
  LXX: "70",
  LXXX: "80",
  XC: "90",
  C: "100",
  CD: "400",
  D: "500",
  CM: "900",
  M: "1000",
};

function integerToRoman(num, roman = "") {
  if (num === 0) return roman;
  let localNum = num;
  const keyArr = Object.keys(romanToNumberMapping);

  for (let i = keyArr.length - 1; i >= 0; i--) {
    if (localNum - parseInt(romanToNumberMapping[keyArr[i]]) >= 0) {
      roman += keyArr[i]; // Append the Roman numeral
      localNum = localNum - parseInt(romanToNumberMapping[keyArr[i]]);
      i++;
    }
  }
  return integerToRoman(localNum, roman);
}

console.log(integerToRoman(2000, ""));
