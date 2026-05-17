//r First exercise
/** This function allows you to understand if the word is a palindrome */
function isPalindrome(word) {

    if (word.split(``).reverse().join(``) === word) return true;
    return false;
}

console.log(isPalindrome(prompt(`dammi una parola`)))