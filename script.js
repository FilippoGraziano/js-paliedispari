//r First exercise
/** This function allows you to understand if the word is a palindrome */
function isPalindrome(word) {

    if (word.split(``).reverse().join(``) === word) return true;
    return false;
};

console.log(isPalindrome(prompt(`dammi una parola`)))

//r Second exrcise
/** This function generate a random number to 1 from 5 */
function randomNumber() {
    let random = Math.floor(Math.random() * 5 + 1)
    return random;
}

/** This function determines the winner of odd or even */
function isEvenOrOdd(sum1, sum2) {
    let totalSum = sum1 + sum2;
    if (totalSum % 2 === 0) return console.log(`Even win!!!`);
    if (totalSum % 2 !== 0) return console.log(`Odd win!!!`);
}

isEvenOrOdd(prompt(`dammi un numero da 1 a 5`), randomNumber())

