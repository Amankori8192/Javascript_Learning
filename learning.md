
number => 2
// bigint = 955985223564222n
// string => ""
// boolean => true/false
// null => standalone value
// undefined => value is not assigned yet
// symbol => unique



Type of value	    Result
 Undefined    	    "undefined
 Null	            "object"
 Boolean	        "boolean"
 Number	            "number"
 String	            "string"
 Object         	"object"
 function           "function" /  function object
 array              "object"
 Symbol             "symbol"



IIFE :- Immediately Invoked Function Expressions (IIFEs): are a JavaScript design pattern where a function is defined and executed immediately after its creation. This pattern is used to create a private scope for variables, preventing them from polluting the global scope and avoiding naming conflicts. 



falsy values
false, 0, -0, BigInt 0n, "", null, undefined, NaN

truthy values
"0", 'false', " ", [], {}, function(){}



Difference b/w call , apply & bind

call :- When you want to invoke a function right away with a specified this context and individual arguments.

apply :- When you want to invoke a function right away with an array of arguments.

bind :- When you want to create a new function with a specific this context (and optional preset arguments), to be invoked later.



Pure Function


A pure function is a function that:

Always returns the same output for the same set of input arguments.

Does not cause or rely on any side effects (such as modifying external variables, altering input data, or interacting with the outside world like the DOM, API calls, or random generators).

Depends ONLY on its input parameters for its operation.

Example:-

 function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5


Impure Function

An impure function is a function that:
Might return different outputs for the same input arguments. Causes or relies on side effects, such as modifying variables outside its scope, altering input data, logging to the console, accessing the current time, or generating random numbers.

Example:-

let counter = 0;
function increment() {
  counter++;
  return counter;
}

increment(); // 1
increment(); // 2

Event loop

The JavaScript event loop is a fundamental mechanism that enables JavaScript to perform asynchronous operations efficiently despite being single-threaded. It manages the execution of multiple tasks by continuously monitoring the call stack and the task queues, allowing non-blocking behavior.


JavaScript ES6 (ECMAScript 2015) introduced features :

let and const

Arrow functions

Template literals

Destructuring assignment

Default parameters in functions

Rest and spread operators

Enhanced object literals: Shorthand syntax for object properties and methods, dynamic property keys.

Classes: Cleaner syntax for defining constructor functions and inheritance.

Modules: Support for import and export to organize code into reusable pieces.

Promises: Built-in support for asynchronous programming.

Iterators and generators: For custom iteration protocols and lazy evaluation.

Map and Set: New collection types for key-value pairs and unique values.

New string and array methods: Such as startsWith(), endsWith(), includes() for strings, and find(), findIndex() for arrays.

Symbols: New primitive type for unique identifiers.

Binary and octal literals: Support for 0b and 0o number formats.

New APIs: Enhanced Math, Number, and Object methods.