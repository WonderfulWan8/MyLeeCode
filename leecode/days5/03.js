/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    let str = nums.toString();

    let newNums = [];
    for(let i=0,j=0; i<nums.length; i++){
        if(str.indexOf(nums[i]) != str.lastIndexOf(nums[i])){
            if(newNums.indexOf( nums[i] )  === -1){
                newNums[j++] = nums[i];
            }
        }
    }
    let num = Math.floor(Math.random() * newNums.length + 0);//生产随机数
    return newNums[num];
};