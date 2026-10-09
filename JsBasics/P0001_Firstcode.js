/*
Variable
---------------
- variable is name of storage location where we can store data

In Js we use 3 keyword to declare variable
---------------------------------------------
var(older/not recommented), let(Mutable data), const(Immutable data)

Syntax
===========
let variableName=value;

Example:
--------
let id=101;
let fname="Jay";

DataTypes
=============
- Datatypes defined what type of data we can store into variable
- As Js is dynamically typed language so we dont need any data type while
declaration of any variable

Types of Datatypes
--------------------
1.Primitive data types
2.NonPrimitive data types


1.Primitive data types(7)
---------------------------
1.number
2.string
3.boolean
4.undefined
5.null

Added in ES6
6.bigInt(NA in automation)
7.symbol(NA in automation)

2.Nonprimitive
---------------------
In Js all objects are dynamic objects and 
object,array


typeof operator
=====================
- To check what type of data we store into variable we have typeof operator
Example
--------------
typeof function
typeof variable
typeof object
*/

console.log("-------Number Type variables");

let num = 7;
console.log(num);
console.log(typeof num);

num="abcd";
console.log(num);

num = -90;
console.log("My age is " +num);
console.log("My age is" ,num);

num = 0.475698779076788989;
console.log("My age is " ,num);
console.log(typeof num);
console.log(Number.MAX_VALUE);

num = 475698779076788989n;
console.log("My age is " ,num);
console.log(typeof num);
console.log(Number.MAX_VALUE);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.MAX);



console.log("-------Boolean Type variables");

let isPaid = true;
console.log("isPaid is " +isPaid);
console.log(typeof isPaid);

let Status = false;
console.log("Subscription status is ",Status );




console.log("-----string type------");
/*
-String is collection of characters
-String is primitive types
-String is Dynamic object.

Note: In Js we dont have any char type
Everything like single char or collection of characters are string only

Ways to declare string
-------------------------
1.single quoat 'Hello'
2.double quoat "Hello"
3.template string(added after ES6) : back tick `Hello`

*/

let firstName = 'Ogechi';
console.log(`This is ${firstName} first script`);
console.log(typeof firstName);


let lastName = "Pastor";

let Bio = `${lastName} is my last name`;
console.log(Bio);


let email = "test@guhk.com";
console.log('Your email ID is' +email);
console.log(typeof email);

let character = `P`;
console.log(typeof character);

//Template String ${variable name}

let profile = `My name is ${firstName}, I am a software tester with 3 years experience in SDET.
I just started automation with Javascript.`;

console.log(profile);


let currentYear = 2026;
let user = `{
        "name": "${firstName}",
        "data": {
            "year": ${currentYear},
            "price": 50$,
            "CPU model: "Intel Core i9",
            "Hard Disk Size": "1 TB"
        }

}`


console.log(user);

/*
Undefined data types
-----------------------
If any variable declare without initialization then value and type of that
variable is undefined
*/


let age;
console.log("My age is "+age);
console.log(typeof age);


console.log("--------null type---------");
/*
null means unknown value/ intentionally we can write some data as null

What is typeof null?
------------------
- type of null will be always object
- legacy bug in Js language

*/
let rapture = null;
console.log("The date of rapture is " +rapture);
console.log(typeof rapture);

console.log("---------Symbol type-------");
/*

/*
- It is used to create unique keys in Js Object

In Js Object is collection of keys and values.
Ways
----------
1.Object literal
2.Class level Object

3.Constructor function
4.Prototype based object(Object.create())
*/
//Non-primitive DATA TYPES

console.log("---------OBJECT------------");

let scores = {};
console.log(scores);
console.log(typeof scores);


console.log("------------ARRAY------------");

let storeID = [20,21, 22, 23, 24];
console.log(storeID);
console.log(typeof storeID);

//OBJECT WITH KEY AND VALUE

let uler ={
    fname: "Faith",
    data: {
        year:2007,
        price: "80$",
        id: 77,
        drive: "1 TB"
    }

};

/*
To Access properties form Object
-----------------------------------
1. dot notation
objectName.key

2. bracket notation
objectName["key"]//string key

*/

console.log(uler.fname);
console.log(uler.data.price);


//add new property

uler.data.state ="Lagos";
console.log(uler);

//modify any property
uler.data.price = "40 naira";
console.log(uler);


console.log(uler["fname"]);
console.log(uler[`fname`]);
console.log(uler[`data`][`id`]);
uler[`data`][`id`]=100;
console.log(uler);


delete uler["data"]["state"];
console.log(uler);


//Symbol data type

let customerAttributes1 = {
    hname: "Lala",
    goal : "Duncey"

};

let customerAttributes2 = {
    hname: "Lola",
    goal : "Dicey"

};

console.log(customerAttributes1);
console.log(customerAttributes2);

// //App 1 wants to assign a company Id to me

// customerAttributes.companyID = 224;

// console.log(customerAttributes);


// //App 2 wants to assign a company Id to me

// customerAttributes.companyID = 442;
// console.log(customerAttributes);

//Allocate symbols for each company ID
let companyId = Symbol("id"); //Key1

//To use it in the object

customerAttributes1[companyId] = 224;
customerAttributes2[companyId] = 442;

console.log(customerAttributes1);
console.log(customerAttributes2);


var hat = 29;
var hat = 40;

console.log(hat);


let fat = 30;
console.log(fat);

const jat = 100;

console.log(jat);


  openDoor();
function openDoor(){
    let gat = 40;
    console.log(gat);
    console.log(fat);
}

// openDaar();
// function openDaar(){
//     console.log(gat);
   
// }



let file = function(){
    console.log("My name is: "+firstName+"\nMy country is: "+lastName);
    
}
file();

function lockDoor() {
    console.log("Age is: " +age);
    
}

lockDoor();

const vision = ()=>{
    console.log("Testing with Playwright");
    
}

vision();









