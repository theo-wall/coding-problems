// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

// add("123", "321"); -> "444"
// add("11", "99");   -> "110"

// fix me!

const add = (a, b) => {
  const AL = a.length;
  const BL = b.length;
  const ML = Math.max(AL, BL);

  let carry = 0,
    sum = "";

  for (let i = 1; i <= ML; i++) {
    let A = +a.charAt(AL - i);
    let B = +b.charAt(BL - i);

    let t = carry + A + B;
    carry = (t / 10) | 0;
    t %= 10;

    sum = i === ML && carry ? carry * 10 + t + sum : t + sum;
  }
  return sum;
};

const answer = add(
  "63829983432984289347293874",
  "90938498237058927340892374089"
);

console.log(answer);
