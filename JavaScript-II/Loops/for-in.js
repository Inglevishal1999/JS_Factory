

// var obj ={
//     name:'Ziyan',
//     gender:'Male',
//     id:101,
//     city:"Delhi"
// }

// for(var x in obj){
//     console.log(x, ":",obj[x])
// }

/*
output of for in object ->

name : Ziyan
gender : Male
id : 101
city : Delhi
*/

var obj ={
    name:'Ziyan',
    gender:'Male',
    id:101,
    city:"Delhi"
}
console.log(obj)

// for(var x of obj){
//     console.log(x)
// }

for (const key of Object.keys(obj)) {
    console.log(key,":" ,obj[key]);
  }
  