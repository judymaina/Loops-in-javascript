function numbers(){
    for(let num = 0; num<=100; num++){
       if(num %3===0 && num %5===0){
        console.log("FizzBuzz")
       }
       else if(num%3===0){
        console.log("Fizz");
       }
       else if(num%5===0){
        console.log("Buzz");
       }
    } 
}
// numbers()

function sum(){
    var summation = 0;
    for(let mult=0;mult<1000;mult++){
        if(mult %3===0 && mult %5===0){
           summation+=mult
         
        }
    }
    console.log(summation);
}
// sum()

function currentnum(){
    for(current=0;current<=20; current++){
        if(current %2===0){
            console.log(current +" "+"is even");
        }
        else {
            console.log(current +" "+"is odd");
        }
    }
}
// currentnum()

let num = [-2, 4,-5, 6,0];
let largest = num[0];
for (let i = 0; i < num.length; i++) {
    if (largest < num[i]) {
        largest = num[i]
    }
}
console.log(largest);

function large(){
    let x=10;
    let y=40;
if(x<y){
    console.log(y);
}
else{
    console.log(x);
}

}
// large()

function findleap(){
for(let year=2000; year<=2022; year++){
if(year %400===0 && year%100===0){
    console.log( year +" " +"is a leap year");
}
 else if(year %4===0){
    console.log( year +" " +"is a leap year");
}
}
}
findleap()