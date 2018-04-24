// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    var string1 = str.replace('/[^\w]/g','').split('')
    var string='';
    for(i=0;i<string1.length;i++){
        if(string1[i]=='a' || string1[i]=='e' || string1[i]=='i' || string1[i]=='o' || string1[i]=='u' ){
            string += string1[i];
        }
    }
   return string.length

}

module.exports = vowels;
