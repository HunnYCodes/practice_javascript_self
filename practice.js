//challenge 1:


document.getElementById("p1").innerHTML="Hello World!"
document.getElementById("intro").style.fontSize="35px"
document.getElementById("p1").style.color="red"
document.body.style.background = "skyblue"



//challenge 2:


document.getElementById("heading").innerHTML = "JavaScript"
document.getElementById("heading").style.fontSize = "30px"
document.getElementById("p2").innerHTML = "javascript is powerful, flecible, and fast programming language."
document.getElementById("p2").style.color = "red"
document.getElementById("p3").innerHTML = "javascript power the dunamic behavior on websites."
document.getElementById("p3").style.color = "blue"
document.getElementById("p4").innerHTML = "javascript remains at the core of web development."
document.getElementById("p4").style.color = "green"


//challengw 1: JavaScript Syntax


var data = 200; //g;lobal variable declaraction

function a() {
var data = 100; //local variable
document.write("Inside function : "+data);
}

document.write("Outside Function : "+data);
document.write("<br>");
a();
document.write("<br>");


//challenge 2:


console.log('list of Fruits\nApple \nOrange \nMango');

console.log(`list of Fruits 
Apple 
Orange 
Mango`);

document.write("<br>");




//challenge 3:

var p = 1000;
var n = 1;
var r = 7;
var SI = `Simple Intrest is ${(
    p * n * r)/100}`;

document.write("Simple Interest is" + SI);

document.write("<br>");


//challenge 4:


console.log(`Menu Items 
Sandwich
French Fries
Potato wedges
Donuts
Pizza`)

document.write("<br>");





//challenge 1: JavaScript Variables



var a = 'Hello'; //declaration
{
var a = 'Hello Js'; //Redeclaration
}
document.write(a);

document.write("<br>");



//challenge 2:

const fruits = ["Apple", "Banana", "Orange"];
document.getElementById("demo").innerHTML = fruits;
fruits[0] = "Apricot";
document.getElementById("demo1").innerHTML = fruits;
fruits.push("Mango");
document.getElementById("demo2").innerHTML = fruits;



//challenge 1: Nested  Loop

for(let i = 1; i < 4; i++){
    document.write(i);
    document.write("<br>");
    for(let j = 1; j <= 4; j++){
        document.write(j," ");
    }
    document.write("<br>");
}


//challenge 2:

for(let i = 1; i <= 10; i++){
    for(let j = 1; j <= 10; j++){
        document.write(i +" * "+ j + " = " +(i*j), "<br>");
    }
    document.write("<br>")
}

//challenge 3:

for(let i = 1; i <= 5; i++){
    for(let j = 1; j <= i; j++){
        document.write(j);
    }
    document.write("<br>");
}




//challenge 1: Function Binding and Closure

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const mamber = {
//     firstName:"Hege",
//     lastName:"Nilsen",
// }



// let fullName = person.fullName.bind(mamber);
// document.getElementById("demo3").innerHTML = fullName();




let person = {
    firstName: "John",
    lastName: "Doe",
}

let mamber = {
    firstName:"Hege",
    lastName:"Nilsen",
}

 function fullName() {
       return this.firstName + " " + this.lastName; 
 }

let fullName_person = fullName.bind(person);
let fullName_mamber = fullName.bind(mamber);
document.getElementById("demo3").innerHTML = fullName_person();
document.getElementById("demo4").innerHTML = fullName_mamber();




//challenge 1:

function clickevent(){
    document.write("this is javascript event");
}

//challenge 2:
function mouseoverevent(){
    alert("This is an alert");
}



function focusevent(){
    document.getElementById("input1").style.background = "green";
}



function keydownevent(){
    alert("Pressed a key");
}



//challenge 1:


const addresses = ["Londan", "Michigan", "Delhi", "Mumbai"];
for(let addr of addresses){
    alert(addr)
}

var personnel = newArray()
personnel [0] = newArray()
personnel [0][0] = "Rahul"
personnel [0][1] = '18'
personnel [0][2] = "London"
personnel [1] = new Array()
personnel [1][0] = "Sneha"
personnel [1][1] = "17"
personnel [1][2] = "Michigan"
personnel [2] = new Array()
personnel [2][0] = "Raj"
personnel [2][1] = "19"
personnel [2][2] = "Delhi"
document.write ("Name:" + Personnel[1][0]+ "<br>")
document.write ("Age:" +personnel[1][1]+ "<br>")
document.write ("Address:" + personnel[1][2] + "<br>")
