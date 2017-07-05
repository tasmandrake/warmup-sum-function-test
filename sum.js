function sum(arr) {
  if (!arr) {
    return 0;
  } else if (!Array.isArray(arr)) {
    return 'Input should be an array of numbers';
  } else if (!arr.length) {
    return 0;
  } else if (Array.isArray(arr)) {
    return arr.reduce((a,b) => {
      if (typeof b !== 'number' || typeof a !== 'number') {
        return 'Input should be an array of numbers';
      } else {
        return a + b;
      }
    });
  } else {
    return 'Input should be an array of numbers';
  }
}

module.exports = sum;
