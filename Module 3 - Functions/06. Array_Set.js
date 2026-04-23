// ======================================================
// Beginner Friendly JavaScript Example: Array vs Set
// ======================================================

// ------------------------------------------------------
// 1) ARRAY
// ------------------------------------------------------
// An array can store duplicate values.
// You can add values using push().

const studentIdsArray = []; // create an empty array

studentIdsArray.push(1); // add 1
studentIdsArray.push(2); // add 2
studentIdsArray.push(1); // add 1 again (duplicate allowed)

console.log("Array:", studentIdsArray);
// Output: Array: [1, 2, 1]


// ------------------------------------------------------
// 2) SET
// ------------------------------------------------------
// A Set stores only unique values.
// Duplicate values are automatically ignored.
// You can add values using add().

const studentIdsSet = new Set(); // create an empty set

studentIdsSet.add(1); // add 1
studentIdsSet.add(2); // add 2
studentIdsSet.add(1); // duplicate value, so it will not be added again

console.log("Set:", studentIdsSet);
// Output: Set: Set(2) { 1, 2 }


// ------------------------------------------------------
// 3) CONVERT ARRAY TO SET
// ------------------------------------------------------
// This is useful when you want to remove duplicates from an array.

const numbers = [1, 2, 3, 4, 4, 5, 5, 6]; // array with duplicate values

const uniqueNumbers = new Set(numbers); // convert array to set

console.log("Unique Numbers Set:", uniqueNumbers);
// Output: Set(6) { 1, 2, 3, 4, 5, 6 }


// ------------------------------------------------------
// 4) CONVERT SET BACK TO ARRAY
// ------------------------------------------------------
// Sometimes you may want to use a Set result as an array again.

const uniqueNumbersArray = [...uniqueNumbers]; // spread operator converts set to array

console.log("Unique Numbers Array:", uniqueNumbersArray);
// Output: [1, 2, 3, 4, 5, 6]


// ------------------------------------------------------
// 5) ANOTHER SIMPLE EXAMPLE
// ------------------------------------------------------

const newList = new Set(); // empty set

newList.add(10);
newList.add(20);
newList.add(10); // duplicate, ignored

console.log("New List:", newList);
// Output: Set(2) { 10, 20 }