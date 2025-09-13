// console.log("hello i am deepak :");


// fucntion in js
// 1. Function = Object hai JS me

// JS me function bhi ek object hai. Matlab function ke paas properties hoti hain aur usse variable me assign kar sakte ho.

// function hello(){ 
//   console.log("Hello World");
// }
// hello.test = "Function bhi object hai";
// console.log(hello.test);
// hello(); 
// console.log(typeof hello);
// console.log(typeof hello.test);

// callback function in js
// function first(name, callback) {
//     console.log(`Enter your name `,name);
//     callback(12.12);
// }

// function second(userName="deepak") {
//     console.log(` ${userName}`+" " +"kese ho aap");

// }
// first("deepak",second)

// callback problem solving in js 
// Q1. Ek function banao jo 2 numbers lega aur unka sum calculate karega, aur callback me result print hoga.
// function outer(num1, num2, callback) {
//     let res = num1 + num2;
//     callback(res)
// }
// function inner(res) {
//     console.log(res);

// }
// outer(4, 5, inner)

// Q2. Ek function banao jo ek string ko uppercase kare aur callback me uppercase string print kare.
// function first(str,cb){
//     let upper = str.toUpperCase();
//     cb(upper)
// }
// function second(upper){
//     console.log(upper);
// }
// first("deepak",second)

// Q3. Ek function banao jo ek array ka length calculate kare aur callback me return kare. 
// function first(arr,cb){
//     let lengt = arr.length;
//     console.log(cb(lengt));   
// }
// function second(lengt){
//     return lengt;
// }
// first([1,2,3,4,5,6,7],second);

// Q4. Ek function banao jo check kare ki number even hai ya odd, aur callback me print ho. 
// function check(num,cb){
//     console.log("checking the number is even or odd:");
    
//     return cb(num);
// }
// function even(num,cb){
//     if(num%2==0){
//         return "number is even:"
//     }
//      return cb();
// }
// function odd(num){
//     if(num%2==1){
//         return "number is odd:"
//     }
// }
// console.log(check(12,even));

// 