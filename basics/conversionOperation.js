let a = 33

console.log(typeof a);

console.log(typeof(a));

console.log("-----------------------------------------------------");

let b = "33"

console.log(typeof b);

console.log(typeof(b));

console.log("-----------------------------------------------------");

let changeNumber = Number(b);
console.log(typeof changeNumber);
console.log(changeNumber);


console.log("-----------------------------------------------------");

let p = "33abc"
let changeNumber1 = Number(p);
console.log(typeof changeNumber1);
console.log("check the value: ",changeNumber1);

console.log("-----------------------------------------------------");

let n = "33abc"
let changeNumber2 = Number(n);
console.log(typeof changeNumber2);
console.log("check the value: ",changeNumber2);


console.log("-----------------------------------------------------");

let n1 = null
let changeNumber3 = Number(n1);
console.log(typeof changeNumber3);
console.log("check the value: ",changeNumber3);



console.log("-----------------------------------------------------");

let n2 = undefined
let changeNumber4 = Number(n2);
console.log(typeof changeNumber4);
console.log("check the value: ",changeNumber4);



console.log("-----------------------------------------------------");

let n3 = true
let changeNumber5 = Number(n3);
console.log(typeof changeNumber5);
console.log("check the value: ",changeNumber5);