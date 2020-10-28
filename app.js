const pigLatin = (word) => {
    let newWord = word.toLowerCase().trim();
    console.log(newWord)
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';
  
    if (vowels.indexOf(newWord[0]) > -1) {
        newStr = newWord + "yay";
        return newStr;
    } else {
      let firstMatch = newWord.match(/[aeiou]/g) || 0;
      let vowel = newWord.indexOf(firstMatch[0]);
      newStr = newWord.substring(vowel) + newWord.substring(0, vowel) + "ay";
      return newStr;
    }
  }

console.log(pigLatin('cat'))