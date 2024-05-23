/**
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
For example, 2 is written as II in Roman numeral, just two ones added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. 
X can be placed before L (50) and C (100) to make 40 and 90. 
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

Example 3:

Input: s = "MCMXCIV"
Output: 1994
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 */

var romanToInt = function (s) {
  let obj = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let sum = 0;
  let rs = s.split("");
  let i = 0;
  while (0 < rs.length) {
    let check =
      (rs[i] === "C" && rs[i + 1] === "M") ||
      (rs[i] === "C" && rs[i + 1] === "D") ||
      (rs[i] === "X" && rs[i + 1] === "L") ||
      (rs[i] === "X" && rs[i + 1] === "C") ||
      (rs[i] === "I" && rs[i + 1] === "V") ||
      (rs[i] === "I" && rs[i + 1] === "X");

    if (check) {
      sum += obj[rs[i + 1]] - obj[rs[i]];
      rs.splice(0, 2);
    } else {
      sum += obj[rs[i]];
      rs.splice(0, 1);
    }
  }
  return sum;
};
