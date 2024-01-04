const taskOne = document.getElementById('task-one');
const taskTwo = document.getElementById('task-two');
const taskThree = document.getElementById('task-three');
const taskFour = document.getElementById('task-four');
const taskFive = document.getElementById('task-five');
const taskSix = document.getElementById('task-six');
const taskSeven = document.getElementById('task-seven');
const taskEight = document.getElementById('task-eight');
const taskNine = document.getElementById('task-nine');
const taskTen = document.getElementById('task-ten');
const taskEleven = document.getElementById('task-eleven');


/* 1) Display on the page numbers from 10 to 20 in line separated by comma*/
const numbersArray = [];

for (let i = 10; i <= 20; i++) {
    numbersArray.push(i);
}

let numbersString = numbersArray.toString();

taskOne.innerHTML = `Task One solution: ${numbersString}`;


/* 2) Display squares of numbers from 10 to 20*/

let squaresArray = [];
for (let i = 10; i <= 20; i++) {
    squaresArray.push(Math.pow(i, 2));
}

let squaresString = squaresArray.toString();

taskTwo.innerHTML = `Task Two solution: ${squaresString}`;

// 3) Display multiplication table for number 7

function multiplyNum() {
    for (let i = 1; i <= 7; i++) {
        for (let j = 1; j <= 10; j++) {
            if (i === 7) {
                document.write(`${i} * ${j} = ${i * j} <br>`);
            }
        }
    }
}
document.write(`<br>`);

multiplyNum();

taskThree.innerHTML = `Task Three solution is below`;


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

taskFour.innerHTML = `Task Four solution: ${summarisingResult}`;


// 5) Count multiplication of all integers in a range from 15 to 35 
function multiplyIntegers() {
    let result = 1;
    for (let i = 15; i <= 35; i++) {
        result *= i;
    }
    return result;
}

const multiplicationResult = multiplyIntegers();

taskFive.innerHTML = `Task Five solution: ${multiplicationResult}`;


// 6) Find arithmetical mean of all integers from 1 to 100
function findArithmeticalMean() {
    let summ = 0;
    let average = 1;
    for (let i = 1; i <= 100; i++) {
        average = ((summ += i) / 100);
    }
    return average;
}

const averageResult = findArithmeticalMean();

taskSix.innerHTML = `Task Six solution: ${averageResult}`;

// 7) Display numbers from 100 to 300 which are multiple if 3
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

taskSeven.innerHTML = `Task Seven solution: ${numsMultipleOfThree}`;


// 8) Find all natural number divisors
function naturalNumDivisors(natNum) {
    let divisors = [];
    for (let i = 1; i <= natNum; i++) {
        if (natNum % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}

const numberDivisors = naturalNumDivisors(10);

taskEight.innerHTML = `Task Eight solution: ${numberDivisors}`;

// 9) Find all paired divisors of a number
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

taskNine.innerHTML = `Task Nine solution: ${divisorsPaired}`;


// 10) Count summ of all paired divisors of a number 
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

taskTen.innerHTML = `Task Ten solution: ${divisorsSumm}`;

document.write(`<br>`);

// 11) Display multiplication table for all numbers
function displayMultiplication() {
    for (let i = 1; i <= 9; i++) {
        for (let j = 1; j <= 9; j++) {
            document.write(`${i} * ${j} = ${i * j} <br>`);
        }
        document.write(`<br>`);
    }
}

document.write(`<br>`);

displayMultiplication();

taskEleven.innerHTML = `Task Eleven solution is below`;


