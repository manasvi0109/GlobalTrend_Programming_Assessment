function filterOutEvenNumbers(arr) {
  return arr.filter(num => num % 2!== 0);
}
const numbers = [1, 2, 3, 4, 5, 6];
const oddNumbers = filterOutEvenNumbers(numbers);
console.log(oddNumbers);
