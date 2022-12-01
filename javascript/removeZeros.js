// Write a function that takes an array of values and moves all elements that are zero to the end of the array,
// otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

// For example, the following array

// [7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

// is transformed into

// [7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

// Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

const numberArray = [[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]];

const removeZeros = (arr) => {
  const zeroArr = [];

  const filteredArr = arr.filter((num) => {
    if (Number(num) === 0) {
      zeroArr.push(0);
    }
    return Number(num) !== 0;
  });

  return filteredArr.concat(zeroArr);
};

const answers = numberArray.map((num) => {
  return removeZeros(num);
});

console.log(answers);
