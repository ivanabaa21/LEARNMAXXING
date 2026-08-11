/*
===============================================================================
LEARNMAXXING — DAY 4.1 FUNDAMENTALS CHECKPOINT
Days 1–3 Review
===============================================================================

SCORE: 17.5 / 19
RESULT: 🟢 READY FOR DAY 4.2

NOTE:
I honestly did not run it or use AI before answering. ON GOD.
This is a checkpoint quiz and should serve as another benchmark
on what I've learned. I have made a clean unedited version of it
before making AI check and mark me for my answers. I only let him fix
the variable namings for those redundant ones after I finished answering.
I got the same score and have not cheated in any way.
*/


//=============================================================================
// 🧩 SECTION 1 — VARIABLES & VALUES
//=============================================================================


// Q1
let aQ1 = 10;
let bQ1 = aQ1;

bQ1 = 20;

console.log(aQ1);
console.log(bQ1);

/*
Q1 Predict the output:

10 then 20.

Its a let and not a const.
It creates an independent reference to another value.

GRADE: ⚠️ MOSTLY CORRECT

OUTPUT:
✅ Correct: 10 then 20.

CORRECTION:
The independence is NOT because the variables use let.

The reason is that 10 is a PRIMITIVE value.

Primitive values are copied independently.

let vs const only determines whether reassignment is allowed.

Mental model:

primitive/reference
    → What happens when a value is copied?

let/const
    → Is reassignment allowed?
*/


//-----------------------------------------------------------------------------
// Q2

const user1Q2 = {
    name: "Ivan"
};

const user2Q2 = user1Q2;

user2Q2.name = "John";

console.log(user1Q2.name);
console.log(user2Q2.name);

/*
Q2 What gets printed? Why is it different from Q1?

They both print John.

You only mutated the name user2 is referencing to which is
the one being referenced by user1 too.

GRADE: ✅ CORRECT

Both variables reference the SAME object.

user1Q2 ──┐
          ↓
     { name: "John" }
          ↑
          │
user2Q2 ──┘

Changing user2Q2.name mutates the shared object.
*/


//-----------------------------------------------------------------------------
// Q3 — Mutation

const personQ3A = {
    name: "Ivan"
};

personQ3A.name = "John";

/*
Q3 Is this allowed?

YES

GRADE: ✅ CORRECT

This is MUTATION.

The personQ3A variable still references the same object.
Only a property inside the object changed.
*/


// Q3 — Reassignment

const personQ3B = {
    name: "Ivan"
};

/*
The original quiz contained:

personQ3B = {
    name: "John"
};

That line is intentionally NOT executed here because it would stop
the entire checkpoint file with an error.

What about this? Explain the difference:

No.

The 2nd one is reassignment of the objects name which is not
possible when its on const.

The first one is mutating the persons name by calling them
with the "."

GRADE: ⚠️ CONCEPT CORRECT, WORDING CORRECTION

The important correction:

personQ3B = {...}

does NOT "reassign the object's name."

It reassigns the VARIABLE personQ3B so that it would point
to a completely different object.

const prevents that reassignment.

personQ3B.name = "John"
    → mutation

personQ3B = { name: "John" }
    → reassignment
*/


//-----------------------------------------------------------------------------
// Q4

/*
Q4:
Give me one example where you would use let and one where
you would use const.

Id use const on something that I wouldnt keep changing like
age, height, etc.

And let on something like score that gets changed here and there.

GRADE: 🟡 MOSTLY CORRECT

Score is an excellent let example:

    let score = 0;
    score = 10;

Age/height technically change in real life, but your programming
idea is correct.

A clearer const example would be:

    const passingGrade = 75;

or:

    const username = "Ivan";

The real rule is:

Use const when the VARIABLE will not be reassigned during
the program.

Use let when reassignment is necessary.
*/


//=============================================================================
// ⚙️ SECTION 2 — FUNCTIONS
//=============================================================================


// Q5

function greetQ5(name) {
    return "Hello " + name;
}

greetQ5("Ivan");

/*
Q5 Which one is the parameter and argument?

parameter is the name and "Ivan" is the argument.

Parameter is the placeholder, argument is the value.

GRADE: ✅ CORRECT

name
    → parameter

"Ivan"
    → argument
*/


//-----------------------------------------------------------------------------
// Q6

function addLogQ6(a, b) {
    console.log(a + b);
}

function addReturnQ6(a, b) {
    return a + b;
}

