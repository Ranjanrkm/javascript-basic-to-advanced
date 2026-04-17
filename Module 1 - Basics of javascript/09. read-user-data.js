/**
 * Read data from user
 */

const readlineSync = require("readline-sync");

const userName = readlineSync.question("May I know your name? ");

console.log(userName);
const userAge = readlineSync.question("May I know your age? ");
console.log(typeof userAge);

console.log(`Welcome ${userName} to GFG`);

const yearOfBirth = 2026 - Number(userAge);
console.log(`You were born in the year ${yearOfBirth}`);