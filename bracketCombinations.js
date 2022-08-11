// Bracket Combinations

// Have the function BracketCombinations(num) read num which will be an integer greater than or equal to zero,
// and return the number of valid combinations that can be formed with num pairs of parentheses. For example,
// if the input is 3, then the possible combinations of 3 pairs of parenthesis,
// namely: ()()(), are ()()(), ()(()), (())(), ((())), and (()()).
// There are 5 total combinations when the input is 3, so your program should return 5.

// Examples
// Input: 3
// Output: 5
// Input: 2
// Output: 2

const numbers = [2, 3, 4];

const sFact = (num) => {
  let rval = 1;
  for (let i = 2; i <= num; i++) rval = rval * i;
  return rval;
};

const bracketCombinations = (num) => {
  const part1 = sFact(2 * num);
  const part2 = sFact(num + 1);
  const part3 = sFact(num);

  return part1 / (part2 * part3);
};
const answers = numbers.map((num) => {
  return bracketCombinations(num);
});

console.log(answers);
