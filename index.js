/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function calculateSum(a, b) {
    return a + b;
}

/**
 * @param {string} name
 * @returns {string}
 */
function greetUser(name) {
    return "Hello, " + name + "!";
}

/** @type {number[]} */
let numbers = [1, 2, 3, 4, 5];
/** @type {number} */
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum:", sum);
console.log(greetUser("John"));

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function calculateProduct(a, b) {
    return a * b;
}

/**
 * @param {number} num
 * @returns {boolean}
 */
function isEven(num) {
    return num % 2 === 0;
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

/** @type {{id: number, name: string, price: number}[]} */
let products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
];

/**
 * @param {{id: number, name: string, price: number}[]} products
 * @returns {number}
 */
function calculateTotal(products) {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    return total;
}

/**
 * @param {{id: number, name: string, price: number}[]} products
 * @param {number} threshold
 * @returns {{id: number, name: string, price: number}[]}
 */
function filterExpensiveProducts(products, threshold) {
    let filteredProducts = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > threshold) {
            filteredProducts.push(products[i]);
        }
    }
    return filteredProducts;
}

/**
 * @param {{id: number, name: string, price: number}[]} products
 */
function printProductNames(products) {
    for (let i = 0; i < products.length; i++) {
        console.log(products[i].name);
    }
}

let filteredProducts = filterExpensiveProducts(products, 400);
console.log("Filtered Products:");
printProductNames(filteredProducts);

console.log("Max number in array:", findMax(numbers));
console.log("Total cost of products:", calculateTotal(products));
console.log("Is 4 even?", isEven(4));

/**
 * @param {string} str
 * @returns {string}
 */
function reverseString(str) {
    return str.split("").reverse().join("");
}

/**
 * @param {string} str
 * @returns {boolean}
 */
function isPalindrome(str) {
    let reversed = reverseString(str);
    return str === reversed;
}

console.log("Is 'radar' a palindrome?", isPalindrome("radar"));
console.log("Is 'hello' a palindrome?", isPalindrome("hello"));

/**
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 0:", factorial(0));

/**
 * @param {number} n
 * @returns {number}
 */
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci sequence (first 10 numbers):");
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log("Min number in array:", findMin(numbers));

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function squareNumbers(arr) {
    let squared = [];
    for (let i = 0; i < arr.length; i++) {
        squared.push(arr[i] * arr[i]);
    }
    return squared;
}

console.log("Squared numbers:", squareNumbers(numbers));

/**
 * @param {number[]} arr
 * @returns {number}
 */
function sumOfArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

/**
 * @param {number[]} arr
 * @returns {number}
 */
function averageOfArray(arr) {
    return sumOfArray(arr) / arr.length;
}

console.log("Average of numbers:", averageOfArray(numbers));

/**
 * @param {number[]} arr
 * @param {number} value
 * @returns {number}
 */
function countOccurrences(arr, value) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }
    return count;
}

console.log("Occurrences of 2 in array:", countOccurrences(numbers, 2));

/**
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random number between 1 and 10:", getRandomNumber(1, 10));

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
}

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function sortArrayDescending(arr) {
    return arr.sort((a, b) => b - a);
}

let sortedNumbersAsc = sortArrayAscending(numbers);
console.log("Numbers sorted in ascending order:", sortedNumbersAsc);

let sortedNumbersDesc = sortArrayDescending(numbers);
console.log("Numbers sorted in descending order:", sortedNumbersDesc);

/**
 * @param {string} str
 * @returns {string}
 */
function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * @param {string} sentence
 * @returns {string}
 */
function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = capitalizeFirstLetter(words[i]);
    }
    return words.join(" ");
}

let sentence = "this is a simple sentence.";
console.log("Capitalized sentence:", capitalizeWords(sentence));

/**
 * @param {number} length
 * @returns {string}
 */
function generateRandomString(length) {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

console.log("Random string (10 characters):", generateRandomString(10));

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function findDuplicates(arr) {
    let duplicates = [];
    let seen = {};
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            duplicates.push(arr[i]);
        } else {
            seen[arr[i]] = true;
        }
    }
    return duplicates;
}

let duplicateNumbers = [1, 2, 3, 4, 4, 5, 5, 6];
console.log("Duplicates in array:", findDuplicates(duplicateNumbers));

/**
 * @param {number[]} arr
 * @returns {number[]}
 */
function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log("Array after removing duplicates:", removeDuplicates(duplicateNumbers));

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

let moreNumbers = [6, 7, 8, 9, 10];
let mergedArray = mergeArrays(numbers, moreNumbers);
console.log("Merged array:", mergedArray);

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
function findIntersection(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value));
}

console.log("Intersection of arrays:", findIntersection(numbers, moreNumbers));

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
function findUnion(arr1, arr2) {
    return removeDuplicates(mergeArrays(arr1, arr2));
}

console.log("Union of arrays:", findUnion(numbers, moreNumbers));

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @returns {number[]}
 */
function getDifference(arr1, arr2) {
    return arr1.filter(value => !arr2.includes(value));
}

console.log("Difference between arrays:", getDifference(numbers, moreNumbers));

/**
 * @param {number[]} arr
 * @returns {Object.<number, number>}
 */
function arrayToObject(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i];
    }
    return obj;
}

console.log("Array to object:", arrayToObject(numbers));

/**
 * @param {Object.<number, number>} obj
 * @returns {number[]}
 */
function objectToArray(obj) {
    return Object.values(obj);
}

let numbersObject = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
console.log("Object to array:", objectToArray(numbersObject));

/**
 * @param {string} str
 * @returns {number}
 */
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

console.log("Number of vowels in 'hello world':", countVowels("hello world"));

/**
 * @param {string} sentence
 * @returns {string}
 */
function reverseWords(sentence) {
    return sentence.split(" ").reverse().join(" ");
}

console.log("Reversed words:", reverseWords(sentence));

/**
 * @param {number} num
 * @returns {boolean}
 */
function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

console.log("Is 7 prime?", isPrime(7));
console.log("Is 10 prime?", isPrime(10));

/**
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
function findPrimesInRange(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

console.log("Primes between 1 and 20:", findPrimesInRange(1, 20));

/**
 * @param {number} num
 * @returns {string}
 */
function convertToBinary(num) {
    return num.toString(2);
}

/**
 * @param {number} num
 * @returns {string}
 */
function convertToHex(num) {
    return num.toString(16);
}

console.log("Binary of 10:", convertToBinary(10));
console.log("Hex of 255:", convertToHex(255));

/**
 * @param {number} n
 * @returns {number[]}
 */
function generateFibonacciSequence(n) {
    let sequence = [];
    for (let i = 0; i < n; i++) {
        sequence.push(fibonacci(i));
    }
    return sequence;
}

console.log("Fibonacci sequence (first 10 numbers):", generateFibonacciSequence(10));

/**
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 */
function calculatePower(base, exponent) {
    return Math.pow(base, exponent);
}

console.log("2 to the power of 3:", calculatePower(2, 3));
