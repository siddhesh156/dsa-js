
// Given an array Arr of N positive integers and another number X. Determine whether or not there exist two elements in Arr whose sum is exactly X.
// Example 1:

// Input:
// N = 6, X = 16
// Arr[] = {1, 4, 45, 6, 10, 8}
// Output: Yes
// Explanation: Arr[3] + Arr[4] = 6 + 10 = 16


function hasArrayTwoCandidates(arr, n, x) {
  let sum = 0;
  for (let j = 0; j < n - 1; j++) {
    for (let i = j + 1; i <= n - 1; i++) {
      sum = arr[i] + arr[j];
      if (x === sum) {
        return "Yes";
      }
    }
  }
  return "No";
}

const output = hasArrayTwoCandidates([335, 501, 170, 725, 479, 359, 963, 465, 706, 146, 282, 828, 962, 492, 996, 943, 828, 437, 392, 605, 903, 154, 293, 383, 422, 717, 719, 896, 448, 727, 772, 539, 870, 913, 668, 300, 36, 895, 704, 812, 134, 334], 42, 468)
console.log(output)