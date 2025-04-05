
function add (x, y){
    console.log(x + y)
}
function print(){
    console.log("nsnjnskjnkjnkjnkjnj")
}

function fn (f){
 console.log(f)
 f();
 f();
 f();
}

// Anonymoun function in the above function calling
fn(function () {
    var age = 26;
    console.log(age)
});

console.log("-------------------------------------------------")
//normal funtion
fn(print)

console.log("--------------------------------------------------")
//parameterised function
fn(add)