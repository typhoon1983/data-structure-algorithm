//insertion sort BigO((n)2);

export default (nums) => {
  let temp;
  for(var i = 1; i < nums.length; i++){
    for(var j = 0; j < i; j++){
      if(nums[i] < nums[j]){
        temp = nums.splice(i,1);
        nums.splice(j,0,temp[0]);
        break;
      }
    }
  }
  return nums;
}
