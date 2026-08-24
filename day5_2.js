/*
DAY 5.2 CODING CHALLENGE — ORDER PROCESSOR

Given:

const orders = [1200, 0, 450, 2500, 0, 800, 3200];

Using ONE loop:

1. Ignore orders worth 0.
2. Calculate the total value of all VALID orders.
3. Count how many valid orders there are.
4. Count how many valid orders are 1000 or higher.
5. Find the highest valid order.
6. Determine whether an order worth exactly 2500 exists.
7. Calculate the average VALID order value after the loop.

Expected:

Total Valid Orders: 8150
Valid Order Count: 5
Orders 1000 or Higher: 3
Highest Order: 3200
Found 2500: true
Average Valid Order: 1630


RULES:

- Use ONE loop only.
- Use continue to skip 0-value orders.
- Do not use Math.max().
- Do not use reduce().
- Do not use includes().
- Use an accumulator.
- Use counters.
- Use a flag.
- Calculate the average AFTER the loop.
*/


const orders = [1200, 0, 450, 2500, 0, 800, 3200];
let total = 0;
let valid = 0;
let valid1000 = 0;
let max = orders[0];
let is2500 = false;
let average = 0;

for (let i = 0; i < orders.length; i++){
    if ( orders[i] === 0 ){
        continue;
    }

    total += orders[i];
    valid++;

    if ( orders[i] >= 1000){
        valid1000++;
    }

    if ( orders[i] > max) {
        max = orders[i];
    }

    if ( orders[i] === 2500) {
        is2500 = true;
    }


}

average = total / valid;

console.log("Total Valid Orders: " + total);
console.log("Valid Order Count: " + valid);
console.log("Orders 1000 or Higher: " + valid1000);
console.log("Highest Order: " + max);
console.log("Found 2500: " + is2500);
console.log("Average Valid Order: " + average);

/* 
Day 5 Results
Day 5.1 Quiz: 7.5/8
Day 5.1 Challenge: 10/10
Day 5.2 Quiz: 8/8
Day 5.2 Challenge: 10/10

You can now use:
for
while
accumulators
counters
flags
linear search
break
continue
max/min
one-pass array processing
The biggest improvement from Days 1–3 is that you're now combining multiple
 pieces of state in one pass through data, which is much closer to actual programming tasks.
Next up is Day 6 — Objects in depth: properties, dot/bracket notation, mutation,
 adding/removing fields, nested objects, and looping through object-style data. 
 */