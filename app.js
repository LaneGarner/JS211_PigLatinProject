const output = (str) => document.querySelector('#display-element').innerHTML = `${str} <br> ${randomPigs()}`;

const pigPics = ['cutePig.jpg', 'cutePig2.jpg', 'cutePig3.jpg', 'cutePig4.jpg', 'cutePig5.jpg'];

const randomPigs = () => {
  let randomPig = pigPics[Math.floor(Math.random()*pigPics.length)]
  let randomPigSelect = `<img src= "${randomPig}"></img>`
  return randomPigSelect
}

const pigLatin = () => {
    let wordArr = document.querySelector('#word-input').value.toLowerCase().trim().split(' ');
    let newArr = [];
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    wordArr.forEach((word) =>{
      if (word === '') {
        alert('Please enter a word')
      }
      else if (vowels.indexOf(word[0]) > -1) {
        pigWord = word + 'yay';
        newArr.push(pigWord)
      } else {
        let firstMatch = word.match(/[aeiou]/g) || 0;
        let vowel = word.indexOf(firstMatch[0]);
        pigWord = word.substring(vowel) + word.substring(0, vowel) + 'ay';
        newArr.push(pigWord)
      }
    })

    newArr.join(' ')
    let pigSentence = newArr.join(' ')
    pigSentence = pigSentence.charAt(0).toUpperCase() + pigSentence.slice(1)
    
    output(pigSentence)
  }
