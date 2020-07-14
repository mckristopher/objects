// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Objects</h1>`;

// object creation
let a = {}; // object literal syntax
let b = new Object(); // object constructor syntax
console.log(a, b);