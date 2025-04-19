//Ex1: 

const isEqualTo100 =  (a, b) => a === 100 || b === 100 || (a+b === 100);


console.log(isEqualTo100(100, 0));

console.log(isEqualTo100(100, 0));

console.log(isEqualTo100(10, 0))

console.log(isEqualTo100(0, 10))


console.log(isEqualTo100(80, 20))

console.log(isEqualTo100(30, 70))


//Ex 2: Get the Extension of file name?

const getFileExe = (str) => str.slice(str.lastIndexOf('.'));

console.log(getFileExe('webpack.index.js'))