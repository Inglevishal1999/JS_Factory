var arr = ["Raj",100,"Rahul","Ayush",100,true,99];


//used for finde the index number given element
var newZ = arr.indexOf(100)
console.log(newZ)

var lastind = arr.lastIndexOf(100)
console.log(lastind )

//1) push
arr.push("Ramesh")
console.log(arr)

//2)unshift
// var Sft = arr.unshift("Vishal")
// console.log(Sft) //give the information about the total element amount

arr.unshift("Vishal")
console.log(arr)

//3)pop
var rom = arr.pop(99)
console.log(arr)


//4) shift
arr.shift()
console.log(arr)


//5) splice is for remove 
arr.splice(3,1)
console.log(arr)


//6) splice is used for insert 
arr.splice(2,0,{School:"G H Raisoni University"});
console.log(arr)


//7) slice is used for selected part display
var splicMethod = arr.slice(1,5)
console.log(splicMethod)


var ne = arr.indexOf(99999)
console.log(ne)