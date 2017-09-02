//merge sort BigO(nlog(n)); stable sort

export default function mergeSort(nums){
  if(nums.length <= 1){ return nums;}
  let left = mergeSort(nums.slice(0, Math.floor(nums.length / 2)))
  let right = mergeSort(nums.slice(Math.floor(nums.length / 2), nums.length))
  nums = [];
  while(left.length > 0 && right.length > 0){
    if(left[0] < right[0]){
      nums.push(left.shift());
    }
    else{
      nums.push(right.shift());
    }
  }
  return [...nums, ...left, ...right];
}
