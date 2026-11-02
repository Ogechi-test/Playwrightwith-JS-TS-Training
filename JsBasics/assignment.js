
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


// Assignments On Operators
// =============================
// Guess the output?
// ---------------------
// 1.console.log(1 + "2" + 3);
// 2.console.log(1 + 2 + "3");
// 3.console.log("5" * true);
// 4.console.log(10 > 5 > 1);
// 5.let a = 2;
//     let b = a++ + ++a;
//     console.log(a, b);

// 6.let a = 3;
// console.log(a++ + a++ + ++a);

// 7.console.log(5 * 2 == "10");

// 8.
// let x = 1;
// let y = ++x + x++ + x;
// console.log(x, y);

// 9.console.log(10 > 5 && 20 < 30);

// 10.console.log(null || undefined || "Playwright");

console.log("------------Assignments On Operators----------------");

// Guess the output?
// ---------------------
console.log(1 + "2" + 3);  //"123"
console.log(1 + 2 + "3"); //"33"
console.log("5" * true); //"5"
console.log(10 > 5 > 1); //false
let a = 2;
    let b = a++ + ++a;    
    console.log(a, b); //4, 6

let c = 3;
console.log(c++ + c++ + ++c); //3 + 4 + 6 = 13

console.log(5 * 2 == "10"); //true


let x = 1;
let y = ++x + x++ + x;  // (2,2), (3, 4), (3,7)
console.log(x, y); //3, 7

console.log(10 > 5 && 20 < 30);  //true

console.log(null || undefined || "Playwright"); //Playwright

// -----------------------------------------------------------------
// JavaScript Practice: Type Coercion & Explicit Conversion
// ===========================================================
console.log("------JavaScript Practice: Type Coercion & Explicit Conversion-------");
// Problem 1 — UI Price and Quantity
// A product page returns the following values as strings:
// let price = "500";
// let quantity = "3";
// Calculate the total price.

// Expected Output:
// 1500
console.log("-------------Problem 1-------------------");
{
    let price = "500";
    let quantity = "3";
    
    let result = (price * quantity)
    console.log("The Total Price is: "+result);//1500
    console.log(typeof result);
}


// Problem 2 — UI Price + Tax
// The UI returns:
// let price = "1000";
// let tax = "200";
// Calculate the final price.

// Expected Output:
// 1200
console.log("-------------Problem 2-------------------");
{
    let price = "1000";
    let tax = "200";
    let finalPrice = (Number(price) + Number(tax)); //1200
    
    console.log("The Final Price is :"+ finalPrice);
}


// Problem 3 — Understand + Coercion
// Consider:
// let actual = "100";
// let expected = 20;
// What will be the output of:
// console.log(actual + expected);
console.log("-------------Problem 3-------------------");
{
    let actual = "100";
    let expected = 20;
    let output = (actual + expected);
    console.log(output); //10020
    console.log(typeof output); //coerced to be a string
}

// Problem 4 — Understand - Coercion
// Consider:
// let actual = "100";
// let expected = 20;
// What will be the output of:
// console.log(actual - expected);
console.log("-------------Problem 4-------------------");
{
    let actual = "100";
    let expected = 20
    console.log(actual - expected); //80
    
}


// Problem 5 — UI Value and Assertion
// A UI displays:
// 100
// The automation code receives it as:
// let actualPrice = "100";
// let expectedPrice = 100;
// Check the result of:
// console.log(actualPrice == expectedPrice);
// console.log(actualPrice === expectedPrice);
console.log("-------------Problem 5-------------------");
{
    let actualPrice = "100";
    let expectedPrice = 100;
    console.log(actualPrice == expectedPrice); //true
    console.log(actualPrice === expectedPrice); //false
    
    
}

// Problem 6 — Fix the Assertion
// The following automation code is failing:
// let actualPrice = "500";
// let expectedPrice = 500;
// console.log(actualPrice === expectedPrice);

// Modify the code so that the assertion gives:
// true
console.log("-------------Problem 6-------------------");
{
    let actualPrice = "500"
    let  expectedPrice = 500;
    console.log(Number(actualPrice) === expectedPrice); //true
    
}
// Problem 7 — Environment Variable
// An automation framework reads the timeout from an environment variable:
// let timeout = "30000";
// Convert it into a number and print:
// The value
// Its data type

// Expected Output:
// 30000
// number
console.log("-------------Problem 7-------------------");

{
    let timeout = "30000";
    timeout = Number(timeout)
  console.log(timeout); //30000
  console.log(typeof timeout); //number
  
}
// Problem 8 — Order ID
// An API returns:
// let orderId = 12345;
// Convert the order ID into a string and create:
// ORDER-12345

console.log("-------------Problem 8-------------------");

{
    let orderId = 12345
    let orderIdString = String(orderId);

  console.log("ORDER-"+orderIdString); //ORDER-12345
  console.log(typeof orderIdString); //string
  
}
// Problem 9 — Boolean API Value
// An API returns:
// let status = "true";
// Convert this value into an actual Boolean.

// Expected Output:
// true
// boolean
console.log("-------------Problem 9-------------------");
{
    let status = "true";
    status = Boolean(status);
    console.log(status);
    console.log(typeof status);

}

