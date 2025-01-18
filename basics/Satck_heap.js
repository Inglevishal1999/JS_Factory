//Memory have two types:
//1)Stack Memory: - when the all Primitive types are there then you can use only "Stack Memory".

//2)Heap Memory: When all the Non Primitive types are there then you can only usethe 'Heap Memory";

let myYoutubename = "VishalSign.com"
let anothername = myYoutubename
anothername = "Chaiaurbuscuit"
console.log(myYoutubename);

console.log(anothername);


let userOne = {
    email:"user@google.com",
    upi:'user@ybl'
}

let userTwo=userOne;
userTwo.email="Piyush12@gmail.com";
console.log(userTwo.email);
console.log(userOne.email);
