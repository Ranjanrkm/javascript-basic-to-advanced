/**
 * JavaScript String Method: substring()
 * Beginner-friendly and fully commented
 */

// A string containing a user's full name
const userName = "Ranjan Kumar Mahao";

// substring(startIndex, endIndex)
// - startIndex: where to start taking characters
// - endIndex: where to stop (endIndex is not included)

const subString = userName.substring(0, 10);

// Print the shortened string with dots
console.log(subString + "...");

// Output: Ranjan Kum...