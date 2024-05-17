/*
Given an integer x, return true if x is a 
palindrome
, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
*/


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = x.toString()
    let join = ''
    for(let i=str.length-1;i>=0;i--){
        join += str.charAt(i)
    }
    return join === str    
  //  return x.split('').reverse().join('').toString() === x.toString()
    
};
const res = isPalindrome(121)
console.log(res)