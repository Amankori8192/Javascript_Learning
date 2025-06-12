// ways to create object :-

// singleton (A singleton object in JavaScript is an object that is instantiated only once throughout the application's lifecycle
// whenever we making object from the constructor method, it always a singleton.
// const tinderUser = new object()

// constructor:-
// object.create

// object literals :-

const mySym = Symbol("key1")

const jsUser = {
    fullname : {
        userfullname : {
            firstname : "aman",
            lastname : "kumar",
        },
    },
    age : 20,
    location: "Ghaziabad",
    email: "abc@gmail.com",
    isLoggedin: false,
    [mySym]: "mykey1",  // symbol is special type datatye. if you're refering a sym. you have to use square notation bcos without square brackets object is taking as a string (you should check the typeof symbol.)

}

//  console.log(jsUser.fullname.userfullname.lastname);
 
// console.log(jsUser[mySym]);
// console.log(typeof jsUser[mySym]);
// console.log(jsUser);  // in this output you can see symbol is actully behaving like a symbol.



// console.log(jsUser.fullName);
// console.log(jsUser.location)
// console.log(jsUser["isLoggedin"]);
// console.log(jsUser["fullName"])

jsUser.greeting = function( ){
    return(`Hello jsUser, ${this.fullName}`);
    
}
// console.log(jsUser.greeting());





// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aman",
            lastname: "Kumar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}       //latest
// console.log(obj4);




const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// destructring 

const course = {
    coursename : "javascript",
    price: 999,
    courseInstructor: "hitesh choudhary",

}

// course.courseInstructor   //if you want to access the value of courseinstructer

// destructring
const {courseInstructor: instructor} = course
// console.log(instructor);




// Json

// Example JSON object (not valid JS unless assigned or parsed):
// {
//     "name": "hitesh",
//     "coursename" : "js in hindi",
//     "price": "free"
// }

// Example JSON array:
// [
//     {},
//     {},
//     {}
// ]


