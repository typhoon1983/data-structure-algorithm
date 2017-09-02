// bubble sort BigO((n)2)

export default (nums) => {
  do{
    var swapped = false;
    for(var i = 0; i < nums.length - 1; i++){
      if(nums[i] > nums[i+1]){
        var temp = nums[i];
        nums[i] = nums[i+1];
        nums[i+1] = temp;
        swapped = true;
      }
    }
  }
  while(swapped)
  return nums;
}