/*
Q6 What is the difference between them?
Why would you choose return instead of console.log()?

The difference between the two function is that the other one
only shows the result in the developers console while the return
returns the value to the caller.

I'd choose the console.log only for debugging while return in the
normal usage to return a value to its caller and end the function.

GRADE: ✅ CORRECT

console.log()
    → displays information

return
    → sends a value back to the caller
    → immediately ends the function

Very important distinction retained from Day 2.
*/


//-----------------------------------------------------------------------------
// Q7

function multiplyQ7(a, b) {
    return a * b;
}

const resultQ7 = multiplyQ7(5, 4);

console.log(resultQ7);

/*
Q7 What is the output?

20

GRADE: ✅ CORRECT
*/


//-----------------------------------------------------------------------------
// Q8

const addQ8 = (a, b) => a + b;

/*
Q8 What does this mean?

This means its a function inside a variable that only has one
expression that made the braces omitted.

What is actually stored inside add?
a function

And how do you execute it?
call the variable like add(a,b); same as executing a function.

GRADE: ✅ CORRECT

More precisely:

addQ8 stores a FUNCTION VALUE.

Because there is only one returned expression:

    (a, b) => a + b

JavaScript performs an implicit return.

Execute it with:

    addQ8(5, 10);
*/


//-----------------------------------------------------------------------------
// Q9

const addQ9 = (a, b) => a + b;

const doubleQ9 = (number) => number * 2;

const resultQ9 = doubleQ9(addQ9(5, 10));

console.log(resultQ9);

/*
Q9 What does this output?
Walk through it step-by-step.

first is we declared the add variable with a function inside
with 1 expression that takes a and b then add them

declared another variable with a function which is named double
which takes number as parameter then multiplies the number by 2
as it executes.

then we declared another variable which is the result that will
be equal to the value of the double function after taking the
value of the add function that has 5,10 and ten which makes
the result = 30

GRADE: ✅ CORRECT

Best mental execution order:

    addQ9(5, 10)
        ↓
       15

then:

    doubleQ9(15)
        ↓
       30

Nested functions are usually easiest to read INSIDE → OUTSIDE.
*/


//-----------------------------------------------------------------------------
// Q10

function testQ10() {
    let messageQ10 = "Hello";
}

/*
The original quiz contained:

console.log(messageQ10);

That is intentionally commented out here so the whole checkpoint
file can continue running.

Q10 What happens here? Will it work? Why?

No.

The variable is declared inside the function and thats the scope
it only be available too.

The scope outside is different therefore cant take it.

GRADE: ✅ CORRECT

messageQ10 exists only inside testQ10().

This is FUNCTION SCOPE.
*/


//=============================================================================
// 📦 SECTION 3 — ARRAYS
//=============================================================================


// Q11

const fruitsQ11 = ["apple", "banana", "orange", "mango"];

/*
Q11 What are:

fruitsQ11[0] : apple
fruitsQ11[2] : orange
fruitsQ11[3] : mango

And what is:

fruitsQ11.length? : 4

GRADE: ✅ CORRECT
*/


//-----------------------------------------------------------------------------
// Q12

const numbersQ12 = [10, 20, 30, 40, 50];

// console.log(numbersQ12[numbersQ12.length - 1]);

/*
Q12 Without manually counting the indexes, write code that
gets the last element.

console.log(numbersQ12[numbersQ12.length - 1]);

GRADE: ✅ CORRECT

Important pattern:

array[array.length - 1]

length
    → number of items

length - 1
    → index of final item
*/


//-----------------------------------------------------------------------------
// Q13

const numbersQ13 = [1, 2, 3];

numbersQ13.push(4);
numbersQ13.pop();
numbersQ13.unshift(0);
numbersQ13.shift();

console.log(numbersQ13);

/*
Q13 What does this output? Walk through the change.

numbers2 array gets declared:

    [1, 2, 3]

push added 4 at the end:

    [1, 2, 3, 4]

pop removed the 4 at the end:

    [1, 2, 3]

unshift adds number 0 at the beginning:

    [0, 1, 2, 3]

shift removes the 0 at the beginning:

    [1, 2, 3]

GRADE: ✅ EXPLANATION CORRECT

NOTE FROM REVIEWER:

The original combined quiz accidentally applied these methods to
a different "numbers" variable because several questions reused
the same variable names.

That naming collision was partly caused by how the quiz snippets
were originally provided.

This version only fixes the variable naming so the code matches
your explanation.
*/


//=============================================================================
// 🔄 SECTION 4 — LOOPS
//=============================================================================


// Q14

const numbersQ14 = [10, 20, 30];

for (let iQ14 = 0; iQ14 < numbersQ14.length; iQ14++) {
    console.log(numbersQ14[iQ14]);
}

