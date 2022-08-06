const numberArray = ["test", "Test"];

const removeZeros = (value) => {
  return value;
};

const answers = numberArray.map((num) => {
  return removeZeros(num);
});

console.log(answers);
