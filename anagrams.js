function areAnagrams(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    var arr1 = [];
    var arr2 = [];
    for (var i = 0; i < str1.length; i++) {
      arr1.push(str1[i]);
    }
      for (var i = 0; i < str2.length; i++) {
      arr2.push(str2[i]);
    }
    arr1.sort();
    arr2.sort();
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
console.log(areAnagrams('listen', 'silent'));
console.log(areAnagrams('hello', 'world'));
