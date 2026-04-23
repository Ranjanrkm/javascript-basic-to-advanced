// =====================================================
// Beginner Friendly JavaScript: Map
// =====================================================

// A Map stores data in key-value pairs.
// It is useful when you want to store a value with a specific key.

// -----------------------------------------------------
// 1) Create a new Map
// -----------------------------------------------------

const newMap = new Map();

// -----------------------------------------------------
// 2) set()
// -----------------------------------------------------
// set() is used to add key-value pairs into a Map.

newMap.set(10, "value will be here");
newMap.set(20, "another value");
newMap.set(30, "third value");

console.log("Map after set():", newMap);
// Output: Map(3) { 10 => "value will be here", 20 => "another value", 30 => "third value" }


// -----------------------------------------------------
// 3) get()
// -----------------------------------------------------
// get() is used to get the value of a specific key.

console.log("Value of key 10:", newMap.get(10));
// Output: value will be here


// -----------------------------------------------------
// 4) has()
// -----------------------------------------------------
// has() checks whether a key exists in the Map.
// It returns true or false.

console.log("Does key 20 exist?", newMap.has(20)); // true
console.log("Does key 50 exist?", newMap.has(50)); // false


// -----------------------------------------------------
// 5) delete()
// -----------------------------------------------------
// delete() removes a key-value pair from the Map.

newMap.delete(20);

console.log("Map after delete():", newMap);
// Output: Map(2) { 10 => "value will be here", 30 => "third value" }


// -----------------------------------------------------
// 6) size
// -----------------------------------------------------
// size gives the total number of items in the Map.

console.log("Size of Map:", newMap.size);
// Output: 2


// -----------------------------------------------------
// 7) keys()
// -----------------------------------------------------
// keys() returns all keys from the Map.

console.log("Keys:", newMap.keys());
// Output: Map Iterator { 10, 30 }


// -----------------------------------------------------
// 8) values()
// -----------------------------------------------------
// values() returns all values from the Map.

console.log("Values:", newMap.values());
// Output: Map Iterator { "value will be here", "third value" }


// -----------------------------------------------------
// 9) forEach()
// -----------------------------------------------------
// forEach() is used to loop through all key-value pairs.

newMap.forEach((value, key) => {
  console.log("Key:", key, "Value:", value);
});

// Output:
// Key: 10 Value: value will be here
// Key: 30 Value: third value


// -----------------------------------------------------
// 10) Convert Map to Array
// -----------------------------------------------------
// Sometimes you may want to convert Map into array form.

const mapToArray = [...newMap];

console.log("Map converted to Array:", mapToArray);
// Output: [ [10, "value will be here"], [30, "third value"] ]