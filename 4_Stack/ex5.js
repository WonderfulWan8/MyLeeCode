// let averageTempDay1 = [72, 75, 79, 79, 81, 81];
// let averageTempDay2 = [81, 79, 75, 75, 73, 72];

// let averageTemp = [];
// averageTemp[0] = [72, 75, 79, 79, 81, 81];
// averageTemp[1] = [81, 79, 75, 75, 73, 72];

// function printMatrix(myMatrix){
//     for(let i = 0; i < myMatrix.length; i++){
//         for(let j = 0;j<myMatrix[i].length; j++){
//             console.log(myMatrix[i][j]);
//         }
//         console.log('\n');
//     }
// }
// printMatrix(averageTemp);

// console.table(averageTemp);

// const matrix3x3x3 = [];
// for( let i = 0; i < 3; i++ ){
//     matrix3x3x3[i] = [];
//     for(let j = 0; j < 3; j++){
//         matrix3x3x3[i][j] = [];
//         for(let k = 0; k < 3; k++){
//             matrix3x3x3[i][j][k] = i+j+k;
//         }
//     }
// }
// console.table(matrix3x3x3);

// let str = matrix3x3x3.join();
// console.log(typeof str);
// console.log(matrix3x3x3[0][1].indexOf(3));

// const zero = 0;
// const positiveNumbers = [1, 2, 3];
// const negativeNumbers = [-3, -2, -1];

// let numbers = negativeNumbers.concat(zero,positiveNumbers,zero);
// console.log(numbers);

// function isEven(x){
//     console.log(x);
//     return x % 2 === 0 ? true : false;
// }
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//方法1 自己写循环
// for(let i = 0; i < numbers.length ; i++){
    // console.log(isEven(numbers[i]));
    // isEven(numbers[i]);
// }
// 方法2 every 迭代数组中的每个元素，直到返回false
// numbers.every(isEven);

// numbers.some(isEven);

// numbers.forEach( x => console.log( x % 2 === 0 ) );

// const myMap = numbers.map(isEven);
// console.log(myMap);

// const myFilter = numbers.filter(isEven);//只返回值为true 的元素
// console.log(myFilter);

// numbers.reduce( (previous, current) => previous + current );

// for (const n of numbers){
//     console.log( n % 2 === 0 ? 'even' : 'odd');
// }

// let iterator = numbers[Symbol.iterator]();
// console.log(numbers);

// numbers.reverse();
// console.log(numbers);

// numbers.sort();//sort方法对数组做排序时，默认把元素当做字符串进行相互比较
// console.log(numbers);

// numbers.sort( (a,b) => a-b );
// console.log(numbers);
// function compare(a,b){
//     if(a<b){
//         return -1;
//     }
//     if(a>b){
//         return 1;
//     }
//     return 0;
// }
// numbers.sort(compare);
// console.log(numbers);

const friends = [
    {name:'John', age: 40},
    {name:'tom', age:20},
    {name:'Johansen',age:30}
]
function comparePerson(a,b){
    if(a.age > b.age){
        return 1;
    }
    if(a.age < b.age){
        return -1;
    }
    return 0;
}
// friends.comparePerson();
console.log(friends.sort(comparePerson));

const names = ['Ana', 'ana', 'john', 'John'];
// console.log(names.sort());
console.log(names.sort( (a,b)=>{
    if(a.toLowerCase() > b.toLowerCase()){
        return 1;
    }
    if(a.toLowerCase() < b.toLowerCase()){
        return -1;
    }
    return 0;
} ));

console.log(numbers.indexOf(10));
console.log(numbers.indexOf(100));

numbers.push(10);
console.log(numbers.lastIndexOf(10));
console.log(numbers.lastIndexOf(100));


function multipleOf13(element, index, array){
    return ( element % 13 == 0 )
}

console.log(numbers.find(multipleOf13));
console.log(numbers.findIndex(multipleOf13));

console.log(numbers.includes(15));
console.log(numbers.includes(20));

let numbers2 = [7,6,5,4,3,2,1];
console.log(numbers2.includes(5,1));

console.log(numbers2.toString());
console.log(numbers2.join('~'));