/*
Q14 What does this print?
Why does numbersQ14[iQ14] change each iteration?

this prints every value of the array with the help of for loop.

Because after it executes the first time theres an action like
the i++ that gets rechecked with the condition to make the loop
execute again.

and since its an i++ which is the same thing inside the index
of the array on the loop then it gets change and keep movng
forward until the condition wasnt met.

GRADE: ✅ CORRECT

Mental model:

i = 0
    → numbers[0]
    → 10

i = 1
    → numbers[1]
    → 20

i = 2
    → numbers[2]
    → 30
*/


//-----------------------------------------------------------------------------
// Q15

const numbersQ15 = [10, 20, 30];

for (let iQ15 = 0; iQ15 <= numbersQ15.length; iQ15++) {
    console.log(numbersQ15[iQ15]);
}

/*
Q15 What's wrong with this?

The condition.

What should the condition be?

    i < numbers4.length

And why?

because by making it <= you are actually adding another value
which makes you go past the actual length of your array.

Note that the counting of array starts at 0 and which makes
the right condition < only and not equal to the length.

GRADE: ✅ CORRECT

For 3 elements:

length = 3

valid indexes:

0
1
2

Using <= allows:

i = 3

which accesses:

numbersQ15[3]

and gives:

undefined

Correct condition:

    i < numbersQ15.length
*/


//=============================================================================
// 🧠 SECTION 5 — ALGORITHMIC THINKING
//=============================================================================


// Q16

const numbersQ16 = [15, 4, 82, 31, 9];

/*
Q16 Without writing the full code yet, explain the algorithm
you'd use to find the largest number:

Id use a loop that will iterate to each number.

Ill declare a variable equal to the first index and as i iterates
if the current value of the one indexed as it loop is greater than
the amount inside my variable then my variable will take the value
of that arrayindex.

GRADE: ✅ CORRECT

General pattern:

max = first element

loop:
    compare current value to max

    if current > max
        max = current
*/


//-----------------------------------------------------------------------------
// Q17

const numbersQ17 = [15, 4, 82, 31, 9];

/*
Q17 — Find the minimum:

Same thing, but find the smallest:

Same thing, ill reiterate to each value but declare a variable
with value as the first index, make the variable carry the index
value when its less than the current array index.

let it cycle through and it should do the work.

What's the one major difference between the maximum and
minimum algorithms?

Just the conditions.

Its almost the same thing, you just gotta set the right
conditions to carry the right value.

GRADE: ✅ CORRECT

Maximum:

    current > max

Minimum:

    current < min

Same algorithmic structure.
Different comparison.
*/


//=============================================================================
// 💀 SECTION 6 — CODE READING BOSS
//=============================================================================


// Q18 + Q19

const studentsQ18 = ["Ivan", "John", "Mark"];

function greetStudentQ18(name) {
    return "Hello " + name;
}

for (let iQ18 = 0; iQ18 < studentsQ18.length; iQ18++) {
    console.log(greetStudentQ18(studentsQ18[iQ18]));
}

/*
Q18
What does it print?

It prints the greeting to every name in the array.

Hello Ivan
Hello John
Hello Mark

GRADE: ✅ CORRECT


Q19
Explain what happens during the first iteration.

What is i?

i is the iterating variable that we declared.

What is students[i]?

it is the one that keeps changing as i changes value.
so if i = 0 then its students[0] which takes the first
value of the array and then cycles through where "i"
will take them.

What gets passed into greetStudent()?

greetStudent has the name parameter but at the function.
The students[i] or the students array with its i as its index.

What does the function return?

the function return the expression of "Hello " string +
the name parameter to the greetStudent(name) function

What does console.log() print?

Prints all the greetings for all of the students/value
of the array

Hello Ivan
Hello John
Hello Mark


GRADE: 🟡 CONCEPT CORRECT, NEEDED MORE PRECISE TRACING

The question specifically asked about the FIRST iteration.

Exact first-iteration state:

    iQ18 = 0

therefore:

    studentsQ18[iQ18]

becomes:

    studentsQ18[0]

which is:

    "Ivan"

Therefore:

    greetStudentQ18("Ivan")

Inside the function:

    name = "Ivan"

The function returns:

    "Hello Ivan"

Then console.log() prints:

    Hello Ivan

Important debugging habit:

Be able to freeze a loop on ONE specific iteration and identify
the exact value of every variable.
*/


//=============================================================================
// 🏆 FINAL CHECKPOINT SCORE
//=============================================================================

