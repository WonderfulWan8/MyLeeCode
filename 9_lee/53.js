// 统计一个数字在排序数组中出现的次数。

// 示例 1:
// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2

// 示例 2:
// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

let nums = [5,7,7,8,8,10], target = 8;
let nums2 = [5,7,7,8,8,10], target2 = 6
 
var search = function(nums, target) {
    // let myMap = new Map();
    // let numA = []; 
    let j=0;
    for( let i = 0; i < nums.length; i++ ){
        if(nums[i] == target){
            // numA.push(); 
            j++;
        }
    }
    return j;
};
console.log(search(nums,target));
console.log(search(nums2,target2));