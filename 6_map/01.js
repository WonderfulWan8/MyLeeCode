

// let emptyObj = {}
// console.log( (!!emptyObj) );
// console.log("---");
// console.log(( emptyObj instanceof Object));
// console.log("---");
// console.log(typeof emptyObj === 'object');
// console.log("---");
// console.log(JSON.stringify(emptyObj));
// console.log("---");



// function sum(x) {
//     if (arguments.length == 2) {
//       return arguments[0] + arguments[1];
//     } else {
//       return function(y) { return x + y; };
//     }
//   }

//   console.log(sum(2,3));
  
  
//   console.log(sum(2)(3));

let str = "afjghdfraaaasdenas";

function getChar(str) {
    let obj = {};
    //遍历字符串，将出现的字符存入到数组中
    for (let i = 0; i < str.length; i++) {
        if (!obj[str.charAt(i)]) {
            obj[str.charAt(i)] = 1;
        } else {
            obj[str.charAt(i)]++;
        }
    }
    let max = 0;
    let charmax;
    //遍历数组，找出出现最多的字母出现的次数
    for (let key in obj) {
        if (obj[key] > max) {
            max = obj[key];
            charmax = key;
        }
    }
    return charmax;
}

console.log(getChar(str));