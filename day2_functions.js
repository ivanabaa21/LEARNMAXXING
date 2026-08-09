//Build a tiny calculator function library.

function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide(a,b){
    return a/b;
}

function greet(name) {
    return "Hello " + name;
}

console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(multiply(5, 4));
console.log(divide(20, 5));
console.log(greet("Ivan"));


//or lets say we wanna make it an arrow function based on today

const add1 = (a,b) => a+b;
const subtract1 = (a,b) => a-b;
const multiply1 = (a,b) => a*b;
const divide1 = (a,b) => a/b;

//now i know this work since we dont need the {}  since its only one expression

console.log(add1(5, 3));
console.log(subtract1(10, 4));
console.log(multiply1(5, 4));
console.log(divide1(20, 5));



/* ----- MINI TASK NUMBER 2 -----
Task 1 — calculateAverage()
Create a function that accepts three grades and returns their average.

Task 2 — isPassing()
Create a function that accepts a grade and returns:

Task 3 — Combine them
Now use your two functions together.

Create:

getGradeStatus(average)

It should return:

90+     → "Excellent"
80–89   → "Very Good"
75–79   → "Passing"
Below75 → "Failed"

This one will require conditional logic, so it'll give us a preview of the next concepts we'll be learning.
*/


const add3 = (grade1, grade2, grade3) => grade1 + grade2 + grade3;

const calculateAverage = (grade1, grade2, grade3) => {
    return add3(grade1, grade2, grade3) / 3; 
}

console.log(calculateAverage(90,90,89));

const averagegrade = calculateAverage(90,90,89); 
const isPassing =  (averagegrade) => {
    if (averagegrade >= 75)
        return "passed";
    else 
        return "fail";
}


const getGradeStatus= (averagegrade) => {
    if (averagegrade >= 90) {
        return "Excellent";
    } else if (averagegrade >= 80) {
        return "Very Good";
    } else if (averagegrade >= 75) {
        return "Passing";
    } else {
        return "Failed";
    }
}

const status = getGradeStatus(averagegrade);
const remark = isPassing(averagegrade); 
console.log(remark);
console.log(status);


