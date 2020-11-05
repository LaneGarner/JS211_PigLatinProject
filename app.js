const output = (str) => document.querySelector('#display-element').innerHTML = str;
// let img = document.createElement("img"); 
// img.src = "cutePig.jpg"; 
// let src = document.querySelector('#display-element'); 
 
// src.appendChild(img); 



const pigLatin = () => {
    word = document.querySelector('#word-input').value;
    let newWord = word.toLowerCase().trim();
    let words = newWord.split(" ")
    words.toString
    console.log(words)
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newStr = '';

    if (word === '') {
      alert('Please enter a word')
      output('')
      // document.querySelector('#display-element').innerHTML = str;
    }
    else if (vowels.indexOf(newWord[0]) > -1) {
      newStr = newWord + "yay";
      output(newStr);
    } else {
      let firstMatch = newWord.match(/[aeiou]/g) || 0;
      let vowel = newWord.indexOf(firstMatch[0]);
      newStr = newWord.substring(vowel) + newWord.substring(0, vowel) + "ay";
      output(newStr);
    }
  }
  
