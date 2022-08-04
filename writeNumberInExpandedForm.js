// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

const numbers = [12, 42, 70304];

const expandedForm = (num) => {
  const length = num.toString().split("").length;
  const stringArray = num
    .toString()
    .split("")
    .map((num, index) => {
      let numBreak = num;
      if (num !== "0") {
        for (let i = 0; i < length - index - 1; index++) {
          numBreak = numBreak + "0";
        }
      }
      return numBreak;
    });
  const cleanArray = stringArray.filter((num) => num !== "0");
  return cleanArray.join(" + ");
};

const answers = numbers.map((num) => {
  return expandedForm(num);
});

console.log(answers);
