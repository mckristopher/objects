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

// multiword property
let c = {
  "super cool property": "flying"
};
c['super weakness'] = "candy";
console.log(c)

// computed properties
let name = 'mercy';
let nameObj = {
  [name + 'C']: 'Anna Univ'
};
console.log(nameObj)

// let fruit = prompt("Which fruit to buy?", "apple");
// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };
// alert( bag.apple );


// property value shorthand
let apple = 'apple';
let mango = 'alphonso';
let fruits = {
  apple,
  mango,
  banana: 'bnnna' // both methods can be used together
};
console.log(fruits);

// all keys are strings
let numb = {
  0: "me"
};
console.log(numb, numb[0], numb["0"]);

// no restrictions for key names
console.log({
  for: 'me',
  let: 'you',
  '@$#@@': 'they'
});

// obj._proto_ always has to be an object value

// accessing non existent key, returns undefined
// does not throw error

// key check methods:
let keych = {
  a: 'asd',
  b: 'asdasd'
};
// check for undefined
console.log((keych.a) !== undefined);
// use "in"
console.log('a' in keych);

// undefined check fails when
keych['c'] = undefined;
console.log((keych.c) !== undefined);
console.log('c' in keych);

// looping through Objects
for(let key in keych) {
  console.log(keych[key]);
}

// ordering of object properties
// integers are sorted
// others are in order of creation
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1": "USA",
  "zebra": "desert",
  "ants": "hill"
};

for (let code in codes) {
  console.log(code); // 1, 41, 44, 49
}