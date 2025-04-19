
function add (a, b){
    var result = a + b;
    return result;
}

function subs (a, b){
    var result = Math.abs(a - b);
    return result;
}

function multi (a, b){
    var result = Math.abs(a * b);
    return result;
}

//Master Component
function Main (num1, num2, operator){
    return operator(num1, num2)
}


//Main :-> is higher order function
//add :-> is a Callback function
console.log(Main (5, 6 , add)) ;

console.log(Main (5, 6 , multi)) ;