// console.log("Amro");


// #########################################################

// Functions
// 1 - Regular Function
// function test( x , y ) {
//     return x * y ;
// }
// console.log(test(2,9));  // Calling a function

// 2 - Expression Function :
// const test1 = function (a ,b) {
//     console.log(a - b);
// }
// test1(2,9) // Calling a function


// 3 - Named Function
// const test2 = (s , f) => { return  s+ f  }
// console.log(test2(2,9)); // Calling a function

// 4 - Arrow Functions
// const test3 = (a , b ) => a / b;
// console.log(test3(50,10)); // Calling a function


// #########################################################
// Elements Events

// <button onClick={() => {console.log("Hello World");}} >

// </button>

// #########################################################

// Ternary Operator  " IF "

// 1 -Defualt
// if (true) {
    
// } else {

// }

// 2 - Ternary
// #EX1
// let player = prompt("Enter Your T-SHIRT Number : ");

// let result = ( player == "10" ) ? 'This T-SHIRT for Amro' : 'I Dont Know';
// console.log(` ######  ${result} Aqaba Club `);

// #EX2
// let age  = 25;
// let name  = "Ahmad";

// if (age > 25) {
//     name  = "Ahmad"
// } else {
//     name  = "Anas"
// }

// #EX3
// let age  = 9;
// let name = age > 10  ? "Ahmad" : "Anas";

// const Components = () => {
//     return age > 10 ? `<div> Ahmad </div>`  : `<div> Anas </div>`;
// }
// console.log(Components());


// #########################################################

// OBJECT

const person = {
    name : "Amro",
    age : 26,
    isCoach : true,
}

// const name = person.name;
// console.log(name);
// const age = person.age;
// console.log(age);
// const isCoach = person.isCoach;
// console.log(isCoach == false ? "YES" : "NO");


// Desructing Object
// let { name , age , isCoach: coachStatus=false } = person;

// Separatore Object
// const person2 =  {...person , isCoach : false };
// console.log(person2);

// const person3 =  {...person2 , name : "Hussien" };
// console.log(person3);

// #########################################################

// Array 
// const Player = [ "Osama" , "Batool" , "Amjad" ];
// console.log(Player);

// Separatore Array
// const Coaches =["Rahaf" , ...Player]
// console.log(Coaches);

// #########################################################

// MAP , FILTER , REDUCE 

let colors = [ 'Red' , 'Green' , 'Yellow' , 'White' , 'Black' , "Brown" ];

// console.log(colors);

// colors.map((e) => {
//     console.log("++" + e + "++");
// })

// const coloredObjects = colors.map((e) => {
//     return  {colors : e};
// })
// console.log(coloredObjects);


let names = [ 'Ahmad' , 'Ghaida' , 'Mahmoud' , 'Rand' , 'Yazan' , "Thar'a" ];

names.filter((name) => {
    console.log(name);
})
const filteredNames = names.filter((name)=> {
    return name !== "Mahmoud";
})
console.log(filteredNames);

// #########################################################
