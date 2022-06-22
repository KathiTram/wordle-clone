words = ['which', 'other', 'three', 'eagle', 'shady', 'above', 'adult', 'bones', 'bonks', 'cones'];

const gridContainer = document.querySelector('.gridContainer');
const box = document.querySelector('.box');

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

createBoxes(5);

function pickRandomWord() {
    let word = words[Math.floor(Math.random() * words.length)]
    charsOfWord = word.split('');
    return(charsOfWord);
}

function playerEnterWord() {
    playerChoice = "bones";
    charsOfChoice = playerChoice.split('');
    return(charsOfChoice);
}


function compareBothWords() {
    pickRandomWord();
    playerEnterWord();

    for (i = 0; i < 5; i++) {
        if (charsOfChoice[i] == charsOfWord[i]) {
            console.log(`this letter is a match: ${charsOfChoice[i]}`);
            document.querySelector(`#box0${i}`).style.backgroundColor = 'green';
        } else {
            console.log(`at position ${i} the random letter was ${charsOfWord[i]} and your letter was ${charsOfChoice[i]}`);
        };
    }
    console.log(`My word is ${charsOfChoice}, the computer choice is ${charsOfWord}`);
}

compareBothWords();

function playerWordsIntoBoxes() {
    for (let i = 0; i < 5; i++) {
        document.querySelector(`#box0${i}`).innerText = playerEnterWord()[i];
    }
}

playerWordsIntoBoxes();