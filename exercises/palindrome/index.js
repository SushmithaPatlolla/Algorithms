// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


// function palindrome(str) {
// return str.split('').every((char,i)=>{
//     return char === str[str.length - i -1]
// })
//}

// function palindrome(str) {
//   var m = str.split('').reverse().join('')

//   return str === m
// }


function palindrome(str) {
    var m = str.split('')
    m.reverse()
   var k = m.join('')
    if(str === k){
        return true;
    }
    else{
        return false
    }
}

module.exports = palindrome;
