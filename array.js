// // let b=new Array("mangoe","apple");
// // b.push("orange");
// // b.unshift("tomatoes")
// // b.pop()
// // b.shift()
// // let d=b.map(c=>`i love ${c}`);
// // console.log(d);

// // var people={
// //     name:"judy",country:"Kenya"}
// //     console.log(people.country);
// //     console.log(people['country']);

// // var person=new Object(people);
// // // console.log(person.name);

// // for (keys of Object.entries(person)){
// //     console.log(`${key}: ${values}`);
// // }
// // Object.seal(person)
// // person.name("mark")

// var student={  name:"judy",country:"Kenya",
// hobby:function(){
//     console.log(`my name is ${this.name} and my hobby is cooking`);
//     return"my favourite hobby is baking";
// },
// friends:{
//     school:"joy",
//     age:23
// },
// play:function(){
//     return"i love jokes"
// }}
// console.log(student.hobby());
// console.log(student.play);

// class Student{
//     constructor(name,age,school){
//         this.name=name
//         this.age=age
//         this.school=school
//         this.hobby=function(){
//             return"I love being me";
//         }
//     }
// }

// Student.prototype.country=function(){
//     return"I love my country Kenya"
// }
// // var firstStudent=new Student("judy",19,"Akirachix");
// // console.log(firstStudent.hobby());
//    function Students(name,age,school){
//         this.name=name
//         this.age=age
//         this.school=school
//         this.hobby=function(){
//         return"I love being me";
//         }
//    }
//  var nmes= ["chiri", "zipporsab","shamim",]

//  //  program that shows the delay in execution

function greet() {
    console.log('Hello world');
}

function sayName(name) {
    console.log('Hello' + ' ' + name);
}

// calling the function
setTimeout(greet);
// sayName('John');