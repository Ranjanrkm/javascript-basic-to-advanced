// =====================================================
// Beginner Friendly JavaScript: Set Methods
// =====================================================

// A Set stores only unique values.
// Duplicate values are automatically ignored.

const newList = new Set();

// -----------------------------------------------------
// 1) add()
// -----------------------------------------------------
// add() is used to insert values into a Set.

newList.add(1);
newList.add(2);
newList.add(3);
newList.add(2); // duplicate, so it will not be added again

console.log("After add():", newList);
// Output: Set(3) { 1, 2, 3 }


// -----------------------------------------------------
// 2) delete()
// -----------------------------------------------------
// delete() removes a specific value from the Set.
// It returns true if the value was found and removed,
// otherwise false.

newList.delete(3); // removes 3

console.log("After delete():", newList);
// Output: Set(2) { 1, 2 }


// -----------------------------------------------------
// 3) clear()
// -----------------------------------------------------
// clear() removes all values from the Set.

const tempSet = new Set([10, 20, 30]);
tempSet.clear();

console.log("After clear():", tempSet);
// Output: Set(0) { }


// -----------------------------------------------------
// 4) has()
// -----------------------------------------------------
// has() checks whether a value exists in the Set.
// It returns true or false.

console.log("Does newList have 2?", newList.has(2)); // true
console.log("Does newList have 5?", newList.has(5)); // false


// -----------------------------------------------------
// 5) keys()
// -----------------------------------------------------
// keys() returns all values in the Set.
// In Set, keys() and values() give the same result.

console.log("Keys:", newList.keys());
// Output: Set Iterator { 1, 2 }


// -----------------------------------------------------
// 6) values()
// -----------------------------------------------------
// values() returns all the values in the Set.

console.log("Values:", newList.values());
// Output: Set Iterator { 1, 2 }


// -----------------------------------------------------
// 7) forEach()
// -----------------------------------------------------
// forEach() is used to loop through all values in the Set.

newList.forEach((value) => {
  console.log("Value inside forEach:", value);
});

// Output:
// Value inside forEach: 1
// Value inside forEach: 2


// -----------------------------------------------------
// 8) Convert Set to Array
// -----------------------------------------------------
// Sometimes you may want to use Set values as an array.

const setToArray = [...newList];

console.log("Set converted to Array:", setToArray);
// Output: [1, 2]