/*

DAY 4.1 FUNDAMENTALS CHECKPOINT

SCORE:

    17.5 / 19

RESULT:

    🟢 READY FOR DAY 4.2


STRONG AREAS:

    ✅ Primitive vs object behavior
    ✅ Mutation vs reassignment
    ✅ Parameters vs arguments
    ✅ Return values
    ✅ Arrow functions
    ✅ Calling functions
    ✅ Function composition
    ✅ Function scope
    ✅ Array indexing
    ✅ Array length
    ✅ Array methods
    ✅ Loops
    ✅ Off-by-one reasoning
    ✅ Maximum algorithm
    ✅ Minimum algorithm
    ✅ Combining arrays + functions + loops


MINOR REVIEW AREAS:

    1. Primitive/reference behavior is separate from let/const.

       Primitive/reference:
           determines copying behavior

       let/const:
           determines reassignment rules


    2. Be precise about mutation vs reassignment.

       person.name = "John"
           → mutate object property

       person = { name: "John" }
           → reassign variable


    3. When debugging loops, trace ONE iteration exactly.

       Example:

       i = 0
           ↓
       array[0]
           ↓
       actual value
           ↓
       function argument
           ↓
       return value
           ↓
       output


===============================================================================
COLLECTIVE NOTES — DAYS 1 TO 3
===============================================================================


DAY 1 — VALUES, REFERENCES, MUTATION & REASSIGNMENT
----------------------------------------------------

Primitive values are copied independently.

Example:

    let a = 10;
    let b = a;

    b = 20;

Result:

    a = 10
    b = 20


Objects and arrays are reference values.

Example:

    const user1 = {
        name: "Ivan"
    };

    const user2 = user1;

Both reference the same object.


Mutation:

    user2.name = "John";

Changes something INSIDE an existing object.


Reassignment:

    user2 = {
        name: "Mark"
    };

Makes a variable refer to something different.


let:

    reassignment allowed


const:

    reassignment not allowed

BUT objects declared with const can still be mutated.


Three separate concepts:

    VALUE / REFERENCE
        → What happens when copied?

    MUTATION / REASSIGNMENT
        → What operation am I performing?

    let / const
        → Is reassignment allowed?



DAY 2 — FUNCTIONS
-----------------

Functions package reusable behavior.

Example:

    function add(a, b) {
        return a + b;
    }


Parameter:

    placeholder defined by the function


Argument:

    actual value supplied when calling it


Example:

    function greet(name)

    name
        → parameter

    greet("Ivan")

    "Ivan"
        → argument


return:

    sends a value back to the caller
    and ends the function


console.log():

    displays something in the console


Functions can be stored in variables:

    const add = (a, b) => a + b;


Important distinction:

    add

        → function itself


    add(5, 10)

        → execute the function


Functions can call other functions:

    const result = double(add(5, 10));


Read nested functions inside → outside:

    add(5, 10)
        ↓
       15

    double(15)
        ↓
       30



DAY 3 — ARRAYS & LOOPS
----------------------

Arrays store multiple values.

Example:

    const fruits = [
        "apple",
        "banana",
        "orange"
    ];


Indexes begin at 0:

    fruits[0]
        → apple


.length:

    number of elements


Last element:

    array[array.length - 1]


Important methods:

    push()
        → add to end

    pop()
        → remove from end

    unshift()
        → add to beginning

    shift()
        → remove from beginning


Standard loop:

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }


i represents the current index.


Maximum pattern:

    let max = numbers[0];

    for (...) {

        if (numbers[i] > max) {
            max = numbers[i];
        }

    }


Minimum pattern:

    let min = numbers[0];

    for (...) {

        if (numbers[i] < min) {
            min = numbers[i];
        }

    }


Powerful general algorithm pattern:

    INITIALIZE
        ↓
    LOOP
        ↓
    COMPARE
        ↓
    UPDATE
        ↓
    REPEAT


===============================================================================
BIGGEST PROGRESSION SO FAR
===============================================================================

DAY 1:

    "What is mutation vs reassignment?"

        ↓

NOW:

    person.name = ...
        → mutation

    person = {...}
        → reassignment


DAY 2:

    "Why does Node print [Function: isPassing]?"

        ↓

NOW:

    functionName
        → function itself

    functionName(...)
        → execute it


DAY 3:

    Learning array indexing and loops

        ↓

NOW:

    Can reason about:

    array
      +
    variable
      +
    loop
      +
    comparison
      +
    update

        ↓

    basic algorithms


===============================================================================
STATUS
===============================================================================

DAY 1  ✅ Variables / References
DAY 2  ✅ Functions
DAY 3  ✅ Arrays / Loops
DAY 4.1 ✅ Fundamentals Checkpoint — 17.5 / 19

NEXT:

DAY 4.2 — OBJECTS + ARRAYS OF OBJECTS

===============================================================================
*/