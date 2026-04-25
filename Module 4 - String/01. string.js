/**
 * Iterating over Strings in JavaScript
 * Beginner-friendly and fully commented
 */

// Create a string
let displayMessage = "I am a Mentor at Siblings Accademy";

// ----------------------------------------------------
// Example 1: Find the index of every "r" in the string
// ----------------------------------------------------

// Loop through each character using its index
for (let i = 0; i < displayMessage.length; i++) {
    // Check if the current character is "r"
    if (displayMessage[i] === "r") {
        // Print the index where "r" is found
        console.log("Found 'r' at index:", i);
    }
}

// ----------------------------------------------------
// Example 2: Count how many times "e" appears
// ----------------------------------------------------

// Create a counter variable
let count = 0;

// Loop through each character directly
for (let char of displayMessage) {
    // Check if the current character is "e"
    if (char === "e") {
        // Increase count by 1
        count++;
    }
}

// Print the total count of "e"
console.log("Total 'e' count:", count);