document.body.onload = addElement;

function addElement() {
    //create new div el-t
    const newDiv = document.createElement('div');
    //adding content
    const newContent = document.createTextNode('Task');
    //adding text node to div
    newDiv.appendChild(newContent);
    //adding new div to DOM
    const currentDiv = document.getElementById('task-one');

    document.body.insertBefore(newDiv, currentDiv);
}





/* 1) Display on the page numbers from 10 to 20 in line separated by comma*/

//creating empty array to write numbers in
let numbersArray = [];
for (let i = 10; i <= 20; i++) {
    numbersArray.push(i);
}

//converting array into a string
let numbersString = numbersArray.toString();

addElement();


/* 2) Display squares of numbers from 10 to 20*/

//getting html element
const taskTwo = document.getElementById('task-two');

//creating empty array to write numbers, using Math.pow to square each number
let squaresArray = [];
for (let i = 10; i <= 20; i++) {
    squaresArray.push(Math.pow(i, 2));
}

let squaresString = squaresArray.toString();

taskTwo.innerHTML = squaresString;

// 3) Display multiplication table for number 7

const taskThree = document.getElementById('task-three');


function multiplyNum() {
    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 10; j++) {
            if (i === 7) {
                document.write(` ${i} * ${j} = ${i * j} <br>`);
            }
        }
        document.write(`<br>`);
    }
    return;
}

multiplyNum();

taskThree.innerHTML = `Find multiplication table for number 7 below`;


// 4) Count summ of all integers from 1 to 15


function countIntegers() {
    let summ = 0;
    for (let i = 0; i <= 15; i++) {
        if (Number.isInteger(i)) {
            summ += i;
        }
    }
    return summ;
}

const summarisingResult = countIntegers();

document.write(`The summ of all integers in a range from 1 to 15 is: ${summarisingResult}`);

document.write(`<br>`);

// 5) Count multiplication of all integers in a range from 15 to 35 

function multiplyIntegers() {
    let result = 1;
    for (let i = 15; i <= 35; i++) {
        result *= i;
    }
    return result;
}

const multiplicationResult = multiplyIntegers();
document.write(`The result of multiplying of all integers in a range from 15 to 35 is: ${multiplicationResult}`);

document.write(`<br>`);

// 6) Find arithmetical mean of all integers from 1 to 100

function findArithmeticalMean() {
    let summ = 0;
    let average = 1;
    for (let i = 1; i <= 100; i++) {
        average = ((summ += i) / 100);
    }
    return average;
}

const averageResult = findArithmeticalMean()

document.write(`The arithmetical average of integers from 1 to 100 is: ${averageResult}`);

//Display numbers from 100 to 300 which are multiple if 3

function multipleOfThree() {
    let numbers = [];
    for (let i = 100; i <= 300; i++) {
        if (i % 3 === 0) {
            numbers.push(i);
        }
    }
    return numbers;
}

const numsMultipleOfThree = multipleOfThree();

document.write(`<br>`);

document.write(`Numbers multiple of 3 are: ${numsMultipleOfThree}`);


//Find all natural number divisors

function naturalNumDivisors(natNum) {
    let divisors = [];
    for (let i = 1; i <= natNum; i++) {
        if (natNum % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

const numberDivisors = naturalNumDivisors(13);

document.write(`<br>`);

document.write(`Divisors of a given number are: ${numberDivisors}`);

// 10) Find all paired divisors of a number

function pairedNumDivisors(number) {
    const pairedDivisors = [];
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            pairedDivisors.push(i);
        }
    }
    return pairedDivisors;
}

const divisorsPaired = pairedNumDivisors(10);

document.write(`<br>`);

document.write(`Paired divisors of a given number are: ${divisorsPaired}`);

// 11) Count summ of all paired divisors of a number 


function pairedDivisorsSumm(number) {
    const pairedDivisors = [];
    let pairedDivisorsSumm = 1;
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            pairedDivisors.push([i, number / i]);
            pairedDivisorsSumm += i;
        }
    }
    return pairedDivisorsSumm;
}

const divisorsSumm = pairedDivisorsSumm(53);

document.write(`<br>`);

document.write(`Summ of paired divisors of a given number are: ${divisorsSumm}`);

// Display multiplication table for all numbers

function displayMultiplication() {
    for (let i = 1; i <= 10; i++) {
        for (let j = 1; j <= 10; j++) {
            document.write(` ${i} * ${j} = ${i * j} <br>`);
        }
        document.write(`<br>`);
    }
    return;
}

document.write(`<br>`);

document.write(`Multiplication table:`)

document.write(`<br>`);

displayMultiplication();









