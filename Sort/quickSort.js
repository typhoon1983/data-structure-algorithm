//quick sort BigO(nlog(n)); unstable sort, less memory than merge sort. often faster. worst case sqrt(n) with sorted list and last value as pivot.

export default function quickSort(nums){
  if(nums.length <= 1){ return nums;}
  let left = [], right = [], pivot = nums.pop();
  nums.forEach((val)=>{
    if(val < pivot){
      left.push(val);
    }
    else{
      right.push(val);
    }
  })
  return [...quickSort(left), pivot, ...quickSort(right)];
}


//quick sort 3
//[1,2,3,4,5] pick 3(middle) as pivot
