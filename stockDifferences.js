// You will be given a list of stock prices for a given day and your goal
// is to return the maximum profit that could have been made by buying a
// stock at the given price and then selling the stock later on. For example
// if the input is: [45, 24, 35, 31, 40, 38, 11] then your program should return
// 16 because if you bought the stock at $24 and sold it at $40, a profit of $16
// was made and this is the largest profit that could be made. If no profit could
// have been made, return -1.

const numbers = [45, 24, 35, 31, 40, 38, 11];

// const stockDifference = (stockPrices) => {
//   const maxReduce = (maxDif, currentValue, currentIndex) => {
//     const localMaximums = [];
//     stockPrices.forEach((num, index) => {
//       if (index > currentIndex && num) {
//         localMaximums.push(num - currentValue);
//       }
//     });
//     const localMax = Math.max(...localMaximums);
//     if (localMax > maxDif) {
//       if (localMax === 0) {
//         return -1;
//       } else {
//         return localMax;
//       }
//     } else {
//       return maxDif;
//     }
//   };
//   return stockPrices.reduce(maxReduce, -1);
// };
// const answers = stockDifference(numbers);

// console.log(answers);

/* approach:
 1) consider each period as sub-periods and loops through the sub-periods
 2) calculate the maximum profit for each sub-period
 3) for each period, track the highest profit using reducer to start with no profit.

assumptions: no profit or $0 is same as -1.
 */

const calculateProfit = (buyPrice, sellPrice) => sellPrice - buyPrice;

function getPeriodProfit(periodQuotes) {
  const buyPrice = periodQuotes[0]; // special starting condition
  return periodQuotes.reduce((maxProfit, sellPrice) => {
    //check against current profit
    const sellProfit = calculateProfit(buyPrice, sellPrice);

    return sellProfit !== 0 && sellProfit > maxProfit ? sellProfit : maxProfit;
  }, -1); // assume there is no profit
}

function getMostProfitFromQuotes(quotes) {
  return quotes.reduce((mostProfit, _, index, array) => {
    const newPeriodProfit = getPeriodProfit(array.slice(index, array.length));
    return newPeriodProfit > mostProfit ? newPeriodProfit : mostProfit;
  }, -1);
}

function ArrayChallenge(arr) {
  // code goes here
  return Array.isArray(arr) ? getMostProfitFromQuotes(arr) : -1;
}

// keep this function call here
console.log(ArrayChallenge(readline()));
