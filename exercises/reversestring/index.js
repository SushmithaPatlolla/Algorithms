// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
return str.split('').reduce((reversed, character)=>{
    return character + reversed
}, '')
}

// function reverse(str) {
//     var m='';
//     for(let i of str){
// m = i + m
// }
// return m
// }
// function reverse(str){
//     const arr = str.split('')
//     arr.reverse()
//     return arr.join('')
// }
module.exports = reverse;

