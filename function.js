function sayMyName(){
    console.log("A");
    console.log("M");
    console.log("A");
    console.log("N");
}
// sayMyName()

function addTwoNumbers(num1 , num2){
    let result = num1 + num2
    return result  
    
}
// result = addTwoNumbers(5,4)
// console.log("Result:", result);


 function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


// rest operator

function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject){
    // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));


// ................this keyword..............

// const user = {
//     username: "Aakash",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// user.welcomeMessage()
// user.username = "John"
// user.welcomeMessage()

// console.log(this);   // in the node environment this keyword return a empty object for global context and when you're check on browser console it's return a window obejct (on a browser global context represent a window object).

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);           // here , this is also undefind , bcos its a global object.
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()


// .................arrow function..............


// const addTwo = (num1, num2) => {
//     return num1 + num2                 // if you started curly parethesis you have to write return
// }


// implicit return

// const addTwo = (num1, num2) =>  num1 + num2      // no need to write return or curly parenthesis , generally use for one line code

// const addTwo = (num1, num2) => ( num1 + num2 )



const addTwo = (num1, num2) => ({username: "hitesh"})
// console.log(addTwo(2, 4))



// Immediately Invoked Function Expressions (IIFE)

// Immediately Invoked Function Expressions (IIFEs) are a JavaScript design pattern where a function is defined and executed immediately after its creation. This pattern is used to create a private scope for variables, preventing them from polluting the global scope and avoiding naming conflicts. 

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

// if you write two iife you should have to tell first iife function where to stop with the semi-colon (;) , generlly code editer add the semi-column but this is a special case so, must remeber to add ; 

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Aakash')

