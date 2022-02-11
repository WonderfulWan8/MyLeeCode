// const m1 = new Map([
//     ["key1","val1"],
//     ["key2","val2"],
//     ["key3","val3"],
// ]);
// console.log(m1.size);

const m = new Map();
console.log(m.has("firstName"));
console.log(m.get("firstName"));
console.log(m.size);

m.set("firstName","Matt");
m.set("lastName","Frisbie");

console.log(m.get("firstName"));
console.table(m);
console.log(m.size);

m.delete("firstName");

console.log(m.has("firstName"));
console.log(m.has("lastName"));
console.log(m.size);

m.clear();

console.log(m.has("fisrtName"));
console.log(m.has("lastName"));
console.log(m.size);

const m2 = new Map().set("key1","val1");
m2.set("key2","val2")
    .set("key3","val3");
console.table(m2);

const m3 = new Map();
const functionKey = function(){};
const symbolKey = Symbol();
const objectKey = new Object();
m3.set(functionKey,"functionValue");
m3.set(symbolKey,"symbolKey");
m3.set(objectKey,"objectValue");

console.log(m3.get(functionKey));
console.log(m3.get(symbolKey));
console.log(m3.get(objectKey));

const m4 = new Map();
const objKey = {},
      objVal = {},
      arrKey = [],
      arrVal = [];
m4.set(objKey,objVal);
m4.set(arrKey,arrVal);

objKey.foo = "foo";
objVal.bar = "bar";
arrKey.push("foo");
arrVal.push("bar");
console.log(m4.get(objKey));
console.log(m4.get(arrKey));