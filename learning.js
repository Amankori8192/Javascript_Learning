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


// const name = "Aman"
// const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);



// ....................stack ( for Primitive data type ) & Heap memory ( for non-primitive data type)..................

// Primitive data types are stored in stack memory.
// Example:

// let myName = "Aman";
// let anotherName = myName;
// anotherName = "Rahul";

// console.log(myName);      // Output: Aman
// console.log(anotherName); // Output: Rahul

// Changing anotherName does not affect myName because primitives are copied by value.


// Non-primitive data types are stored in heap memory.
// Example:

// let userOne = {
//     email: "user@example.com",
//     upi: "user@ybl"
// };

// let userTwo = userOne;
// userTwo.email = "newuser@example.com";

// console.log(userOne.email);   // Output: newuser@example.com
// console.log(userTwo.email);   // Output: newuser@example.com

// Changing userTwo also changes userOne because non-primitives are copied by reference.