/*

# DAY 2 NOTES — JAVASCRIPT FUNCTIONS

1. WHAT IS A FUNCTION?

---

A function is a reusable block of code that performs a specific task.

Example:

```
function greet() {
    console.log("Hello!");
}
```

Defining the function does not execute it.

To execute/call it:

```
greet();
```

## 2. PARAMETERS VS ARGUMENTS

PARAMETER:
A placeholder variable defined inside the function.

```
function greet(name) {
    console.log("Hello " + name);
}

name = parameter
```

ARGUMENT:
The actual value passed when calling the function.

```
greet("Ivan");

"Ivan" = argument
```

Easy mental model:

```
Parameter = placeholder
Argument  = actual value
```

## 3. MULTIPLE PARAMETERS

Functions can accept multiple inputs.

```
function add(a, b) {
    return a + b;
}

add(5, 10);
```

Here:

```
a = 5
b = 10
```

The function returns:

```
15
```

## 4. RETURN

The return keyword sends a value back to the code that called
the function.

Example:

```
function add(a, b) {
    return a + b;
}

const result = add(5, 10);

result = 15
```

Important:

```
return sends a value BACK TO THE CALLER.
```

It does not simply "print" the value.

5. console.log() VS return

---

console.log():

```
console.log("Hello");
```

Displays something in the console.

It is mainly useful for developers to inspect values and
debug their programs.

return:

```
return value;
```

Sends the value back to the code that called the function.

Example:

```
function add(a, b) {
    return a + b;
}

const result = add(5, 10);

console.log(result);
```

The function returns 15, then console.log displays 15.

6. RETURN ENDS THE FUNCTION

---

When return executes, the function immediately stops.

Example:

```
function test(number) {
    if (number >= 75)
        return "passed";
    else
        return "fail";
}
```

If number is 90:

```
90 >= 75
    ↓
  true
    ↓
return "passed"
    ↓
FUNCTION ENDS
```

The else does NOT execute afterward.

7. FUNCTION DECLARATION

---

Traditional function syntax:

```
function add(a, b) {
    return a + b;
}
```

Call it with:

```
add(5, 10);
```

## 8. FUNCTION EXPRESSION

A function can be stored inside a variable.

Example:

```
const add = function(a, b) {
    return a + b;
};
```

The variable "add" now contains a function.

Call it with:

```
add(5, 10);
```

Important:

Functions are values in JavaScript.

They can be stored in variables, passed around, and used by
other functions.

9. ARROW FUNCTIONS

---

Function expressions can be written using arrow function syntax.

Function expression:

```
const add = function(a, b) {
    return a + b;
};
```

Arrow function:

```
const add = (a, b) => {
    return a + b;
};
```

If the function only contains one expression that is returned,
the braces and return can be omitted.

```
const add = (a, b) => a + b;
```

This is called an implicit return.

10. FUNCTION CALL VS FUNCTION ITSELF

---

This is VERY important.

Without parentheses:

```
const x = calculateAverage;
```

This stores the function itself.

With parentheses:

```
const x = calculateAverage(90, 90, 89);
```

This CALLS the function and stores its returned result.

Mental model:

```
functionName
    ↓
the function itself


functionName(...)
    ↓
execute the function
```

## 11. FUNCTIONS CAN CALL OTHER FUNCTIONS

A function can call another function.

Example:

```
const add3 = (a, b, c) => a + b + c;

const calculateAverage = (a, b, c) => {
    return add3(a, b, c) / 3;
};
```

The flow becomes:

```
calculateAverage()
        ↓
      add3()
        ↓
    returns sum
        ↓
    divide by 3
        ↓
    return average
```

## 12. RETURN VALUES CAN BE STORED

Example:

```
const average = calculateAverage(90, 90, 89);
```

The returned value is stored inside:

```
average
```

That value can then be passed into another function:

```
isPassing(average);
```

This creates a chain:

```
function A
   ↓
return value
   ↓
variable
   ↓
function B
   ↓
return value
```

## 13. CONDITIONALS INSIDE FUNCTIONS

Functions can contain conditional logic.

Example:

```
const isPassing = (grade) => {
    if (grade >= 75)
        return "passed";
    else
        return "fail";
};
```

Another example:

```
const getGradeStatus = (grade) => {
    if (grade >= 90)
        return "Excellent";

    if (grade >= 80)
        return "Very Good";

    if (grade >= 75)
        return "Passing";

    else
        return "Failed";
};
```

Because each successful condition uses return, the function
stops immediately after finding the matching condition.

14. DEBUGGING FUNCTIONS

---

When a function gives an unexpected result, check:

```
1. Did I call the function?
2. Did I provide the required arguments?
3. Are the arguments the correct values?
4. Does the function return the value I expect?
5. Am I storing the function itself or its returned value?
```

Example mistake:

```
const remark = isPassing();
```

If isPassing expects an argument, the parameter may become
undefined.

Correct:

```
const remark = isPassing(average);
```

## 15. HOW TO RUN JAVASCRIPT DIRECTLY

JavaScript files can be executed directly using Node.js.

Check if Node.js is installed:

```
node --version
```

Run a JavaScript file:

```
node day2_functions.js
```

console.log() output will appear directly in the VS Code terminal.

===============================================================================
DAY 2 CORE TAKEAWAY
===================

A FUNCTION is reusable behavior.

PARAMETER = placeholder inside the function.

ARGUMENT = actual value given to the function.

CALLING a function executes it.

RETURN sends a value back to the caller.

console.log() displays a value in the console.

Functions can be stored inside variables.

Functions can call other functions.

Returned values can be stored in variables and passed into
other functions.

IMPORTANT DISTINCTION:

```
functionName
    ↓
function itself


functionName(...)
    ↓
execute function
```

ARROW FUNCTIONS:

```
const add = (a, b) => a + b;
```

The expression is implicitly returned when braces are omitted.

GENERAL FLOW:

```
INPUT
  ↓
FUNCTION
  ↓
PROCESS
  ↓
RETURN
  ↓
RESULT
```

===============================================================================
*/
