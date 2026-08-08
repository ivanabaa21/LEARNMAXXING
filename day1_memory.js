/*Complete these tasks without using AI to generate the code:
Keep the file clean and readable. Pretend you're writing it for another student who will learn from your examples. */

//Create a primitive variable and demonstrate that copying it creates an independent value.
let a = 1;
let b = a; 

b = 10; 
console.log(a);
console.log(b);

//Create an object and demonstrate that copying it shares the same reference.
const  car = {
    brand: "toyota",
    color: "red"
};

const car2 = car;

car2.color = "blue";
console.log(car.color);
console.log(car2.color);

//Create an array and demonstrate that modifying the copied array also affects the original.
let arr = [1, 2, 3];
let arr2 = arr; 

arr2.push(4);

console.log(arr);
//revised it and confident that it now works and demonstrate that they point the same thing and successfully mutated


//(Bonus) Show the difference between const and let with one example of each.
let ivan = {
    age: 30
};

let ivan2 = ivan;

ivan2 = {
    age: 40
}; //possible since let allows reassignment
console.log(ivan);
console.log(ivan2);

const person = {
    name: "John"
};

const person2 = person;

person2 = {
    name: "ivan"
}; 
//const prevents reassignment, regardless of whether the value is primitive or an object.




/*

# DAY 1 NOTES — JAVASCRIPT VARIABLES, VALUES & REFERENCES

1. VARIABLES

---

A variable is a named reference to a value.

Example:
let age = 20;

Variables can hold different kinds of values such as numbers, strings,
booleans, objects, and arrays.

2. PRIMITIVE VALUES

---

Primitive values include:

```
string
number
boolean
null
undefined
bigint
symbol
```

When a primitive value is copied, the value is copied independently.

Example:

```
let a = 10;
let b = a;

b = 20;
```

Result:

```
a = 10
b = 20
```

Mental model:

```
a → 10
b → 20
```

Changing b does not change a.

3. OBJECTS & REFERENCES

---

Objects are reference values.

Example:

```
const person1 = {
    name: "Ivan"
};

const person2 = person1;
```

Both variables refer to the SAME object.

Mental model:

```
person1 ──┐
          ↓
      { name: "Ivan" }
          ↑
          │
person2 ──┘
```

Therefore:

```
person2.name = "John";
```

also changes what person1 sees.

```
person1.name → "John"
person2.name → "John"
```

Important:
Copying an object variable copies the REFERENCE to the object,
not an independent copy of the object.

4. ARRAYS

---

Arrays are also reference values.

Example:

```
const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2.push(4);
```

Both variables refer to the same array.

Result:

```
arr1 → [1, 2, 3, 4]
arr2 → [1, 2, 3, 4]
```

## 5. MUTATION

Mutation means changing the contents of an existing object or array.

Examples:

```
person.name = "John";

arr.push(4);
```

The original object/array still exists; its contents were changed.

Think:

```
"Change something INSIDE the existing thing."
```

## 6. REASSIGNMENT

Reassignment means making a variable refer to a different value/object.

Example:

```
let person = {
    name: "Ivan"
};

person = {
    name: "John"
};
```

The variable now refers to a completely different object.

Think:

```
"REPLACE what the variable refers to."
```

## 7. MUTATION VS REASSIGNMENT

Mutation:

```
person.name = "John";

→ Changes the existing object.
```

Reassignment:

```
person = {
    name: "John"
};

→ Creates a new object and makes person refer to it.
```

## 8. let

let allows reassignment.

Example:

```
let score = 10;

score = 20;
```

Use let when a variable needs to be reassigned.

9. const

---

const prevents reassignment.

Example:

```
const age = 20;

age = 30; // ERROR
```

However, const DOES NOT make objects or arrays immutable.

This is allowed:

```
const person = {
    name: "Ivan"
};

person.name = "John";
```

Why?

Because we MUTATED the object instead of reassigning the variable.

This is NOT allowed:

```
const person = {
    name: "Ivan"
};

person = {
    name: "John"
}; // ERROR
```

## 10. MODERN JAVASCRIPT RULE

Prefer const by default.

Use let when reassignment is necessary.

Avoid var in modern JavaScript unless working with older code.

```
const → cannot reassign
let   → can reassign
var   → old variable declaration
```

## 11. THREE SEPARATE CONCEPTS

Do NOT mix these concepts together.

VALUE VS REFERENCE
Describes what happens when values are copied.

```
Primitive → independent value
Object/Array → shared reference
```

MUTATION VS REASSIGNMENT
Describes what operation you are performing.

```
Mutation      → change contents
Reassignment  → replace what the variable refers to
```

let VS const
Determines whether reassignment is allowed.

```
let   → reassignment allowed
const → reassignment not allowed
```

## 12. THE IMPORTANT MENTAL QUESTION

Whenever you see JavaScript involving objects, ask:

```
"Am I changing the variable,
 or am I changing something inside the thing it points to?"
```

Example:

```
user.name = "John";

→ MUTATION
```

Example:

```
user = newUser;

→ REASSIGNMENT
```

===============================================================================
DAY 1 CORE TAKEAWAY
===================

A primitive gets copied as a VALUE.

An object/array gets copied as a REFERENCE.

Mutation changes the existing object.

Reassignment replaces what the variable points to.

let allows reassignment.

const does not allow reassignment.

Most important mental model:

```
VALUE / REFERENCE
        ↓
What happens when copied?

MUTATION / REASSIGNMENT
        ↓
What am I doing afterward?

let / const
        ↓
Can I reassign the variable?
```

===============================================================================
*/
