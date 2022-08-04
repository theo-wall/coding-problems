// "1999" --> "20th"
// "2011" --> "21st"
// "2154" --> "22nd"
// "2259" --> "23rd"
// "1124" --> "12th"
// "2000" --> "20th"

const numbers = [1999, 2011, 2154, 2259, 1124, 2000];

const whatCentury = (num) => {
  let century = Math.ceil(num / 100);
  let j = century % 10;
  let k = century % 100;
  if (j == 1 && k != 11) {
    return century.toString() + "st";
  }
  if (j == 2 && k != 12) {
    return century.toString() + "nd";
  }
  if (j == 3 && k != 13) {
    return century.toString() + "rd";
  }
  return century.toString() + "th";
};

const answers = numbers.map((num) => {
  return whatCentury(num);
});

console.log(answers);
