const myArray = [10, 20, 30];
console.log(myArray);

console.log(myArray[0]);
console.log(myArray[1]);

myArray[0] = 99;
console.log(myArray)

let food = ['burgers', 'pizza', 'wings', 'nuggets'];
console.log(food)

console.log(food.length);

food.push('nachos');
console.log(food);

food.splice(1, 1);
console.log(food);

let colors = [
    'red',
    'blue',
    'green'
];
console.log(colors);

let mixed = ['hello', 42, true, null];
console.log(mixed);

let cities = ['Atlanta', 'New York', 'Chicago'];
for (let i = 0; i < cities.length; i++){
    console.log(cities[i]);
}

let numbers = [1, 2, 3];
numbers.push(4, 5, 6);
console.log(numbers);

let lastItem = numbers [numbers.length -1];
console.log (lastItem)

const foods = ["Pizza", "Taco", "Sushi", "Burgers", "Salad"];
const list = document.getElementById("foodList");
for(let i = 0; i < food.length; i++){
    const li = document.createElement("li")
    li.textContent = foods[i];
    list.appendChild(li);
}

const quotes = ["Believe in yourself.", "Keep going, you're doing great!", "Never stop learning.", "Strive for progress, not perfection.", "Every day is a second chance."];

function showQuote(){
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quoteDisplay") .textContent = quotes[randomIndex];
}

const names = ["Kayla", "Chris", "Jordan", "Ava", "Miles"];
function searchName(){
    const userInput =
    document.getElementById("SearchBox") .value.trim();
    const result = names.includes(userInput);
    document.getElementById(searchResult).textContent = result;
    ? `${userInput} is in the list.`;
    : `${userInput} was not found.`;
}

const images = [

]

let index = 0;

const colors = ["lightblue", "lightgreen", "lavender", "peachpuff", "lightgray"];
let colorIndex = 0;
function changeColor(){
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}