function removeDuplicates(arr) {
    var uniqueArr = [];
    for (var i = 0; i < arr.length; i++) {
      if (uniqueArr.indexOf(arr[i]) === -1) {
        uniqueArr.push(arr[i]);
      }
    }
    return uniqueArr;
  }
  var originalArr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
  var uniqueArr = removeDuplicates(originalArr);
  console.log(uniqueArr);
