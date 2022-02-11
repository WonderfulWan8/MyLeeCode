// 找出数组中重复的数字。
// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。
// 数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。
// 请找出数组中任意一个重复的数字。



let nums1 = [0, 11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let str = nums1.toString();
console.log(str);
console.log(str.lastIndexOf('0'));

// var findRepeatNumber1 = function(nums) {

//     // console.log(nums.indexOf(0));
//     // console.log(nums.lastIndexOf(0));

//     let str = nums.toString();

//     let newNums = [];
//     for(let i=0,j=0; i<nums.length; i++){
//         if(str.indexOf(nums[i]) !==  str.lastIndexOf(nums[i])){
//             if(  str.lastIndexOf(nums[i]) < str.length){
//                 console.log(nums[i]);
//                 console.log(str.indexOf(nums[i]));
//                 console.log(str.lastIndexOf(nums[i]));
//                 console.log("--------------------------");

//                 // 判断新数组内是否已存在
//                 if(newNums.indexOf( nums[i] )  === -1){
//                     newNums[j++] = nums[i];
//                 }
//             }
            
//         }
//         // if( str.indexOf(nums[i])!= -1  || str.lastIndexOf(nums[i])!=-1 ){
            
//         // }
//     }
//     console.log(newNums);
//     let num = Math.floor(Math.random() * newNums.length + 0);//生产随机数
//     return newNums[num];
// };
// console.log(findRepeatNumber1(nums1));

// var findRepeatNumber2 = function(nums){
//  let myMap = new Map();
//  for(let i = 0; i < nums.length; i++){
//     //  map里面没有的时候，push
//     if( !(myMap.has(nums[i])) ){
//         myMap.set(nums[i],nums[i]);
//     }
//  }
//  let num = Math.floor(Math.random() * myMap.size + 0);//生产随机数
// //  console.log(nums[num]);
// //  console.table(myMap);
//  return myMap.get(nums[num]);
// }
// console.log(findRepeatNumber2(nums1));

var findRepeatNumber3 = function(nums){
    let map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if(map.has(num)) return num//仅使用key做判断
        map.set(num, 1)
    }
    return null
}
console.log(findRepeatNumber3(nums1));

