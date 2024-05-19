
const { add, sub } = require("./math");
const { line } = require("../util/util");
const math = require("./math");
const async = require("./async");

console.log(__dirname);
console.log(__filename);

line('1. Fuction')
// Function
const addFun = (a, b) => a + b;
const subFun = (a, b) => a - b;

console.log(addFun(2, 3));
console.log(subFun(12, 3));

// invoke functions declared in seperate script 
// - entire file
console.log(math.add(2, 3));
console.log(math.sub(12, 3));

// invoke functions declared in seperate script 
// -  selected functions
console.log(add(2, 3));
console.log(sub(12, 3));

const test_dataTypes = () => {

    // data types
    let foo = 42; // foo is now a number
    foo = "bar"; // foo is now a string
    foo = true; // foo is now a boolean
    
    const foo1 = 42; // foo1 is a number
    const result = foo1 + "1"; // JavaScript coerces foo1 to a string, so it can be concatenated with the other operand
    console.log(result); // 421
    
    console.log(42 / +0); // Infinity
    console.log(42 / -0); // -Infinity
    
    // BigInt
    const x = BigInt(Number.MAX_SAFE_INTEGER); // 9007199254740991n
    console.log(x); 
    console.log(x + 1n); 
    console.log(x + 2n); 
    x + 1n === x + 2n; // false because 9007199254740992n and 9007199254740993n are unequal
    console.log(x + 1n === x + 2n); 
    
    // Number
    Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2; // true because both are 9007199254740992
    console.log(Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2);
    
    console.log({} + []); // "[object Object]"
    
    // data type checking
    const nl = null; // object
    const und = undefined; // undefine
    const num = 4; // bumber
    const str = "String"; // string
    const bi = BigInt(Number.MAX_SAFE_INTEGER);  // bigint
    const obj = {} // object
    const bool = true // boolean
    const fun = (a,b) => {} // function
    const inf = 42 / +0; // number | value: Infinity 
    
    console.log(typeof nl)
    console.log(typeof ud)
    console.log(typeof num)
    console.log(typeof str)
    console.log(typeof bi)
    console.log(typeof obj)
    console.log(typeof bool)
    console.log(typeof fun)
    console.log(typeof inf)
}

const randomFun = () => {
    let timeInMs = Math.random() * 3000;
    console.log("Random function started [ timeInMs => ", timeInMs, " ] ..");

    let test = async () => {
        console.log(
          ".. Random function ended [ timeInMs => ",
          timeInMs,
          " ]"
        );
    };    

    setTimeout(test, timeInMs);    

}

// 1. async functions behaviour
//randomFun();
//randomFun();
//randomFun();

line("2. data types");
// 2. data types
test_dataTypes();

// 3. async
//async.asyncMain();

line("4. spread operator");
// 4.1. spread operator
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

line(4.1)
// 4.1. spread operator
const numbers = [1, "2", 3, 4, 5, 6];

const [one, two, ...rest] = numbers;
console.log(typeof numbers); // object
console.log(typeof one); // number
console.log(typeof two); // string
console.log(typeof rest); // object

line(4.2)
// 4.2. spread operator
const vehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const updatedVehicle = { ...vehicle, ...updateVehicle };
console.log(updatedVehicle);

// 5 Map
line("5. Map");
const map = new Map();
console.log(map)
//const line = "_".repeat(process.stdout.columns);
//const line = "_".repeat(process.stdout.columns-90);

line(5.1);
// 5.1 Add values to the map
map.set('name', 'freeCodeCamp');
map.set('type', 'blog');
map.set('writer', 'Tapas Adhikary');
console.log(map)

line(5.2);
// 5.2 Add a different writer
map.set('writer', 'Someone else!');
console.log(map)

console.log(map.get('name')); // returns freeCodeCamp

const freeCodeCampBlog = new Map([
    ["name", "freeCodeCamp"],
    ["type", "blog"],
    ["writer", "Tapas Adhikary"],
]);
console.log(freeCodeCampBlog);

line(5.3);
// 5.3 Map keys can be of any type, a primitive, or an object.
const funMap = new Map();

funMap.set(360, 'My House Number'); // number as key
funMap.set(true, 'I write blogs!'); // boolean as key

let obj = {'name': 'tapas'}
funMap.set(obj, true); // object as key

console.log(funMap);

line(5.4);
// 5.4 A regular JavaScript object always treats the key as a string. Even when you pass it a primitive or object, it internally converts the key into a string:
const funObj = {};
// add a property. Note, passing the key as a number.
funObj[360] = 'My House Number';
// It returns true because the number 360 got converted into the string '360' internally!
console.log(funObj[360] === funObj['360']);

line(5.6);
// 5.6 Map has in-built properties and methods that
console.log("size of the map is", map.size);
// returns true, if map has an element with the key, 'John'
console.log(map.has('John')); 
// returns false, if map doesn't have an element with the key, 'Tapas'
console.log(map.has("name")); 
//
map.delete("name"); // removes the element with key, 'Sam'
console.log(map);
// Clear the map by removing all the elements
map.clear(); 
console.log(map);
// size
console.log(map.size) // It will return, 0

