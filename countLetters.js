var lettersCounter = {}

function countLetters(letters) {
  var joinedLetters = letters.split(" ").join("").toLowerCase();
  for (var i = 0; i < joinedLetters.length; i++) {
    var currentLetter = joinedLetters[i];
      if (lettersCounter[currentLetter] === undefined) {
        lettersCounter[currentLetter] = 1;
      } else {
        lettersCounter[currentLetter] += 1;
      }
  }
  return lettersCounter;
}

console.log(countLetters("Lighthouse in the house"));
