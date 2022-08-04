// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

// fix me!

const add = (a, b) => {
  return (Number(a) + Number(b)).toString();
};

const answer = add(
  "63829983432984289347293874",
  "90938498237058927340892374089"
);

console.log(answer);
