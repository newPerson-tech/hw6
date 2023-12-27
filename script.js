
/*1) Print on the page numbers from 10 to 20 in line separated by comma*/


//addressing the html element to work with
const taskOne = document.getElementById('task-one');

//creating empty array to write numbers in
let numbersArray = [];
for (let i = 10; i <= 20; i++) {
    numbersArray.push(i);
}

//converting array into a string
let numbersString = numbersArray.toString();

taskOne.innerHTML = numbersString;
