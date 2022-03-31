const palindromes = function (string) {
    //Creates a string in all lowercase and replaces in non-word characters
   let lowString = string.toLowerCase().replace(/[\W_]/g,'')
   //Reverses the original string by splitting into individual characters, reversing, then joining
   let revString = lowString.split("").reverse().join("")
   //Checks if the string is a palindrome
   if (revString === lowString) {
       return true;
   } else {
       return false;
   };


};
console.log(palindromes("Race Car"))
// Do not edit below this line
module.exports = palindromes;
