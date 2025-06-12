// array

const myArr = [0, 1, 2, 3, 4, 5]

const myHeors = ["flash", "adam"]

const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);


// ...............Array methods.................

// through push() method add element in the end of Array

// myArr2.push(6)

// through pop() method remove element in the end of Array

// myArr2.push()

// through unshift() method add element in the starting of Array.

// myArr2.unshift(9)

// through shift() method remove element in the starting of Array.

// myArr2.shift()

// through includes() method we check the element is exist in our array or not

// console.log(myArr.includes(9));

// through indexof() method, we check the element value of the given index

// console.log(myArr.indexOf(3));

// const newArr = myArr.join()   //to bind and convert in string
// console.log(myArr);
// console.log( newArr);


// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)        // return a copy or slice of array ( as per given index 3rd index is didn't consider )

// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)       // return a portion of array ( it includes the all index also manipulate the original array )
// console.log("C ", myArr);
// console.log(myn2);







const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);


// let do this with spread operator (...hero) it converts both array in single array(new array)

const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros);
// console.log(marvel_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


// console.log(Array.isArray("Hitesh"))             //  to check pass element is exist or not
// console.log(Array.from("Hitesh"))               //  to convert in array
// console.log(Array.from({name: "hitesh"}))       // (whenever unable to making an array)it's return a empty array / from the object if you are try to making an array. so, you have to tell them you are trying to making an array from the keys or value of object.

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3));