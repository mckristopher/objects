// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Objects</h1>`;

// object creation
let a = {}; // object literal syntax
let b = new Object(); // object constructor syntax
console.log(a, b);

// access property value
a.name = 'Mercy';
console.log(a);

// delete property
delete a.name;
console.log(a);

// multword property
let c = {
  "super cool property": "flying"
};
c['super weakness'] = "candy";
console.log(c)