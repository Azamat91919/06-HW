let numbers = [1,2,41,5,25,55,22,55].map(item=> item**2);
console.log(numbers);

let array = [33,12,331,35,25,55,22,55].filter(item=> item <35);
console.log(array)

let currentWord = ["reactjs", "vuejs", "angularjs", "nodejs"].reduce(function(longest, currentWord) {
    if(currentWord.length > longest.length)
       return currentWord;
    else
       return longest;
  });

  console.log(currentWord)

let array1 = ["reactjs", "vuejs", "angularjs", "nodejs"].map(sweetString => { return sweetString.toUpperCase()})
console.log(array1)

