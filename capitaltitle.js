function capitalizeWords(str) {
    return str.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  }
  console.log(capitalizeWords("hello everyone, this is a program."));
  console.log(capitalizeWords("this is for the internship test purpose."));
