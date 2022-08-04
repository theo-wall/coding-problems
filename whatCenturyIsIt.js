// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

const numbers = [1999, 2011, 2154, 2259, 1124, 2000];

const whatCentury = (num) => {};

const answers = numbers.map((num) => {
  return whatCentury(num);
});

console.log(answers);
