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

// function curry(base){
//     return function (num){
//         return base+num
//     }
// }
// var result=curry(10)
// console.log(result(10));



// 17...........
// function uploadFile(files){
//     var message=  document.getElementById('message')
//     console.log(files[0]);
//     let fr=new FileReader()
//     fr.onload=function(e){
//         document.getElementsByTagName('img')[0].src=e.target.result
//     }
//     fr.readAsDataURL(files[0])

//     // for(let i=0; i<files.length; i++){
//     //     console.log(files[i]);
//     //     fr.onload=f
//     //     // document.getElementById('message').innerHTML=files[i].name
//     // }
// }


// 18.............

// call,apply,bind......................................
// call......
// const person={
//     fullName:function(city){
//         return this.firstName +' from ' +city
//     }
// }
// const person1={
//     firstName:'shailesh'
// }

// console.log(person.fullName.call(person1,'Pune'));

// // apply........
// const animal={
//     fullName:function(city,country){
//         return this.firstName +' from ' +city +' '+country
//     }
// }
// const animal1={
//     firstName:'sonya'
// }

// console.log(animal.fullName.apply(animal1,['Pune','india']));
// // bind.......
// const dog={
//     fullName:function(city,country){
//         return this.firstName +' from ' +city +' '+country
//     }
// }
// const dog1={
//     firstName:'labra'
// }

// var newdog=dog.fullName.bind(dog1,'Pune','india');

// console.log(newdog());


// // call......

// function greet(words){
//     console.log(words +' '+this.name);
// }

// var user1={name:'shailesh'}

// greet.call(user1,'hello')
// // apply..............
// function greet1(word1,word2){
//     console.log(word1 +' '+word2 +' '+this.name);
// }

// var user1={name:'shailesh'}
// greet1.apply(user1,['hello','good morning'])

// // bind.....

// var result=greet1.bind(user1,'goodMorning','hello')
// result()


// 19...............................
// closures.............

// function newFun(){
//     const name='shailesh';
//     return function innerFunction(){
//         console.log(name);
//     }
// }
// var result=newFun()
// result()

// 20............
// Higher order function ...............

// const names=['shailesh','ajay','vijay']

// var result=names.map((n)=>n.toUpperCase())
// console.log(result);

// 21...............
// let xhr= new XMLHttpRequest()

// xhr.onreadystatechange=function(){
//     if(xhr.readyState==XMLHttpRequest.DONE){
//         if(xhr.status==200){
//             console.log(xhr.responseText);
//         }else{
//             console.log('request failed '+ xhr.status);
//         }
//     }
// };
// xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1',true)
// xhr.send()

// fetch.............

// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then((res)=>{
//     if(!res.ok){
//         throw new Error('Network response')
//     }else{
//         return res.json()
//     }
// }).then((data)=>console.log(data)).catch((err)=>console.log(err))



// 22...............

// function* printNumber(){
//     for(let i=0; i<10;i++){
//       yield  i;
//     }
// }

// var gen=printNumber()
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// gen.next()


// 23..............

// factorial..........

// function factorial(n){
//     if(n==0){
//         return 1
//     }
//     return n* factorial(n-1)
// }
// console.log(factorial(4));

// 24..........
// forEach.......
// const array=['a','b','c']
// array.forEach((e)=>{
//     console.log(e);
// })

// 25.............

// prototypal inheritance....

// function Person(name,age){
//     this.name=name
//     this.age=age
// }

// Person.prototype.greet=function(){
//     console.log(this.name+ this.age);
// }

// var p1=new Person('shailesh',25)
// p1.greet()

// var p2=new Person('ds',24)
// p2.age='23'
// p2.greet()

// var p3={name:'sdas',age:'34'}
// Person.call(p3,'sdfas',34)
// Object.setPrototypeOf(p3,Person.prototype)
// p3.greet()

var name='shailesh'

console.log(name.at(2));