line(5.7);
// 5.7 MapIterator: keys(), values(), and entries() in JavaScript
const ageMap = new Map([
  ["Jack", 20],
  ["Alan", 34],
  ["Bill", 10],
  ["Sam", 9],
]);
console.log(ageMap.keys());
console.log(ageMap.values());
console.log(ageMap.entries());

line(5.8);
// 5.8 How to Iterate Over a Map in JavaScript
// with forEach
ageMap.forEach((value, key) => {
   console.log(`${key} is ${value} years old!`);
});
// with for-of
for(const [key, value] of ageMap) {
  console.log(`${key} is ${value} years old!`);
}

line(5.9);
// 5.9 How to Convert an Object into a Map in JavaScript
const address = {
    Tapas: "Bangalore",
    James: "Huston",
    Selva: "Srilanka",
};
const addressMap = new Map(Object.entries(address));
console.log(addressMap)

line('5.10');
// 5.10 How to Convert a Map into an Object in JavaScript
const xobj = Object.fromEntries(addressMap);
console.log(xobj);

line(5.11);
// 5.11 How to Convert a Map into an Array in JavaScript
const caf = new Map();
caf.set("milk", 200);
caf.set("tea", 300);
caf.set("coffee", 500);

console.log(Array.from(caf));
console.log(Array.from(caf)[0]);
console.log(Array.from(caf)[0][0]);
console.log(Array.from(caf)[0][1]);
console.log(typeof caf);
console.log(typeof Array.from(caf)[0]);
console.log(typeof Array.from(caf)[0][0]);
console.log(typeof Array.from(caf)[0][1]);

console.log([...caf]);


line('6. Set');
// 6. Set
// Create a set - saladSet
// add, delete, clear
const saladSet = new Set();

// Add some vegetables to it
saladSet.add('🍅'); // tomato
saladSet.add('🥑'); // avocado
saladSet.add('🥕'); // carrot
saladSet.add('🥒'); // cucumber

console.log(saladSet);

saladSet.add("🥒");
console.log(saladSet);

// The salad has a🥕, so returns true
console.log('Does the salad have a carrot?', saladSet.has('🥕'));

// The salad doesn't have a🥦, so returns false
console.log('Does the salad have broccoli?', saladSet.has('🥦'));

saladSet.delete("🥑");
console.log("I do not like 🥑, remove from the salad:", saladSet);

saladSet.clear();
console.log(saladSet);

line(6.1)
// 6.1 How to Iterate Over a Set in JavaScript
// Create a Set
const houseNos = new Set([360, 567, 101]);

// Get the SetIterator using the `values()` method
console.log(houseNos.values());
// As Set doesn't have keys, the keys() method returns a SetIterator to retrieve its values:
console.log(houseNos.keys());
// With Map, the entries() method returns an iterator to retrieve key-value pairs. Again there are no keys in a Set, so entries() returns a SetIterator to retrieve the value-value pairs:
console.log(houseNos.entries());

line(6.2)
// 6.2 How to Enumerate over a Set in JavaScript
// with forEach
houseNos.forEach((value) => {
    console.log(value);
});
// with for-of
for(const value of houseNos) {
    console.log(value);
}

line(6.3)
// 6.3 How to Convert a Set into an array in JavaScript
const arr = [...houseNos];
console.log(arr);

line(6.4)
// 6.4 Unique values from an array using the Set in JavaScript
// Create a mixedFruit array with a few duplicate fruits
const mixedFruit = ['🍉', '🍎', '🍉', '🍈', '🍏', '🍎', '🍈'];

// Pass the array to create a set of unique fruits
const mixedFruitSet = new Set(mixedFruit);

console.log(mixedFruitSet);

line(6.5)
// 6.5 Set and Object in JavaScript
// Create a person object
const person = {
   'name': 'Alex',
   'age': 32
 };
// Create a set and add the object to it
const pSet = new Set();
pSet.add(person);
console.log(pSet);

// Change the name of the person
person.name = 'Bob';
// Add the person object to the set again
pSet.add(person);
console.log(pSet);
// Set is a collection of unique elements. By changing the property of the object, we haven't changed the object itself. Hence Set will not allow duplicate elements.

line('7. Arrays looping')
numbers.forEach((value) => {
    console.log(value);
});

for (const value of numbers) {
    console.log(value);
}

line("8. String")
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(text.slice(0, 0));
console.log(text.slice(0, 1));
console.log(text.slice(1, 1));
console.log(text.slice(1, 2));
console.log(text.slice(7, 13));
line()
console.log(text.charAt(0));
console.log(text.charAt(4));
console.log(text[4]);
console.log(text.replace("Banana", "Lime"));
console.log(text.replaceAll("i", "x"));

line("8.1")
let txt = "Hello World!";
console.log(txt.split());
console.log(txt.split(" "));
console.log(txt.split(""));

line("9. ternary");
function getFee(isMember) {
  return isMember ? '$2.00' : '$10.00';
}
console.log(getFee(true));
// Expected output: "$2.00"
console.log(getFee(false));
// Expected output: "$10.00"
console.log(getFee(null));
// Expected output: "$10.00"