// Problem 10 — Input Field Value
// A Playwright test retrieves a quantity from an input field:
// let quantity = "5";
// The expected quantity is:
// let expectedQuantity = 5;
console.log("-------------Problem 10-------------------");
{
    let quantity = "5";
    let expectedQuantity = Number(quantity)
    console.log(expectedQuantity);
    console.log(typeof expectedQuantity);
    
}

// Problem 11 — Calculate Cart Total
// An e-commerce application provides:
// let price = "799";
// let quantity = "2";
// let discount = "100";
// Calculate:
// (price × quantity) - discount

// Expected Output:
// 1498
console.log("-------------Problem 11-------------------");
{
    let price = "799";
    let quantity = "2";
    let discount = "100";

    let result = (price * quantity) - discount
    console.log(result);
    
}

// console.log("-------------Problem 10-------------------");

// Conditional Satements Program
// =================================
// Assignment1: 
// Problem: 
// Write a JavaScript program to check whether a number is even or odd. 

let num = 3
if(num % 2 === 0){
    console.log("Number is even");
    
}else{
    console.log("Number is odd");
    
}

// Assignment2: 
// Problem: 
// Print the day of the week based on number (1–7). 
// What you will use here? If-else or switch case? 


let day = 1;

switch (day) {
    case 1:
        console.log("Monday");
        
    case 2:
        console.log("Tuesday");
        
    case 3:
        console.log("Wednesday");
        
    case 4:
        console.log("Thursday");
        
    case 5:
        console.log("Friday");
        
    case 6:
        console.log("Saturday");
        
    case 7:
        console.log("Sunday");
        break;    
    default:
        console.log("Invalid day number");
}

// Loop Assignments
// ========================
// 1.Prime Number
// Problem Statement:
// Write a JavaScript program to check whether a given number is prime or not using a loop.
console.log("-----------------Prime Number--------------------");

let number = 10;

for(let i=1;i <= number;i++){
    let count = 0;

    for(let j=1; j<=i; j++){
        if(i%j === 0){
            count++;
        }
    }
    if(count === 2){
        console.log(i + "is a prime number");
        
    }else{
        console.log(i +"is not a prime number");
        
    }

};

// 2.Print Even Numbers
// Problem Statement:
// Write a JavaScript program to print all even numbers between 1 and 50 using a loop.

{
    let num = 50;
    for(let i=1; i<=num; i++){
        if(i%2 === 0){
            console.log(i +"is an even number between 1 and 50");
            
        }
        // else{
        //     console.log(i +"is not an even number between 1 and 50");
            
        // }

    }       
    
}
// 3.Multiplication Table
// Problem Statement:
// Write a JavaScript program that accepts a number and prints its multiplication table from 1 to 10.

{
   let number = 5;
    for(let i=1; i<=10; i++){
       
        console.log(number +"x"+i+"=" +(number*i));
    }
    
}

// 4.Factorial Number
// Problem Statement:
// Write a JavaScript program to calculate the factorial of a given positive integer using a loop.

{
    let num = 6;
    let factorial=1;
    for(let i=1;i<=num; i++){
        factorial = factorial*i;
        
    }
    console.log("factorial of " +num +" is " +factorial);
    
}

// 5.Count Digits
// Problem Statement:
// Write a JavaScript program to count the total number of digits present in a given number using a loop.

{
    let num = 12345, count = 0, tempNum = num;
    while(num>0){
        num = Math.floor(num/10);
        count++;

    }
    console.log(`The total number of digits present in ${tempNum} is ${count}`);
    
}

// reverse 789

{
    let num = 789, rem = 0, rev = 0, temp = num;
    while(num>0){
        rem = num % 10;
        num = Math.floor(num/10);
        rev = rev*10+rem;
        
    }

    console.log(`The reverse of ${temp} is: ${rev}`);

    if(rev===num){
        console.log(temp +" is a Palindrome number");
        
    }else{
        console.log(temp +" is not a Palindrome number");
        
    }
}

// 6.Stop the Loop at a Specific Number
// Problem Statement:
// Write a JavaScript program to print numbers from 1 to 20. Use the break statement to terminate the loop when the number reaches 10.
{
    let num = 20;
    for(let i=1; i<=num; i++){
        if(i===10){
            break;
        }else{
            console.log(i);
            
        }
    }
}

// 7.Skip Even Numbers
// Problem Statement:
// Write a JavaScript program to print numbers from 1 to 20, but skip all even numbers using the continue statement.

{
    let num = 20;
    for(let i=1; i<=num; i++){
        if(i%2===0){
            continue;
        }else{
            console.log(i);
            
        }
    }

}

// 8.Print a 5 × 5 Star Pattern
// Problem Statement:
// Write a JavaScript program using nested loops to print a square containing 5 rows and 5 columns of stars.
// *****
// *****
// *****
// *****
// *****

for(let r=1; r<=5; r++){
    let result = " ";
    for(let c=1; c<=5; c++){
        

        result  = result + "*"
    }

    console.log(result);
    
}


// 9.Decreasing Star Pattern
// Problem Statement:
// Write a JavaScript program using nested loops to print the following pattern:

// *****
// ****
// ***
// **
// *

for(let r=1; r<=5; r++){
    let result = "";
    for(let c=r; c<=5; c++){
        result = result + " *";

    }
    console.log(result);
    
}



