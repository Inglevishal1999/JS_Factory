//check the given number is prime or not


// function checkPrime(num){

//     var isPrime = true;
//     if(num < 1){
//         console.log("Enter Positive number greater than 1")
//         return;
//     }else if(num == 1){
//         console.log("1 is not a prime number")
//         return;
//     }else if(num > 1){
//         for(var i = 2;i< num;i++) {
//             if(num % i == 0){
//                 isPrime = false;
//             }
//         }
//     }
//     if(isPrime ){
//         console.log("given number is prime")
//     }
//     else{
//         console.log("given number is not prime")
//     }
// }

// checkPrime(-7)



//check if a number is Even or Odd
// function checkEvenOrOdd(num){
//     if(num % 2 == 0){
//         console.log("Given number is even ")
//     }else{
//         console.log("Given number is Odd")
//     }
// }

// checkEvenOrOdd(10)



//Check the number is perfect Square

// function isPerfectSquare(num){
//     if(num < 1){
//         console.log("Please Enter the Positive number")
//         return ;
//     }

//     var sqrt = Math.sqrt(num);
//     if(sqrt === Math.floor(sqrt)){
//         console.log("Given number is Perfect Square")
//     }else{
//         console.log("Given number is not perfect Square")
//     }
// }

// isPerfectSquare(16)


//Check the given number is Palindrome or not - eg. 121, 343

// function checkPalindrome(num){
//     var str = num.toString()
//     var revesed = str.split('').reverse().join('');
//     if(str === revesed){
//         console.log("Given number is Palindrome")
//     }else{
//         console.log("Given number is not palindrome")
//     }
// }

// checkPalindrome(121)


//find the sum of digits in number

// function sumOfDigit(num){
//     var sum = 0;
//     while(num>0){
//      sum += num%10;
//      num = Math.floor(num/10)
//     }
//     console.log("Sum of Digit: ",sum);
// }

// sumOfDigit(1234);



//Armstrong number

function checkArmStongNumber(num){
    var sum = 0;
    var temp = num;
    var sumDigit = num.toString().length;

    while (temp > 0) {
        var digit = temp % 10;
        sum += Math.pow(digit, sumDigit); // 3^3=27,  5^3=125, 125+27=152, 1^3=1 => 152 + 1 = 153
        temp = Math.floor(temp/10)  //153/10 = 15, 15/10 = 1, 1/10=0
    }


    if(sum === num){
        console.log("Given number is ArmStrong number")
    }else{
        console.log("Given number is not armstrong number")
    }
}

checkArmStongNumber(153)