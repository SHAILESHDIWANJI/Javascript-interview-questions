// function isPrime(n){
//     var divisor=2

//     while(n>divisor){
//         if(n%divisor==0){
//             return false
//         }else{
//             divisor++
//         }
//         return true
//     }
// }
// var result=isPrime(10)
// console.log(result);


// fibonacci

// function fibonacci(n){
//     var fib=[0,1]

//     if(n<=2)return 1
//     for(var i=2;i<=n; i++){
//         fib[i]=fib[i-1]+fib[i-2]
//     }
//     return fib[n]
// }
// console.log(fibonacci(12));
// fibonacci(22)

// try 2
// function fibonacci(n){
// if(n<=1)
//     return n
// else
// return fibonacci(n-1)+fibonacci(n-2)
// }
// fibonacci(10)


//4. greatest common divisor

// function greatestCommonDivisor(a,b){
//     if(b==0){
//         return a
//     }else{
//         return greatestCommonDivisor(b,a%b)
//     }
// }
// var result=greatestCommonDivisor(110,0)

// console.log(result);

// 5 removeDuplicates

// function removeDuplicates(arr){  
//     var newArr=[]
//     for(let i=0; i<arr.length;i++){
//         if(!newArr.includes(arr[i])){
//             newArr.push(arr[i])
//         }
//     }
//     console.log(newArr);

// }
// removeDuplicates([1,2,3,4,5,6,7,8,4,2,1,4,9])


// console.log(result);

// var result=arr.filter((item,index)=>arr.indexOf(item)==index)
// console.log(result);

// const arr = [1, 2, 2, 3, 4, 4, 5];
// const uniqueArr = arr.reduce((acc, curr) => {
//   if (!acc.includes(curr)) acc.push(curr);
//   return acc;
// }, []);
// console.log(uniqueArr); // [1, 2, 3, 4, 5]

// var secarrr=[1,2,3,4,5,6,7,8,9,4,5,6]

// var uniqueArr=secarrr.reduce((acc,curr)=>{
// if(!acc.includes(curr)){
//     acc.push(curr)
// }
// return acc
// },[])
// console.log(uniqueArr);

// var uniqueArr=Array.from(new Set(secarrr))
// console.log(uniqueArr);

// 7. swap Number

// function swapNumb(a,b){
//     b=b-a //4-3=1
//     console.log(b);
//     a=a+b //3+1=4
//     console.log(a);
//     b=a-b // 4-1=3
//     console.log(b);
//     // console.log(a,b);
// }

// swapNumb(3,-4)

// 8 stringReverse

// var str='shailesh'
// var strreverse=str.split('').reverse().join('')
// console.log(strreverse);
// // console./log(str[1]);
// function reverse(str){
//     var arr=[]
//     for(let i=0;i <str.length; i++){
//         arr.unshift(str[i])
//     }
//     console.log(arr.join(''));
// }
// reverse(str)

// var str='shailesh diwanji'

// function reverse(str){
//     var result =str.split(' ')
//     console.log(result);
//     var arr=[]
//     for(let i=0 ;i<str.length;i++){
//         arr.push(result[i].reverse().join(''))
//     }
//     var result=arr.join('')
//     console.log(result);
// }
// reverse(str)

// var result =str.split(' ').reverse().join(' ').split('').reverse().join("")
// console.log(result);

//13. check palindrome

// var str='madamsdsa'

// function palindrome(str){
//     var reverse=str.split('').reverse().join('')
//     if(str==reverse){
//         console.log('palindrom');
//     }else{
//         console.log('not palindrom');
//     }
// }

// palindrome(str)

//random from 5 to 7

// function random5(){
//     return 1+Math.random()*4
// }

// function random7(){
//     return 5+random5()/5*2
// }

// console.log(random7());



// 15 missing number
// var arr=[1,3,4,5]

// function missingNumbmer(arr){
//     var n=arr.length+1

//     var total=0
//     var expectedSum=n *(n+1)/2

//     for(var i=0, len=arr.length; i<len; i++){
//          total +=arr[1]
//     }
//     console.log(expectedSum-total);
 
 
// }
// missingNumbmer(arr)

// function countZero(n){
//     var count=0

//     while(n>0){

//     }
// }
// var result=new Boolean(false)
// console.log(result);

// var a = 1; 
// function b() { 
//     a = 10; 
//     return; 
//     function a() {} 
// } 
// b(); 
// console.log(a); 

function curry(base){
    return function (num){
        return base+num
    }
}
var result=curry(10)
console.log(result(10));


