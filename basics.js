// .......................data types................


//Primitive data type:

// number => 2
// bigint = 955985223564222n
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value is not assigned yet
// symbol => unique

//Non-Primitive data type:

// Array , Object , function 


// ...............datatype conversion........................


// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");


// .................operator...............................


// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

// console.log(null > 0);
// console.log(null == 0);
// console.log(null >= 0);

// console.log(undefined == 0);
// console.log(undefined > 0);
// console.log(undefined < 0);

// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0


// === 

// console.log("2" === 2);

// console.log(typeof undefined); // undefined
// console.log(typeof null); // object


// Type of value	    Result

// Undefined    	    "undefined"
// Null	                "object"
// Boolean	            "boolean"
// Number	            "number"
// String	            "string"
// Object         	    "object"
// function              "function" /  function object
// array              I  "object"
// Symbol                 "symbol"


const name = "Aman"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



// ....................stack ( for Primitive data type ) & Heap memory ( for non-primitive data type)..................

// Primitive data types are stored in stack memory.
// Example:

let myName = "Aman";
let anotherName = myName;
anotherName = "Rahul";

// console.log(myName);      // Output: Aman
// console.log(anotherName); // Output: Rahul

// Changing anotherName does not affect myName because primitives are copied by value.


// Non-primitive data types are stored in heap memory.
// Example:

let userOne = {
    email: "user@example.com",
    upi: "user@ybl"
};

let userTwo = userOne;
userTwo.email = "newuser@example.com";

// console.log(userOne.email);   // Output: newuser@example.com
// console.log(userTwo.email);   // Output: newuser@example.com

// Changing userTwo also changes userOne because non-primitives are copied by reference.


// ....................string in js.................

let str = new String('Aakash')

// properties of String

// console.log(str.length);
// console.log(str[2]);
// console.log(str.toUpperCase());
// console.log(str.charAt(2));
// console.log(str.indexOf('s'));

let gameName = new String('codewars')

// console.log(gameName.substring(0, 4))

// console.log(gameName.slice(-7, 4))  // the - value start with the reverse

// console.log(gameName.slice(2, 4))

const newString = "   aman    "

// console.log(newString);              
// console.log(newString.trim());

const url = "https://hitesh.com/hitesh%20choudhary"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('sundar'))

// console.log(gameName.split('-'));



// ...................math Properties..................



const score = 400
// console.log(score);


const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)