// const output = (str) => document.querySelector('#display-element').innerHTML = str + '<br>' + '<img src= "cutePig.jpg"></img>';
const output = (str) => document.querySelector('#display-element').innerHTML = `${str} <br> ${randomPigs()}`;


const pigPics = ['cutePig.jpg', 'cutePig2.jpg', 'cutePig3.jpg', 'cutePig4.jpg', 'cutePig5.jpg'];

const randomPigs = () => {
  let randomPig = pigPics[Math.floor(Math.random()*pigPics.length)]
  console.log('*******', randomPig)
  let randomPigSelect = `<img src= "${randomPig}"></img>`
  return randomPigSelect
}

const pigLatin = () => {
  // const output = (str) => document.querySelector('#display-element').innerHTML = `${str} <br> ${randomPigSelect}`;

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
  
