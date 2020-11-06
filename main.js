'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word) => {

  let newWord = word.toLowerCase().trim();
  console.log(newWord)
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let newStr = '';
  let firstLetter = newWord[0];
  let restOfWord = newWord.substring(1)

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


// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}