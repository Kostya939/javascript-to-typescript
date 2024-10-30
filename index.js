function calculateSum(a: number, b: number): number {
    return a + b;
}

function greetUser(name: string): string {
    return "Hello, " + name + "!";
}

let numbers: number[] = [1, 2, 3, 4, 5];
let sum: number = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log("Sum:", sum);
console.log(greetUser("John"));

function calculateProduct(a: number, b: number): number {
    return a * b;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function findMax(arr: number[]): number {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

let products: { id: number; name: string; price: number }[] = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Smartphone", price: 500 },
    { id: 3, name: "Tablet", price: 300 }
];

function calculateTotal(products: { id: number; name: string; price: number }[]): number {
    let total = 0;
    for (let i = 0; i < products.length; i++) {
        total += products[i].price;
    }
    return total;
}

function filterExpensiveProducts(products: { id: number; name: string; price: number }[], threshold: number): { id: number; name: string; price: number }[] {
    let filteredProducts: { id: number; name: string; price: number }[] = [];
    for (let i = 0; i < products.length; i++) {
        if (products[i].price > threshold) {
            filteredProducts.push(products[i]);
        }
    }
    return filteredProducts;
}

function printProductNames(products: { id: number; name: string; price: number }[]): void {
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

function reverseString(str: string): string {
    return str.split("").reverse().join("");
}

function isPalindrome(str: string): boolean {
    let reversed = reverseString(str);
    return str === reversed;
}

console.log("Is 'radar' a palindrome?", isPalindrome("radar"));
console.log("Is 'hello' a palindrome?", isPalindrome("hello"));

function factorial(n: number): number {
    if (n === 0) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 0:", factorial(0));

function fibonacci(n: number): number {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("Fibonacci sequence (first 10 numbers):");
for (let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

function findMin(arr: number[]): number {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

console.log("Min number in array:", findMin(numbers));

function squareNumbers(arr: number[]): number[] {
    let squared: number[] = [];
    for (let i = 0; i < arr.length; i++) {
        squared.push(arr[i] * arr[i]);
    }
    return squared;
}

console.log("Squared numbers:", squareNumbers(numbers));

function sumOfArray(arr: number[]): number {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function averageOfArray(arr: number[]): number {
    return sumOfArray(arr) / arr.length;
}

console.log("Average of numbers:", averageOfArray(numbers));

function countOccurrences(arr: number[], value: number): number {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            count++;
        }
    }
    return count;
}

console.log("Occurrences of 2 in array:", countOccurrences(numbers, 2));

function getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random number between 1 and 10:", getRandomNumber(1, 10));

function sortArrayAscending(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
}

function sortArrayDescending(arr: number[]): number[] {
    return arr.sort((a, b) => b - a);
}

let sortedNumbersAsc = sortArrayAscending(numbers);
console.log("Numbers sorted in ascending order:", sortedNumbersAsc);

let sortedNumbersDesc = sortArrayDescending(numbers);
console.log("Numbers sorted in descending order:", sortedNumbersDesc);

function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function capitalizeWords(sentence: string): string {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = capitalizeFirstLetter(words[i]);
    }
    return words.join(" ");
}

let sentence: string = "this is a simple sentence.";
console.log("Capitalized sentence:", capitalizeWords(sentence));

function generateRandomString(length: number): string {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

console.log("Random string (10 characters):", generateRandomString(10));

function findDuplicates(arr: number[]): number[] {
    let duplicates: number[] = [];
    let seen: { [key: number]: boolean } = {};
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]]) {
            duplicates.push(arr[i]);
        } else {
            seen[arr[i]] = true;
        }
    }
    return duplicates;
}

let duplicateNumbers: number[] = [1, 2, 3, 4, 4, 5, 5, 6];
console.log("Duplicates in array:", findDuplicates(duplicateNumbers));

function removeDuplicates(arr: number[]): number[] {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log("Array after removing duplicates:", removeDuplicates(duplicateNumbers));

function mergeArrays(arr1: number[], arr2: number[]): number[] {
    return arr1.concat(arr2);
}

let moreNumbers: number[] = [6, 7, 8, 9, 10];
let mergedArray = mergeArrays(numbers, moreNumbers);
console.log("Merged array:", mergedArray);

function findIntersection(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(value => arr2.includes(value));
}

console.log("Intersection of arrays:", findIntersection(numbers, moreNumbers));

function findUnion(arr1: number[], arr2: number[]): number[] {
    return removeDuplicates(mergeArrays(arr1, arr2));
}

console.log("Union of arrays:", findUnion(numbers, moreNumbers));

function getDifference(arr1: number[], arr2: number[]): number[] {
    return arr1.filter(value => !arr2.includes(value));
}

console.log("Difference between arrays:", getDifference(numbers, moreNumbers));

function arrayToObject(arr: number[]): { [key: number]: number } {
    let obj: { [key: number]: number } = {};
    for (let i = 0; i < arr.length; i++) {
        obj[i] = arr[i];
    }
    return obj;
}

console.log("Array to object:", arrayToObject(numbers));

function objectToArray(obj: { [key: number]: number }): number[] {
    return Object.values(obj);
}

let numbersObject = { 0: 1, 1: 2, 2: 3, 3: 4, 4: 5 };
console.log("Object to array:", objectToArray(numbersObject));

function countVowels(str: string): number {
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

function reverseWords(sentence: string): string {
    return sentence.split(" ").reverse().join(" ");
}

console.log("Reversed words in sentence:", reverseWords("Hello world! How are you?"));
