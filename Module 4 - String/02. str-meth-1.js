/**
 * String Methods: charAt() & charCodeAt()
 * + Beginner Exercise: Simple Encoding (Caesar Cipher +1)
 */

// ----------------------------------------------------
// 1) Basic Example
// ----------------------------------------------------

const displayMessage = "I am a Mentor at GeeksforGeekS";
const index = 20;

// charAt() → returns character at given index
const char = displayMessage.charAt(index);

// charCodeAt() → returns ASCII/Unicode value of character
const asciiCode = displayMessage.charCodeAt(index);

console.log(`Character at index ${index}:`, char);
console.log(`ASCII code of '${char}':`, asciiCode);


// ----------------------------------------------------
// 2) Beginner Exercise: Encode a string
// Example: "geeks" → "hfflt"
// Logic: Shift each character by +1
// ----------------------------------------------------

let input = "geeks";
let encoded = "";

// Loop through each character
for (let i = 0; i < input.length; i++) {
    let currentChar = input.charAt(i);          // get character
    let charCode = input.charCodeAt(i);         // get ASCII code

    let newCharCode = charCode + 1;             // shift by +1
    let newChar = String.fromCharCode(newCharCode); // convert back to character

    encoded += newChar; // add to result
}

console.log("Original:", input);
console.log("Encoded :", encoded);
// Output: geeks → hfflt


// ----------------------------------------------------
// 3) Decode back (Reverse logic: -1)
// ----------------------------------------------------

let decoded = "";

for (let i = 0; i < encoded.length; i++) {
    let charCode = encoded.charCodeAt(i);
    let originalChar = String.fromCharCode(charCode - 1);

    decoded += originalChar;
}

console.log("Decoded :", decoded);
// Output: hfflt → geeks


// ----------------------------------------------------
// 4) Important Notes
// ----------------------------------------------------
// - charAt(index) → gives character
// - charCodeAt(index) → gives ASCII value
// - String.fromCharCode(code) → converts ASCII to character
// - This is a basic encryption (Caesar Cipher)
// - Works mainly for lowercase letters