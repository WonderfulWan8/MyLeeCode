// class Set{
//     constructor(){
//         this.items = {};
//     }
// }

// const s = new Set();
// console.log(s.has("matt"));
// console.log(s.size);

// s.add("Matt").add("Frisbie");
// console.log(s.size);

// s.clear();
// console.log(s.has("Matt"));
// console.log(s.has("Frisbie"));
// console.log(s.size);

// const s1 = new Set().add("val1");
// s.add("val2").add("val3");
// console.log(s1.size);

const s = new Set();
const functionVal = function(){};
const symbolVal = Symbol();
const objectVal = new Object();
s.add(functionVal);
s.add(symbolVal);
s.add(objectVal);

console.log(s.has(functionVal));
console.log(s.has(symbolVal));
console.log(s.has(objectVal));

const m = new Set();

const objVal

