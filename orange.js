
// JS REFRESH  : Function , Array , Object , Ternary , Spreed , Destructing Array , Distructing Object , Map

//  Handle Error , DOM


// #########################################################

// #1 
// function Laith( x , y ) {
//     return x + y;
// }
// console.log(Laith(10 , 2));

// #2
//  const Yazan = function ( a , b ) {
//     return a * b 
// }
// console.log(Yazan(5 , 5));

// #3 Arrow 
// const Maryana = () => { return }

// #########################################################

// #1 
// if ( x > 10 ) {
    
// } else {
    
// }


// console.log('Hello World');

// x = 20;
// y = 10;

// x > 15 ? x =  x * 2 : x = x + 2;  // Condition , True , False 
// console.log(x);

// #########################################################

// Array 
// let colors = [ 'Red' , 20 , 'Yellow' , 'White'];
// console.log(colors[3]);


// // // Distructing Array
// const [ A  , B , C , D  ] = colors;
// console.log(B);


// #########################################################
// Object


// const person1 = {
//     name : "Anas",
//     age : 30,
//     isHabied : false,
//     isShiekh : true,
// }
// const person2 = {
//     name : "Ahmad",
//     age : 18,
//     isHabied : true,
//     isShiekh : false,
// }

// console.log(person1);

// const person2 = {...person1 , name : "Hanan" , age : 6}
// console.log(person2);









// const person2 = {...person1 , name : "Idress"}
// console.log(person2);


// const person3 = {...person2 , name : "Abd"};
// console.log(person3);

// #########################################################
// Map 




let colors = [ 1 , 2 , 3 , 4];

// #1 Array Name
// #2 map() , .filter() , .reduce()
// #3 . (e)  Array Element / Indes
// #4 => Arrow Function 
// #5 {} Return 

colors.map( (item) => {
    console.log(item * 5); 
})


// // #1
// colors.map( (e) => {
//     console.log(`Color  : ${e}`);
// })

// // #2 Return Values with MAP in Object
// const Mahmoud = colors.map( (e) => {
//     return `Name :${ e} `;
// })
// console.log(Mahmoud);



// #########################################################
//  Different Between JS and RaectJS in Style 

// camelCase
// marginleft --- CSS + JS
// marginLeft --- CSS + React


// const StyleHeader = {
//     borderRaduis : "50%",
//     paddingTop : "10px",
//     marginRight : "20rem",
// }


// <button  style{StyleHeader }> </button>

// #########################################################












// const a = person.name;
// console.log(a);

// const b = person.age;
// console.log(b);

// const c = person.isShiekh;
// console.log(c);

// #1
// const a = person["name"];
// console.log(a);

// #2
// const a = person[name];   Undefind
// console.log(a);












// #########################################################


// function test9(d , x ) {
//     return d * x
// }
// console.log(test9(3,4));


// const Amro = function (a , b ) {
//     return a + b;
// }
// console.log(Amro(3,3));


// const Abd = ( x, y ) => {
//     return x / y  ;
// }
// console.log(Abd(10 , 2));



// A = 10;
// B = 8;
// const Abd1 = ( x , y ) => { return A < B ? A = x + A : y + B  }
// console.log(Abd1(10 , 10));





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

// Ternary Operator  " IF "

// 1 -Defualt
// if (true) {
    
// } else {

// }


// let player = prompt('Enter Your Name : ');
// let result = (player == "Amro") ? 'This is Admin' : 'This is User';
// console.log(result);


// let x = 22;
// let y = "Amro";

// if (x > 20 ) {
//     y = "Admin"
// } else {
//     y = "User"
// }
// console.log(y);



// const Amro = () => {
//     return <h1>Hello</h1>;    
// }


// let a = 26;
// let b = a > 20 ? "hhhhh" : "ggggggg";

// const Components = () => {
//     return a < 20 ? ` <div> hhhhh </div>` : ` <div> ggggggg </div>` ;
// }
// console.log(Components());
// console.log(a);
// console.log(b);
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

// const person = {
//     name : "Amro",
//     age : 26,
//     isCoach : true,
// }

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

// destructing Array 


// Destructuring the array
// const [one, two, three] = Player;


// console.log(one); // Osama
// console.log(two); // Batool
// console.log(three); // Amjad



// const Player2 = [Player[2] = "Amro" , ...Player];
// console.log(Player2);

// const Player3 = [Player[0] = "Amro" , ...Player.slice(1)]
// console.log(Player3);


// #########################################################

// MAP , FILTER , REDUCE 

// let colors = [ 'Red' , 'Green' , 'Yellow' , 'White' , 'Black' , "Brown" ];

// console.log(colors);

// colors.map((e) => {
//     console.log("++" + e + "++");
// })




// const coloredObjects = colors.map((e) => {
//     return  {colors : e};
// })
// console.log(coloredObjects);


// #########################################################
