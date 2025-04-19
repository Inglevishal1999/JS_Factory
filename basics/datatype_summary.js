
// two types of data: 1)Primitive type  2)Non-Primitive Type(Reference Type)
//1. Primitive datatype:
// String
// Number
// Boolean
// Symbol
// null
// Bigint
// undefined
// 2.Non-Primitive Datatype:
// Arrays
// Functions
// Objects

const id =Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);
// Bigint datatype
const bigNumber = 315456942112654558778n;
console.log(bigNumber);
console.log(typeof bigNumber);
//Non-Primitive type:
let heros = ["Shaktiman","Dino","Yuga"]
console.log(heros);
console.log(typeof heros);

let myObj ={
    name: "Vishal",
    age: '26'
}
console.log(myObj);
console.log(typeof myObj);

const myFunction = function () {
    console.log("Hello World");
    
}
console.log(myFunction);

