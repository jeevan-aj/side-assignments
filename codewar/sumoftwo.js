var twoSum = function(nums, target) {
    let i,j;
    for(i=0;i<nums.length;i++){
        let diff = target-nums[i]
        if(nums.includes(diff)){
            return [nums.indexOf(diff),i]
        }
    }
    return "cannot find"
};

console.log(twoSum([2,7,11,15],18))