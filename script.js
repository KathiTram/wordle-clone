words = ['which', 'other', 'three', 'eagle', 'shady', 'above', 'adult', 'bones', 'bonks', 'cones'];

let charsOfWord;
let charsOfChoice;

const gridContainer = document.querySelector('.gridContainer');
const box = document.querySelector('.box');

function play() {
    createBoxes(5);
    pickRandomWord();
    playerEnterWord();
    compareBothWords();
    // lettersExistWrongLocation();
    playerWordsIntoBoxes();
}

play()

function createBoxes(numBox) {
    for (let i = 0; i < numBox; i++) {
        const row = gridContainer.appendChild(document.createElement('div'));
        for (let j = 0; j < numBox; j++) {
            const square = document.createElement('div');
            square.className = 'box';
            square.id = 'box' + [i] + [j];
            row.appendChild(square);
        }
    }
}

function pickRandomWord() {
    let word = words[Math.floor(Math.random() * words.length)]
    charsOfWord = word.split('');
    return(charsOfWord);
}

function playerEnterWord() {
    playerChoice = prompt("enter a word")
    charsOfChoice = playerChoice.split('');
    return(charsOfChoice);
}


function lettersExistWrongLocation() {
    const intersection = charsOfChoice.filter(element => charsOfWord.includes(element));
    console.log(intersection);
    // intersection.forEach(letter => console.log(charsOfChoice.includes(letter)))
}


function compareBothWords() {   
    const intersection = charsOfChoice.filter(element => charsOfWord.includes(element)); 
    for (i = 0; i < 5; i++) {
        if (charsOfChoice[i] == charsOfWord[i]) {
            console.log(`this letter is a match: ${charsOfChoice[i]}`);
            document.querySelector(`#box0${i}`).style.backgroundColor = 'green';
        }  else if () {
            console.log(`the letter ${charsOfChoice[i]} exists but in the wrong location`);
            document.querySelector(`#box0${i}`).style.backgroundColor = 'yellow';
        } else {
            console.log(`at position ${i} the random letter was ${charsOfWord[i]} and your letter was ${charsOfChoice[i]}`);
            // document.querySelector(`#box0${i}`).style.backgroundColor = 'red';
        };
    }
    console.log(`My word is ${charsOfChoice}, the computer choice is ${charsOfWord}`);
}


function playerWordsIntoBoxes() {
    for (let i = 0; i < 5; i++) {
        document.querySelector(`#box0${i}`).innerText = charsOfChoice[i];
    }
}


