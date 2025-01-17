function nest(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(nest(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

const nestedArray = [1, 2, [3, 4], 5, [6, [7, 8]]];
const simplifiedArray = nest(nestedArray);
console.log(simplifiedArray);
