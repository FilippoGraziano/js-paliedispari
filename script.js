//r First exercise
/** This function allows you to understand if the word is a palindrome */
function isPalindrome(word) {

    if (word === ``) return console.log(`You should input a word :(`);
    if (!isNaN(word)) return console.log(`You should input a word not a number :(`);
    if (word.length === 1) return console.log(`You should enter a longer word:(`);

    // if (word.split(``).reverse().join(``) === word) return console.log(true);
    for (i=0; i < word.length; i++) {
        if (word.at(i) !== word.at(-i -1)) return console.log(false)
    }
    return console.log(true);
};

// isPalindrome(prompt(`dammi una parola`))

//r Second exrcise
/** This function generates a random number from 1 to 5 */
function randomNumber() {
    let random = Math.floor(Math.random() * 5 + 1)
    return random;
}

/** This function determines the winner of odd or even */
function isEvenOrOdd(sum1, sum2) {
    let totalSum = sum1 + sum2;

    if (isNaN(sum1)) return console.log(`You should input a number :(`);
    if (sum1 > 5) return console.log(`You should choose a number from 1 to 5`)
    if (sum1 < 1) return console.log(`You should choose a number from 1 to 5`)
    if (totalSum % 2 === 0) return console.log(`Even win!!!`);
    if (totalSum % 2 !== 0) return console.log(`Odd win!!!`);
}

const userChoice = prompt(`Giochiamo a pari e dispari: scegli tra pari o dispari`)

if (userChoice === `pari` || userChoice === `dispari`) isEvenOrOdd(parseInt(prompt(`dammi un numero da 1 a 5`)), randomNumber());
else console.log(`Devi scegliere se giocare pari o dispari`);
