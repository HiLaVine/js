"use strict";
/*var height; 
console.log(height); // -> undefined
console.log(weight); // -> Uncaught ReferenceError: weight is not defined*/

/*let height=174;
let anotherheight=height;

console.log(height);
console.log(anotherheight+1);

let weight;
weight = 90;

console.log(weight);*/

/*
let hola = "hello";
console.log(hola);*/

/*let  steps  =  100;
console.log(steps);  //  ->  100
steps  =  120;  //  ->  120
console.log(steps);
steps  =  steps  +  200;
console.log(steps);  //  ->  320*/

/*let greeting = "hello";
let counter = 100;

console.log(greeting + counter);*/
/*
const greeting = "hello";
greeting = "hi";*/

let height = 180;
{
    let weight = 70;
    console.log(height); // -> 180
    console.log(weight); // -> 70
}
console.log(height); // -> 180
console.log(weight); // -> Uncaught ReferenceError: weight is not defined

