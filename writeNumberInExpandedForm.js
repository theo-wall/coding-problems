// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

const numbers = [12, 42, 70304];

const expandedForm = (num) => {
  const stringArray = num.toString().split("");
  return stringArray;
};

const answers = numbers.map((num) => {
  return expandedForm(num);
});

console.log(answers);
