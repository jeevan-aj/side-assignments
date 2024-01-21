var removeDuplicates = function(nums) {
    let uniqueCount = 1
     for(i=0;i<nums.length;i++){
         if(nums[i]!=nums[i+1]){
             nums[uniqueCount] = nums[i+1]
             uniqueCount++
         }
     }
     console.log(nums)
     return uniqueCount-1
     
 };

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))