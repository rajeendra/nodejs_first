
const { add, sub } = require("./math");
const { line } = require("../util/util");
const math = require("./math");
const async = require("./async");

console.log(__dirname);
console.log(__filename);

line('0. Basics')
nn = 1
mm = "Description"
console.log(`left text ${nn} middle text ${mm} right text`);
console.log("left text", nn, "middle text", mm, "right text");

line()
// Checking the Flag Or Boolean state of attributes
a = null
console.log(a?true:false) // false
a = undefined
console.log(a?true:false) // false
a = 0
console.log(a?true:false) // false
a = ''
console.log(a?true:false) // false
a = 7
console.log(a?true:false) // true
a = 7 / 0
console.log(a)
console.log(a?true:false) // true

line(0.1)
b = { duration: null, title: "" };
console.log(b.duration?true:false) // false
b = { duration: '', title: "" };
console.log(b.duration?true:false) // false
b = { duration: 7, title: "" };
console.log(b.duration?true:false) // true

line('1. Fuction')
// Function
const addFun = (a, b) => a + b;
const subFun = (a, b) => { return(a - b)};

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

//
line("1.1. run a function, the name in a string");
const functionName = "addFun";
const result = eval(functionName + "(" + 2 + ", " + 3 + ")"); 
console.log(result);

