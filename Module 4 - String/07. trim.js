/**
 * JavaScript String Method: trim()
 * Beginner-friendly and fully commented
 *
 * trim() removes extra spaces from:
 * - the beginning of a string
 * - the end of a string
 *
 * It does NOT remove spaces from the middle.
 */

// Create a string with extra spaces at the start and end
const text = "              Hola!! I love GFG                                            ";

// trim() removes the unwanted spaces from both sides
const trimmedText = text.trim();

// substring(0, 6) takes characters from index 0 to 5
const shortText = trimmedText.substring(0, 6);

// Add dots at the end to show it is shortened
console.log(shortText + "......");

// Output: Hola!!......