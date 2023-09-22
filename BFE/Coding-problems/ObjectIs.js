//implement Object.is

/**
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
Object.prototype.myIs = function (a, b) {
  //handle 0,-0
  if (
    (1 / a === Infinity && 1 / b === -Infinity) ||
    (1 / a === -Infinity && 1 / b === Infinity)
  ) {
    return false;
  }

  //handle NaN,
  if (a !== a && b !== b) return true;

  return a === b;
};
