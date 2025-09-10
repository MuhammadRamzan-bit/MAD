// Adding Function
function add(a, b) {
    if (a === undefined) a = 0;  
    if (b === undefined) b = 0;
    return a + b;
}

// Subtracting Function
function subtract(a = 0, b = 0) {
    return a - b;
}

// Multiplication Function
function multiply(...nums) {
    return nums.reduce((result, n) => result * n, 1);
}

// Division Function
function divide() {
    if (arguments.length === 0) return "No numbers provided!";
    let result = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        result /= arguments[i];
    }
    return result;
}

// checking Results
console.log("Add:", add(5,6));
console.log("1 value passing Add:", add(5));             // 5 (second arg undefined → 0)
console.log("Subtract:", subtract(10,3));
console.log("1 value passing Subtract:", subtract(10));  // 10 (b default = 0)
console.log("Multiply:", multiply(2, 3, 4)); // 24
console.log("Divide:", divide(100, 2, 5));   


