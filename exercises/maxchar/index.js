// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
// const arr = str.split('')
// var x;
// for(char of str){
// x = char
// if(x == char){
//     x.push(char)
// }
// }    

// }

function maxChar(str) {
    const arr = str.split('')
    let max = 0
    let chars = ''
    const obj = {}
    for(let i of arr){
        if(!obj[i]){
            obj[i] = 1
        }
        else{
            obj[i]++
        }
    }
    for(let i in obj){
        if(obj[i]>max){
            max = obj[i]
            chars = i
            console.log(i)
        }
    }

return chars
    }

module.exports = maxChar;
