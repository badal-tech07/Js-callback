
//  Callback-Based Utility System

// 1. Process array using callback
function processArray(arr, callback) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        let value = callback(arr[i]);

        if (value !== null) {
            result.push(value);
        }
    }

    return result;
}

// 2. Square every number
let numbers = [1, 2, 3, 4];

let square = processArray(numbers, function(n) {
    return n * n;
});

console.log("Square:", square);


// 3. Return only even numbers
let even = processArray(numbers, function(n) {
    if (n % 2 === 0) {
        return n;
    }
    return null;
});

console.log("Even numbers:", even);


// 4 and 5. Process string and convert to uppercase
function processString(str, callback) {
    return callback(str);
}

let upper = processString("hello world", function(str) {
    return str.toUpperCase();
});

console.log("Uppercase:", upper);


// 6. Count words in a sentence
let wordCount = processString("I am learning JavaScript", function(str) {
    return str.trim().split(/\s+/).length;
});

console.log("Word count:", wordCount);


// 7. Calculate using callback
function calculate(a, b, callback) {
    return callback(a, b);
}

// 8.calculate() with callbacks 
console.log("Addition:", calculate(10, 5, function(a, b) {
    return a + b;
}));

console.log("Subtraction:", calculate(10, 5, function(a, b) {
    return a - b;
}));

console.log("Multiplication:", calculate(10, 5, function(a, b) {
    return a * b;
}));

console.log("Division:", calculate(10, 5, function(a, b) {
    return a / b;
}));


// 9. First Element Satisfying a Condition
function findElement(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) {
            return arr[i];
        }
    }

    return undefined;
}

let firstEven = findElement([1, 3, 7, 8, 9], function(n) {
    return n % 2 === 0;
});

console.log("First even number:", firstEven);
