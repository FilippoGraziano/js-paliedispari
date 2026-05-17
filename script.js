//r First exercise
/** This function allows you to understand if the word is a palindrome */
function isPalindrome(word) {

    if (!isNaN(word)) return console.log(`You should input a word not a number :(`);
    if (word === ``) return console.log(`You should input a word :(`);
    if (word.length === 1) return console.log(`You should enter a longer word:(`);
    if (word.split(``).reverse().join(``) === word) return console.log(true);
    return console.log(false);
};

isPalindrome(prompt(`dammi una parola`))

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

// isEvenOrOdd(parseInt(prompt(`dammi un numero da 1 a 5`)), randomNumber())
