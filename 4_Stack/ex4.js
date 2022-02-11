// let daysOfWeek = new Array();
// daysOfWeek = new Array(7);
// daysOfWeek = new Array('Sunday','m','t','w','th','fir','satur');

// let daysOfWeek = [];
// daysOfWeek = ['m','t','w','t','f','s','sun'];
// console.log(daysOfWeek.length);

// for(let i = 0; i < daysOfWeek.length; i++){
//     console.log(daysOfWeek[i]);
// }

// const fibonacci = [];
// fibonacci[1] = 1;
// fibonacci[2] = 1;
// for(let i = 3; i < 20; i++){
//     fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
// }
// for(let i = 1; i < fibonacci.length; i++){
//     console.log(fibonacci[i]);
// }
// console.log(fibonacci[0]);

// let numbers = [0,1,2,3,4,5,6,7,8,9];
// numbers[numbers.length] = 10;
// console.log(numbers.length-1);

// numbers.push(11);
// numbers.push(12,13);
// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }

// Array.prototype.insertFirstPosition = function(value){
//     for(let i = this.length; i >= 0; i--){
//         this[i] = this[i-1];
//     }
//     this[0] = value;
// }
// numbers.insertFirstPosition(-1);
// console.log(numbers[0]);

// numbers.unshift(-2);
// numbers.unshift();
// console.log(numbers[0]);

// for(let i = 0; i < numbers.length; i++){
//     numbers[i] = numbers[i+1];
// }
// Array.prototype.reIndex = function(myArray){
//     const newArray = [];
//     for(let i = 0; i < myArray.length; i++){
//         if(myArray[i] !== undefined){
//             newArray.push(myArray[i]);
//         }
//     }
//     return newArray;
// }
// Array.prototype.removeFirstPosition = function(){
//     for(let i = 0; i < this.length; i++){
//         this[i] = this[i+1];
//     }
//     return this.reIndex(this);
// }

let numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(numbers);

numbers.unshift(-1);//头入
console.log(numbers);

numbers.shift(0);//头出
console.log(numbers);

numbers.push(10);//尾入
console.log(numbers);

numbers.pop(10);//尾出
console.log(numbers);

numbers.splice(5, 3);//从索引5开始的3个元素
console.log(numbers);

numbers.splice(5, 0, 5, 6, 7);//从索引5开始 删除0个元素 添加 5 6 7 三个值
console.log(numbers);

numbers.splice(5, 3, 5, 6, 7);
console.log(numbers);