const dataTypes = () => {
    line("2. data types");
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

const spreadOperator = () =>{
    line("4. spread operator");
    // 4.1. spread operator
    const numbersOne = [1, 2, 3];
    const numbersTwo = [4, 5, 6];
    const numbersCombined = [...numbersOne, ...numbersTwo];
    console.log(numbersCombined);

    line(4.1);
    // 4.1. spread operator
    const numbers = [1, "2", 3, 4, 5, 6];

    const [one, two, ...rest] = numbers;
    console.log(typeof numbers); // object
    console.log(typeof one); // number
    console.log(typeof two); // string
    console.log(typeof rest); // object

    line(4.2);
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

    line(4.3);
    const array = [1, 2, 3];
    const objOne = { ...array }; // { 0: 1, 1: 2, 2: 3 }
    console.log(objOne);

    //
    function myFunction(x, y, z) {
    console.log(x, y, z);
    }
    const args = [0, 1, 2];
    myFunction(...args);

    //
    function myFunction1(v, w, x, y, z) {
    console.log(z);
    }
    const args1 = [0, 1];
    myFunction1(-1, ...args1, 2, ...[3]);

    // Conditionally adding values to an array
    const isSummer = false;
    const fruits = ["apple", "banana", ...(isSummer ? ["watermelon"] : [])];
    console.log(fruits); // ['apple', 'banana']

    const isSummer1 = false;
    const fruits1 = {
    apple: 10,
    banana: 5,
    ...(isSummer1 && { watermelon: 30 }),
    };
    console.log(fruits1);
}

const maps = () => {

    line("5. Map");
    const map = new Map();
    console.log(map);
    //const line = "_".repeat(process.stdout.columns);
    //const line = "_".repeat(process.stdout.columns-90);

    line(5.1);
    // 5.1 Add values to the map
    map.set("name", "freeCodeCamp");
    map.set("type", "blog");
    map.set("writer", "Tapas Adhikary");
    console.log(map);

    line(5.2);
    // 5.2 Add a different writer
    map.set("writer", "Someone else!");
    console.log(map);

    console.log(map.get("name")); // returns freeCodeCamp

    const freeCodeCampBlog = new Map([
    ["name", "freeCodeCamp"],
    ["type", "blog"],
    ["writer", "Tapas Adhikary"],
    ]);
    console.log(freeCodeCampBlog);

    line(5.3);
    // 5.3 Map keys can be of any type, a primitive, or an object.
    const funMap = new Map();

    funMap.set(360, "My House Number"); // number as key
    funMap.set(true, "I write blogs!"); // boolean as key

    let obj = { name: "tapas" };
    funMap.set(obj, true); // object as key

    console.log(funMap);

    line(5.4);
    // 5.4 A regular JavaScript object always treats the key as a string. Even when you pass it a primitive or object, it internally converts the key into a string:
    const funObj = {};
    // add a property. Note, passing the key as a number.
    funObj[360] = "My House Number";
    // It returns true because the number 360 got converted into the string '360' internally!
    console.log(funObj[360] === funObj["360"]);

    line(5.6);
    // 5.6 Map has in-built properties and methods that
    console.log("size of the map is", map.size);
    // returns true, if map has an element with the key, 'John'
    console.log(map.has("John"));
    // returns false, if map doesn't have an element with the key, 'Tapas'
    console.log(map.has("name"));
    //
    map.delete("name"); // removes the element with key, 'Sam'
    console.log(map);
    // Clear the map by removing all the elements
    map.clear();
    console.log(map);
    // size
    console.log(map.size); // It will return, 0

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
    for (const [key, value] of ageMap) {
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
    console.log(addressMap);

    line("5.10");
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
}

const sets = () => {
    line("6. Set");
    // 6. Set
    // Create a set - saladSet
    // add, delete, clear
    const saladSet = new Set();

    // Add some vegetables to it
    saladSet.add("🍅"); // tomato
    saladSet.add("🥑"); // avocado
    saladSet.add("🥕"); // carrot
    saladSet.add("🥒"); // cucumber

    console.log(saladSet);

    saladSet.add("🥒");
    console.log(saladSet);

    // The salad has a🥕, so returns true
    console.log("Does the salad have a carrot?", saladSet.has("🥕"));

    // The salad doesn't have a🥦, so returns false
    console.log("Does the salad have broccoli?", saladSet.has("🥦"));

    saladSet.delete("🥑");
    console.log("I do not like 🥑, remove from the salad:", saladSet);

    saladSet.clear();
    console.log(saladSet);

    line(6.1);
    // 6.1 How to Iterate Over a Set in JavaScript
    // Create a Set
    const houseNos = new Set([360, 567, 101]);

    // Get the SetIterator using the `values()` method
    console.log(houseNos.values());
    // As Set doesn't have keys, the keys() method returns a SetIterator to retrieve its values:
    console.log(houseNos.keys());
    // With Map, the entries() method returns an iterator to retrieve key-value pairs. Again there are no keys in a Set, so entries() returns a SetIterator to retrieve the value-value pairs:
    console.log(houseNos.entries());

    line(6.2);
    // 6.2 How to Enumerate over a Set in JavaScript
    // with forEach
    houseNos.forEach((value) => {
        console.log(value);
    });
    // with for-of
    for (const value of houseNos) {
        console.log(value);
    }

    line(6.3);
    // 6.3 How to Convert a Set into an array in JavaScript
    const arr = [...houseNos];
    console.log(arr);

    line(6.4);
    // 6.4 Unique values from an array using the Set in JavaScript
    // Create a mixedFruit array with a few duplicate fruits
    const mixedFruit = ["🍉", "🍎", "🍉", "🍈", "🍏", "🍎", "🍈"];

    // Pass the array to create a set of unique fruits
    const mixedFruitSet = new Set(mixedFruit);

    console.log(mixedFruitSet);

    line(6.5);
    // 6.5 Set and Object in JavaScript
    // Create a person object
    const person = {
        name: "Alex",
        age: 32,
    };
    // Create a set and add the object to it
    const pSet = new Set();
    pSet.add(person);
    console.log(pSet);

    // Change the name of the person
    person.name = "Bob";
    // Add the person object to the set again
    pSet.add(person);
    console.log(pSet);
    // Set is a collection of unique elements. By changing the property of the object, we haven't changed the object itself. Hence Set will not allow duplicate elements.
}

const iterations = () => {
    line("7. iteration");

    const numbers = [1, "2", 3, 4, 5, 6];

    numbers.forEach((value) => {
        console.log(value);
    });

    for (const value of numbers) {
        console.log(value);
    }

    // iterate properties of an object javascript
    line("7.1 iterate properties of an object javascript");
    const object = { a: 1, b: 2, c: 3 };
    for (const property in object) {
        console.log(`${property}: ${object[property]}`);
    }

    line("7.2 Labeled statement");
    let str = "";
    loop1: for (let i = 0; i < 5; i++) {
        if (i === 1) {
            continue loop1;
        }
        str = str + i;
    }
    console.log(str);

    line("7.3 do...while");
    let result = "";
    let i = 0;
    do {
        i = i + 1;
        result = result + i;
    } while (i < 5);
    console.log(result);

    line("7.4 while");
    let n = 0;
    while (n < 3) {
        n++;
    }
    console.log(n);
    // Expected output: 3
}

const strings = () => {

    line("8. String");
    let text = "Apple, Banana, Kiwi";
    let part = text.slice(7, 13);
    console.log(text.slice(0, 0));
    console.log(text.slice(0, 1));
    console.log(text.slice(1, 1));
    console.log(text.slice(1, 2));
    console.log(text.slice(7, 13));
    line();
    console.log(text.charAt(0));
    console.log(text.charAt(4));
    console.log(text[4]);
    console.log(text.replace("Banana", "Lime"));
    console.log(text.replaceAll("i", "x"));

    line("8.1");
    let txt = "Hello World!, Dear";
    console.log(txt.split());
    console.log(txt.split(" "));
    console.log(txt.split(""));
    console.log(txt.split(","));
}

const nullish = () => {
  function getFee(isMember) {
    return isMember ? "$2.00" : "$10.00";
  }
  console.log(getFee(true));
  // Expected output: "$2.00"
  console.log(getFee(false));
  // Expected output: "$10.00"
  console.log(getFee(null));
  // Expected output: "$10.00"

  line("9.1 Optional chaining");
  // Optional chaining operator (?.)
  cookie1 = { awt: "awt" };
  cookie2 = null;
  console.log(cookie1?.awt ? cookie1?.awt : "abc"); // awt
  console.log(cookie2?.awt ? cookie2?.awt : "abc"); // abc

  line("9.2 Nullish coalescing");
  // Nullish coalescing operator (??)
  let str = "some string";
  const foo1 = str ?? "default string";
  console.log(foo1);

  str = null;
  const foo2 = str ?? "default string";
  console.log(foo2);

  let num = 3;
  const foo3 = num ?? 7;
  console.log(foo3);

  num = 0;
  const foo4 = num ?? 8;
  console.log(foo4);

  num = null;
  const foo5 = num ?? 8;
  console.log(foo5);

  line("9.3 Nullish coalescing assignment");
  // Nullish coalescing assignment (??=)
  num = 3;
  num ??= 7;
  console.log(num);

  num = null;
  num ??= 7;
  console.log(num);

  line();
  let x = 0; // false
  let y = 1; // true

  x &&= 0; // 0   // x==false && .. -> x = 0  // Not assigned
  console.log(x);
  x &&= 1; // 0   // x==false && .. -> x = 0 // Not assigned
  console.log(x);
  y &&= 1; // 1   // y==true && .. -> y = 1 // assigned
  console.log(y);
  y &&= 0; // 0   // y==true && .. -> y = 0 // assigned
  console.log(y);
}

const operators = () => {
  line("10. Operator");
  // The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.

  // 10. strict equality (===) operator
  console.log(1 === 1); // Expected output: true
  console.log("hello" === "hello"); // Expected output: true
  console.log("1" === 1); // Expected output: false
  console.log(0 === false);
  line();
  console.log(1 == 1); // Expected output: true
  console.log("hello" == "hello"); // Expected output: true
  console.log("1" == 1); // Expected output: false
  console.log(0 == false);
  line();
  // 10. strict inequality (!==) operator
  console.log(1 !== 1); // Expected output: false
  console.log("hello" !== "hello"); // Expected output: false
  console.log("1" !== 1); // Expected output: true
  console.log(0 !== false);

  line(10.2);
  // AND operator
  x1 = false;
  a1 = x1 && 7;
  console.log(a1);
  x1 = true;
  a1 = x1 && 7;
  console.log(a1);

  x1 = false;
  b1 = 3;
  console.log(x1 && (b1 >= 3 ? ">=3" : "<3"));
  x1 = true;
  console.log(x1 && (b1 >= 3 ? ">=3" : "<3"));
  b1 = 2;
  console.log(x1 && (b1 >= 3 ? ">=3" : "<3"));

  // OR operator
  x1 = false;
  a1 = x1 || 7;
  console.log(a1);
  x1 = true;
  a1 = x1 || 7;
  console.log(a1);

  line(10.3);
  // Logical OR assignment - combining with attibute flag value
  let c = { duration: 50, title: "" };
  c.duration ||= 10;
  console.log(c.duration); // Expected output: 50
  c.title ||= "The title.";
  console.log(c.title); // Expected output: "title is empty"

  // Logical AND assignment - combining with attibute flag value
  c = { duration: 50, title: "" };
  c.duration &&= 10;
  console.log(c.duration); // Expected output: 50
  c.title &&= "The title.";
  console.log(c.title); // Expected output: "title is empty"

  line(10.4);
  // Division assignment (/=)
  let m = 3;
  m /= 2;
  console.log(m); // Expected output: 1.5
  m /= 0;
  console.log(a); // Expected output: Infinity
  m /= "hello";
  console.log(m); // Expected output: NaN

  // Addition assignment (+=)
  m = 3;
  m += 2;
  console.log(m); // Expected output: 5
  m += 0;
  console.log(m); // Expected output: 5
  m += "hello";
  console.log(m); // Expected output: 5hello
}

const exceptions = () =>{
    
    try {
        nonExistentFunction();
    } catch (error) {
        console.error(error);
        // Expected output: ReferenceError: nonExistentFunction is not defined
        // (Note: the exact output may be browser-dependent)
    }

    // throw
    const getRectArea = (width, height) => {
        if (isNaN(width) || isNaN(height)) {
            throw new Error("Parameter is not a number!");
        }
    }

    try {
        getRectArea(3, "A");
    } catch (e) {
        console.error(e);
        // Expected output: Error: Parameter is not a number!
    }

}

const statements = () => {
    line("12. statements");
    const expr = "Papayas";
    
    switch (expr) {
        case "Oranges":
            console.log("Oranges are $0.59 a pound.");
            break;
        case "Mangoes":
        case "Papayas":
            console.log("Mangoes and papayas are $2.79 a pound.");
            // Expected output: "Mangoes and papayas are $2.79 a pound."
            break;
        default:
            console.log(`Sorry, we are out of ${expr}.`);
    }
}

// 1. async functions behaviour
//randomFun();
//randomFun();
//randomFun();

// 2. Data types
//dataTypes();

// 3. async
//async.asyncMain();

// 4. Spread Operator
//spreadOperator();

// 5. Map
//maps();

// 6. Set
//sets();

// 7. Iteration
//iterations();

// 8. String
//strings();

// 9. Nullish
//nullish();

// 10. Operator
//operators()

// 11. Exception
//exceptions()

// 12. Statements
//statements();




