/*
DAY 5.1 CODING CHALLENGE — SALES ANALYSIS

Given:

const sales = [120, 80, 150, 50, 200];

Using ONE loop:

1. Calculate the total sales.
2. Count how many sales are 100 or higher.
3. Count how many sales are below 100.
4. Calculate the average AFTER the loop.
5. Print all results.

Expected:

Total Sales: 600
Average Sale: 120
Sales 100 or Higher: 3
Sales Below 100: 2


RULES:

- Use only ONE loop.
- Do not manually add the numbers.
- Use an accumulator for the total.
- Use counters for the two categories.
- Calculate average using total / sales.length.
*/


const sales = [120, 80, 150, 50, 200];
let total = 0;
let above = 0;
let below = 0;
for (let i = 0; i < sales.length; i++){
    total += sales[i];
    if (sales[i] >= 100){
        above++;
    } else {
        below++;
    }
}

const average = total / sales.length;

console.log("Total Sales:", total);
console.log("Average Sale:", average);
console.log("Sales 100 or Higher:", above);
console.log("Sales Below 100:", below);
