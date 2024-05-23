/*Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  for (let j = 0; j <= nums.length - 1; j++) {
    for (let i = j + 1; i <= nums.length - 1; i++) {
      if (nums[j] + nums[i] === target) {
        return [j, i];
      }
    }
  }
  return null;
};
console.log(twoSum([3,2,4],6))