/**
 * JavaScript String Method: indexOf()
 * Beginner-friendly and fully commented
 *
 * indexOf() is used to find the position of a character or substring
 * inside a string.
 *
 * If the character is found:
 *   - it returns the index number
 *
 * If the character is not found:
 *   - it returns -1
 */

// ----------------------------------------------------
// Function to check whether a character exists in text
// ----------------------------------------------------
function findCharacter(text, char) {
    // indexOf() checks the position of the character
    const index = text.indexOf(char);

    // If index is -1, the character is not present
    if (index === -1) {
        return "Character not found";
    } else {
        return "Character found in the string";
    }
}

// ----------------------------------------------------
// Example 1
// ----------------------------------------------------
const result1 = findCharacter("ranjan@xyz.com", "#");
console.log(result1); // Output: Character not found


// ----------------------------------------------------
// Example 2
// ----------------------------------------------------
const result2 = findCharacter("ranjan@xyz.com", "@");
console.log(result2); // Output: Character found in the string


// ----------------------------------------------------
// Simple one-line version using arrow function
// ----------------------------------------------------
const findCharacterShort = (text, char) =>
    text.indexOf(char) === -1 ? "char not found" : "char found";

// Example
const result3 = findCharacterShort("ranjan@xyz.com", "#");
console.log(result3); // Output: char not found