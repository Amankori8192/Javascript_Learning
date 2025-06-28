
// let myName = "aman     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.aman = function(){
    console.log(`aman is present in all objects`);
}

Array.prototype.heyAman = function(){
    console.log(`Aman says hello`);
}

// heroPower.aman()
// myHeros.aman()
// myHeros.heyAman()
// heroPower.heyAman()


// Prototypes in JavaScript are a powerful feature that allows objects to inherit properties and methods from other objects. Every JavaScript object has a prototype, which is itself an object. When you try to access a property or method on an object, JavaScript first checks if that property exists on the object itself. If it doesn't, it looks for that property in the object's prototype, and then in the prototype's prototype, and so on, until it reaches the end of the prototype chain (which is usually `Object.prototype`).




// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User



// Prototypes are used to implement inheritance in JavaScript. When you create a new object, you can set its prototype to another object, allowing it to inherit properties and methods from that object. This is done using the `__proto__` property or the `Object.setPrototypeOf()` method.




// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)







let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}


anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
