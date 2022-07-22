// // // function numbers(){
// // //     for(let num = 0; num<=100; num++){
// // //        if(num %3===0 && num %5===0){
// // //         console.log("FizzBuzz")
// // //        }
// // //        else if(num%3===0){
// // //         console.log("Fizz");
// // //        }
// // //        else if(num%5===0){
// // //         console.log("Buzz");
// // //        }
// // //     } 
// // // }
// // // // numbers()

// // // function sum(){
// // //     var summation = 0;
// // //     for(let mult=0;mult<1000;mult++){
// // //         if(mult %3===0 && mult %5===0){
// // //            summation+=mult
         
// // //         }
// // //     }
// // //     console.log(summation);
// // // }
// // // // sum()

// // // function currentnum(){
// // //     for(current=0;current<=20; current++){
// // //         if(current %2===0){
// // //             console.log(current +" "+"is even");
// // //         }
// // //         else {
// // //             console.log(current +" "+"is odd");
// // //         }
// // //     }
// // // }
// // // // currentnum()

// // // let num = [-2, 4,-5, 6,0];
// // // let largest = num[0];
// // // for (let i = 0; i < num.length; i++) {
// // //     if (largest < num[i]) {
// // //         largest = num[i]
// // //     }
// // // }
// // // console.log(largest);

// // // // function large(){
// // // //     let x=10;
// // // //     let y=40;
// // // // if(x<y){
// // // //     console.log(y);
// // // // }
// // // // else{
// // // //     console.log(x);
// // // // }

// // // // }
// // // // // large()

// // // // function findleap(){
// // // // for(let year=2000; year<=2022; year++){
// // // // if(year %400===0 && year%100===0){
// // // //     console.log( year +" " +"is a leap year");
// // // // }
// // // //  else if(year %4===0){
// // // //     console.log( year +" " +"is a leap year");
// // // // }
// // // // }
// // // // }
// // // // findleap()


// // // const num=[1,2,3,4,40]
// // // cpnsole.log(math.max(num))

// // // let a= function(){
// // //     console.log("hello")
// // // }
// // // a()

// // let nums=[1,,4,6,2,5];
// // let b=nums.map(a=>a*2)
// // let c=nums.map(function(a){
// // returna*2
// // })
// // console.log(b)
// // console.log(c);

// var Person={name:"Judy Doe",age:21,loggedin:true};
// console.log(Person.name);
// console.log(Person.age);
// console.log(Person.loggedin);

// let a=[2,4,7]
// let[one,four,seven,...others]=[2,4,7,45,12,67];
// console.log({one});
// console.log({four});
// console.log({seven});
// console.log({others});


// let promise=new Promise((resolve,reject)=>{
//   if (true){
//     resolve("promise fulfilled");
//   }
//   else{
//     reject("promise not fullfilled");
//   }
// })
// .then(()=>console.log("successful"))
// .catch(()=>console.log(error))
// .finally(()=>console.log("promise fully fulfilled"));

// console.log(promise);
let mother="beautiful"
console.log(mother);


    let promise=new Promise((resolve,reject)=>{
setTimeout(()=>resolve("promised fullfilled"),5000)
})
async function student(){
    let person=await promise;
    console.log(person);
    console.log("Await is only used in async functions");
}
student();
  

