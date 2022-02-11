// 剑指 Offer 11. 旋转数组的最小数字
// 把一个数组最开始的若干个元素搬到数组的末尾，
// 我们称之为数组的旋转。

// 给你一个可能存在 重复 元素值的数组 numbers ，
// 它原来是一个升序排列的数组，并按上述情形进行了一次旋转。
// 请返回旋转数组的最小元素。
// 例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，
// 该数组的最小值为1。  

// 示例 1：
// 输入：[3,4,5,1,2]
// 输出：1

// 示例 2：
// 输入：[2,2,2,0,1]
// 输出：0


/**
 * @param {number[]} numbers
 * @return {number}
 */

let numbers1 = [3,4,5,1,2];
let numbers2 = [2,2,2,0,1];
let numbers3 = [1,3,5];

var minArray = function(numbers) {
    let temp = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        for(let j = i+1; j < numbers.length; j++){
            if( numbers[i] > numbers[j]){
                temp = numbers[i];
                numbers[i] = numbers[j];
                numbers[j] = temp;
            }
        }
    }
    return numbers[0];
};
console.log(minArray(numbers1));
console.log(minArray(numbers2));
console.log(minArray(numbers3));
