/**
 * JavaScript String Methods (Beginner Friendly - All in One File)
 * Topics Covered:
 * 1. charAt() & charCodeAt()
 * 2. Encoding (Caesar Cipher +1)
 * 3. indexOf()
 * 4. includes()
 * 5. String Iteration
 */

// =====================================================
// 1) charAt() & charCodeAt()
// =====================================================

const message = "I am a Mentor at GeeksforGeekS";
const index = 29;

// Get character at index
const character = message.charAt(index);

// Get ASCII code of that character
const ascii = message.charCodeAt(index);

console.log("Character at index:", character);
console.log("ASCII value:", ascii);


// =====================================================
// 2) Encoding Example (Shift each character by +1)
// geeks → hfflt
// =====================================================

let input = "geeks";
let encoded = "";

// Loop through string
for (let i = 0; i < input.length; i++) {
    let code = input.charCodeAt(i);              // get ASCII
    let newChar = String.fromCharCode(code + 1); // shift +1
    encoded += newChar;
}

console.log("Original:", input);
console.log("Encoded :", encoded);


// Decode back (reverse: -1)
let decoded = "";

for (let i = 0; i < encoded.length; i++) {
    decoded += String.fromCharCode(encoded.charCodeAt(i) - 1);
}

console.log("Decoded :", decoded);


// =====================================================
// 3) indexOf()
// =====================================================

function findCharacter(text, char) {
    const index = text.indexOf(char);

    if (index === -1) {
        return "Character not found";
    } else {
        return "Character found at index " + index;
    }
}

console.log(findCharacter("ranjan@xyz.com", "@"));
console.log(findCharacter("ranjan@xyz.com", "#"));


// Arrow function version
const findCharShort = (text, char) =>
    text.indexOf(char) === -1 ? "char not found" : "char found";

console.log(findCharShort("ranjan@xyz.com", "@"));


// =====================================================
// 4) includes() → Check vowels
// =====================================================

const displayMessage = "i love to code in dark mode";
const vowels = "aeiou";

let hasVowel = false;

// Loop through characters
for (let char of displayMessage) {
    if (vowels.includes(char.toLowerCase())) {
        hasVowel = true;
        break;
    }
}

if (hasVowel) {
    console.log("String has vowels");
} else {
    console.log("String doesn't have vowels");
}


// Count vowels
let count = 0;

for (let char of displayMessage) {
    if (vowels.includes(char.toLowerCase())) {
        count++;
    }
}

console.log("Total vowels:", count);


// =====================================================
// 5) Iterating over string (extra practice)
// =====================================================

let sample = "I am a Mentor";

// Find index of 'r'
for (let i = 0; i < sample.length; i++) {
    if (sample[i] === "r") {
        console.log("'r' found at index:", i);
    }
}

// Count 'e'
let eCount = 0;

for (let ch of sample) {
    if (ch === "e") {
        eCount++;
    }
}

console.log("Total 'e':", eCount);


// =====================================================
// END OF FILE ✅
// =====================================================