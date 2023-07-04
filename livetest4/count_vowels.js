function countVowels(string) {
  var Vowels = "aAeEiIoOuU";
  var vowelsCount = 0;
  for (var i = 0; i < string.length; i++) {
    if (Vowels.indexOf(string[i]) !== -1) {
      vowelsCount += 1;
    }
  }
  return vowelsCount;
}
console.log(countVowels("Aapples")); //3
