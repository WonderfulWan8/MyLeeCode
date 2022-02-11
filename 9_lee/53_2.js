// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，
// 并且每个数字都在范围0～n-1之内。
// 在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，
// 请找出这个数字。

// 示例 1:
// 输入: [0,1,3]
// 输出: 2

// 示例 2:
// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8
/**
 * @param {number[]} nums
 * @return {number}
 */
var nums = [0,1,3];
var nums2 = [0,1,2,3,4,5,6,7,9];
var nums3 = [1];
var nums4 = [1,2];
var nums5 = [0,1];


var missingNumber = function(nums) {
    if(nums.length == 1){
        if(nums[0] == 0){
            return 1;
        }
        return 0;
    }else{
        for(let i = 0; i < nums.length; i++){
            
            if(nums[0] == 0){
                if(nums[i+1] != (nums[i]+1)){
                    return (nums[i]+1);
                }
            }else{
                if(i == nums.length - 1){
                    return 0;
                }
            }
        
            
            // if(nums[i+1] != (nums[i]+1)){
            //     return (nums[i]+1);
            // }
        }
    }
};

console.log(missingNumber(nums));
console.log(missingNumber(nums2));
console.log(missingNumber(nums3));
console.log(missingNumber(nums4));
console.log(missingNumber(nums5));

