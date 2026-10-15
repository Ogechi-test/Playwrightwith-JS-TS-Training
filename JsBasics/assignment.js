
console.log("---------------------QUESTION 1---------------------");
// 1. Identify the datatype
// Create variables for the following values and identify their datatype:
// - 25
// - "JavaScript"
// - true
// - undefined
// - null
// - 123.45
// - 12345678901234567890n
// - Symbol("id")
// Task: Print both the value and its datatype.

let age = 25;
console.log(age);
console.log(typeof age);

let course = "JavaScript";
console.log(course);
console.log(typeof course);

let bag;
console.log(bag);
console.log(typeof bag);

let stat = null;
console.log(stat);
console.log(typeof stat);

let tell = 123.45;
console.log(tell);
console.log(typeof tell);

let jug = 12345678901234567890n;
console.log(jug);
console.log(typeof jug);

let user = {
    nem: "pope",
    rile: "worker"
}

let luser = {
    not: "poe",
    rile: "worer"
}

console.log(user);
console.log(luser);

let companyId = Symbol("id");

user[companyId] = 67;
luser[companyId] =  54;

console.log(user);
console.log(typeof user);

console.log(luser);
console.log(typeof luser);

console.log("---------------------QUESTION 2---------------------");

// 2. Create Variables of Different Datatypes
// Create one variable for each of the following datatypes:
// - String
// - Number
// - Boolean
// - Undefined
// - Null
// - BigInt
// - Symbol
// - Object
// Print all variables

let house = "lads";
console.log(house);

let jol = 123;
console.log(jol);

let jag = true;
console.log(jag);

let jil;
console.log(jil);

let kal = null;
console.log(kal);

let ret = 0.476821332445567979898;
console.log(ret);

let wet = Symbol("id");
console.log(wet);

let qet = {
    task: "tuy",
    isGain: "you"
}
console.log(qet);

console.log("---------------------QUESTION 3---------------------");

// 3. Predict the Output
// Without running the code, predict the output:
// console.log(typeof 100); ->number
// console.log(typeof "100");->string
// console.log(typeof true);->boolean
// console.log(typeof undefined);-->undefined
// console.log(typeof null);-->object
// console.log(typeof 100n);-->bigInt

// Then execute the program and compare your answers.
console.log(typeof 100); //number
console.log(typeof "100"); //string
console.log(typeof true); //boolean
console.log(typeof undefined); //undefined
console.log(typeof null); //object
console.log(typeof 100n); //bigInt

console.log("---------------------QUESTION 4---------------------");

// 4. Student Information
// Create variables to store:
// - Student name
// - Student age
// - Student percentage
// - Whether the student has completed the course
// - Student's grade
// Use appropriate JavaScript datatypes.

let studentName = "Oge"; //string
console.log(typeof studentName);

let studentAge = 34; //number
console.log(typeof studentAge);

let studentPercentage = 80; //number
console.log(typeof studentPercentage);


let hasCompletedCourse = true; //boolean
console.log(typeof hasCompletedCourse);

let studentGrade = "A"; //string
console.log(typeof studentGrade);


console.log("---------------------QUESTION 5---------------------");

// 5.Create two variables:
// let userName;
// let userEmail = null;
// Print both values and their datatypes.
// Then answer:
// 1. What is the difference between undefined and null?
// 2. What does typeof userName return?
// 3. What does typeof userEmail return?
// 4. Why is typeof null considered unusual in JavaScript?

let userName;
console.log("Value of userName: "+userName);
console.log(typeof userName);


let userEmail = null;
console.log("Valu of userEmail: "+userEmail);
console.log(typeof userEmail);

console.log("1. undefined means a variable has been declared but has not been assigned a value.");
console.log("2. null represents the intentional absence of a value.");
console.log("3. typeof userName returns: ",typeof userName);
console.log("4. typeof userEmail returns: ",typeof userEmail);
console.log("5. typeof null is 'object', because of a historic JavaScript bug that cannot be corrected. Correccting this now may break the JavaScript code");

console.log("------------Assignments On Operators----------------");

// Guess the output?
// ---------------------
console.log(1 + "2" + 3);  //"123"
console.log(1 + 2 + "3"); //"33"
console.log("5" * true); //"5"
console.log(10 > 5 > 1); //true
let a = 2;
    let b = a++ + ++a;    
    console.log(a, b); //3, 6

let c = 3;
console.log(c++ + c++ + ++c); //3, 4 + 4, 5+6  =15

console.log(5 * 2 == "10"); //true


let x = 1;
let y = ++x + x++ + x;  //2 =2,3 +3
console.log(x, y); //3, 5

console.log(10 > 5 && 20 < 30);  //true

console.log(null || undefined || "Playwright"); //true

