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

// function check(n,cb){
//     console.log("checking");
//     return cb(n)
// }
// function even(n,cb){
//     if(n%2==0){
//         return "number is even:"
//     }

//     return cb;
// }
// function odd(n){
//      if(n%2==1){
//         return "number is odd:"
//     }
// }
// console.log(check(3,odd));


// function check(n, cb){ 
//     return cb(n); 
// }
// function even(n, cb){ 
//     if(n%2===0) return "even"; 
//     return cb(n); }
// function odd(n){ 
//     console.log("odd", n);
//  }

// check(3, even);

// let arr = new Array();
// arr[0] = 1;
// arr[1]= 0;
// console.log(arr);
// console.log(typeof arr);
// arry = arr.pop(1)
// console.log(arr);
// console.log(arry);


// for of loop in js
// let array = [1,2,3,4,5,6];
// // for(let key of array){
// //     console.log(key);  
// // }
// // for(let value in array){
// //     console.log(value);  
// // }
// // let a=array.forEach((key)=>{
// //     console.log(key);
// //     return "hello"
// // })
// // console.log(a);

// // let b = array.map((key)=>{
// //     console.log(key);
// //     return "hello"
// // })
// // console.log(b);

// // what is diffrence btw method and function in js
// let obj =new Object();
// obj.name="deepak";
// obj.add=function (a,b){
//     return function(){
//        return a+b;
//     };
// };
// obj.sub=(a,b)=>a-b;
// let ret= obj.add(3,4);
// console.log(ret());
// console.log(obj);
// console.log(obj.sub(6,2));


// multidimentional array in js
// let multiarray  =  [["deepak",22],["kapil",32]]
// console.log(multiarray[1][0]);

// create a function curying
// function one(){
//    console.log("one");
//     return ()=>{
//         console.log("two");
//         return  ()=>{
//             console.log("three");
//         }
//     }
// }
// one()()();


// function one(cb){
//     console.log("heoo kldffhishf skfdasdhfh");
//      return cb();
// }
// one(function y(){
//     console.log("hello i am deepak:");
// })


// two btn problem
// let arr = [1,2,3,4,5,6];
// let newarray = arr.map((a)=>a>3);
// console.log(newarray);

// let obj={
//     a:"abc",
//     b:"avc",
//     abc:{
//         add:"some",
//         use:"use",
//     },
// }
// let {a,abc:{add:p}}=obj;
// console.log(p,a);

// write a function to convert into lower case
// function tolowercase(str){
//   let a= str.split(" ")
//   let max=Infinity;
//   let min="";
//   for(let i=0;i<a.length;i++){
//     if(a[i].length<min){
//         min=a[i];
//         max=a[i];
//     }
//   }
//   return max;
// }
// console.log(tolowercase("I AM DEEPAK"));


// how to find dublicate element in array
// let arr = [1, 2, 3, 4, 5, 6, 2, 3, 4, 5, 6, 4, 5, 4, 5]

// function duplicateCount(arr){
//     let freq = {};
//     for(let num of arr){
//         freq[num] = (freq[num] || 0) + 1;
//     }
//     return freq;
// }

// console.log(duplicateCount(arr));


// function reverse a string
// function reverse(str){
//     let str1=str.split(" ").reverse().join(" ");
//     return str1;
// }
// console.log(reverse("hello  i am deepak"));

// find factorial using function 
// function  factorial(num){
//     if(num==1)return 1;
//     return num*factorial(num-1);
// }
// console.log(factorial(5));

// function palindrom or not 
// function check(str){
//  let str1= str.split("").reverse().join("");
//  let res=(str==str1)?"string is plaindrom":"string is not plaindrom";
// //  if (str==str1) {
// //     return "string is plaindrom";
// //  }else{
// //     return "not palindrom:";
// //  }
// return res;

// }
// console.log(check("nitioon"));

// function to find max in array
// function maxElement(arr){
//     let max=0;
//     for(let el of arr){
//       if(max<el){
//             max=el;
//         }
//     }
//     return max;  
// }

// console.log(maxElement([1,2,3,46,5,4]));

// complete promise
// let promise = new Promise((resolve, reject) => {
//     // resolve("promise resolved");
//     reject("error");
// });

// // promise.then((ms) => {
// //     console.log(ms); // output: promise resolved
// // });
// promise.catch((error)=>{
//     console.error("this is an error");
    
// })

