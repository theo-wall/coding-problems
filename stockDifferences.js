// You will be given a list of stock prices for a given day and your goal
// is to return the maximum profit that could have been made by buying a
// stock at the given price and then selling the stock later on. For example
// if the input is: [45, 24, 35, 31, 40, 38, 11] then your program should return
// 16 because if you bought the stock at $24 and sold it at $40, a profit of $16
// was made and this is the largest profit that could be made. If no profit could
// have been made, return -1.

const numbers = [45, 24, 35, 31, 40, 38, 11];

const stockDifference = (stockPrices) => {
  const stockDifferences = stockPrices.map((num1, index1) => {
    const differences = stockPrices.map((num2, index2) => {
      if (index2 > index1) {
        return num2 - num1;
      }
    });
    return Math.max(...differences.filter((num) => num));
  });
  const bigDiff = Math.max(...stockDifferences);
  if (bigDiff > 0) {
    return bigDiff;
  } else {
    return -1;
  }
};

const answers = stockDifference(numbers);

console.log(answers);
