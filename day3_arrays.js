/* Challenge 1 — Basic array manipulation

Create:

const fruits = ["apple", "banana", "orange"];

Then:

Print the first fruit.
Print the last fruit.
Add "mango" to the end.
Remove the first fruit.
Print the final array.
Print the array's length. 

*/

const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
fruits.push("mango");
console.log(fruits[3]);
fruits.shift();
for (i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}
console.log(fruits.length);


/* Challenge 2 — Loop

Create:

const numbers = [10, 20, 30, 40, 50];

Use a for loop to print:

10
20
30
40
50

Do not manually console.log() each number.

The loop must do it. */

const numbers = [10, 20, 30, 40, 50];
for (let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}


/* 🔥 Challenge 3 — The actual boss fight

Remember when you said this during your quiz?

"I will save the highest number to a variable and compare it to the next value."

NOW YOU'RE GOING TO ACTUALLY CODE IT.

Given:

const numbers = [23, 7, 91, 45, 12, 67];

Find the largest number.

Your program should eventually output:

91

Rules

❌ Don't use:
Math.max()
❌ Don't sort the array.
❌ Don't manually identify 91.

You need to use:

a variable
a loop
comparison
the array 
*/


const numbers2 = [23, 7, 91, 45, 12, 67];
//Find the largest number.
let max = numbers2[0];
for (let j = 0; j < numbers2.length; j++){
    if (numbers2[j] >= max){
        max = numbers2[j]
        console.log("its working" + j);
    }
    else{
        console.log("its still reiterating and working");
    }
}


console.log(max)


/* 
⚔️ FINAL MINI-BOSS BEFORE WE CLOSE DAY 3

I don't want you to just fix i/j.

Make one more version:

const numbers = [23, 7, 91, 45, 12, 67];

Create:

let min = ...

and find the smallest number.

Expected:

7

Same concept as the maximum problem, except your comparison changes.

Don't use:

Math.min()

Don't sort.

Don't manually choose 7. 
*/

const numbers3 = [23, 7, 91, 45, 12, 67];
let min = numbers3[0];
for (let i = 0; i < numbers3.length; i++){
    if (numbers3[i] <= min){
        min = numbers3[i]
        console.log("Min value changed")
    }
    else {
        console.log("this still reiterates")
    }
}

console.log(min);


/*
===============================================================================
DAY 3 NOTES — JAVASCRIPT ARRAYS
===============================================================================

1. WHAT IS AN ARRAY?
--------------------

An array is a collection that allows multiple values to be stored together.

Example:

    const fruits = ["apple", "banana", "orange"];

Arrays use INDEXES to access their elements.

IMPORTANT:
Array indexes start at 0.

    index 0 → "apple"
    index 1 → "banana"
    index 2 → "orange"


2. ACCESSING ARRAY ELEMENTS
---------------------------

Use square brackets:

    fruits[0];

This gives:

    "apple"

    fruits[1] → "banana"
    fruits[2] → "orange"


3. ARRAY LENGTH
---------------

.length tells us how many elements are inside an array.

    const numbers = [10, 20, 30, 40];

    numbers.length;

Result:

    4

IMPORTANT:

    length = number of elements
    last index = length - 1

Therefore:

    numbers.length - 1

gives the last index.

Example:

    numbers[numbers.length - 1];

gets the last element.

This is better than manually using numbers[3] because it works
even if the array changes size.


4. ADDING TO AN ARRAY — push()
------------------------------

.push() adds an element to the END of an array.

    const numbers = [1, 2, 3];

    numbers.push(4);

Result:

    [1, 2, 3, 4]


5. REMOVING FROM AN ARRAY — pop()
---------------------------------

.pop() removes the LAST element.

    const numbers = [1, 2, 3];

    numbers.pop();

Result:

    [1, 2]


6. ADDING TO THE BEGINNING — unshift()
---------------------------------------

.unshift() adds an element to the BEGINNING.

    const numbers = [2, 3];

    numbers.unshift(1);

Result:

    [1, 2, 3]


7. REMOVING FROM THE BEGINNING — shift()
----------------------------------------

.shift() removes the FIRST element.

    const numbers = [1, 2, 3];

    numbers.shift();

Result:

    [2, 3]


QUICK MEMORY:

    push()     → add to END
    pop()      → remove from END

    unshift()  → add to BEGINNING
    shift()    → remove from BEGINNING


8. LOOPING THROUGH AN ARRAY
---------------------------

A common way to loop through an array:

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

Mental model:

    i = current index

    i < numbers.length
        → keep going while the index is inside the array

    i++
        → move to the next index


Example:

    const numbers = [10, 20, 30];

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }

Output:

    10
    20
    30


9. WHY numbers[i] WORKS
-----------------------

If:

    i = 0

then:

    numbers[i]

means:

    numbers[0]

If:

    i = 1

then:

    numbers[i]

means:

    numbers[1]

The variable i represents the current index.


10. FINDING THE MAXIMUM VALUE
-----------------------------

A common programming algorithm is finding the largest value
in an array.

Example:

    const numbers = [23, 7, 91, 45, 12, 67];

Start by assuming the first element is the largest:

    let max = numbers[0];

Then loop through the array.

If the current number is larger than max:

    max = current number

Example logic:

    if (numbers[i] > max) {
        max = numbers[i];
    }

Eventually max contains:

    91


GENERAL ALGORITHM:

    Start with the first value
            ↓
    Compare with the next value
            ↓
    Is the new value bigger?
        ↓            ↓
       YES           NO
        ↓             ↓
    Replace max    Keep max
        ↓             ↓
        └──────┬──────┘
               ↓
          Continue loop


11. FINDING THE MINIMUM VALUE
-----------------------------

The same algorithm works for finding the smallest value.

Instead of asking:

    "Is the current number bigger?"

Ask:

    "Is the current number smaller?"


Example:

    let min = numbers[0];

    if (numbers[i] < min) {
        min = numbers[i];
    }


12. >= VS > AND <= VS <
------------------------

Both can work for maximum/minimum searching.

Maximum:

    numbers[i] > max

or:

    numbers[i] >= max

Minimum:

    numbers[i] < min

or:

    numbers[i] <= min

The simpler/conventional versions are usually:

    >  for maximum
    <  for minimum


13. IMPORTANT LOOP HABIT
------------------------

Declare the loop variable:

    for (let i = 0; ...)

instead of:

    for (i = 0; ...)

Using let keeps the variable properly scoped to the loop.

This connects to the concept of SCOPE learned earlier.


14. ARRAYS + LOOPS + CONDITIONS
-------------------------------

Arrays become much more powerful when combined with loops
and conditions.

Example:

    const numbers = [23, 7, 91, 45];

    let max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {

        if (numbers[i] > max) {
            max = numbers[i];
        }

    }

This combines:

    ARRAY
      +
    VARIABLE
      +
    LOOP
      +
    CONDITION
      =
    DATA PROCESSING


===============================================================================
DAY 3 CORE TAKEAWAY
===============================================================================

Arrays store multiple values.

Indexes start at 0.

.length gives the number of elements.

Last element:

    array[array.length - 1]

Common array methods:

    push()     → add to end
    pop()      → remove from end
    unshift()  → add to beginning
    shift()    → remove from beginning

Standard array loop:

    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

The variable i represents the current index.

A powerful programming pattern:

    Initialize
        ↓
    Loop
        ↓
    Compare
        ↓
    Update
        ↓
    Repeat

This pattern can be used for finding maximums, minimums,
searching, counting, filtering, and many other problems.

===============================================================================
DAY 3 COMPLETE
===============================================================================
*/