// Given a string contaning only a, b and c, remove all b and ac.

// removeChars("ab"); // 'a'
// removeChars("abc"); // ''
// removeChars("cabbaabcca"); // 'caa'

function removeChars(input) {
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== "b") {
      stack.push(input[i]);
    }
  }

  for (let i = 0; i < stack.length; i++) {
    if (stack[i] === "c" && stack.indexOf("a") !== -1) {
      stack.pop("c");
      stack.pop("a");
    }
  }
  return stack.join("");
}
//works for most test cases
//space complexity :O(n)
//time complexity :O(n)
