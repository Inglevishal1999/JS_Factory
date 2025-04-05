function myfn(x, y){
    var result = x + y;
    return function () {
        console.log("I am Anonymous function")
    }
}

var output = myfn(100,20);
console.log(output)
output()