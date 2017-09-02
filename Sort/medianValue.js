//Median Values of two sorted arrays

export default (A, B) => {
  let targetIndex = Math.floor((A.length + B.length) / 2);
  let currentIndex = -1;
  let pointerA = 0, pointerB = 0;

  while(pointerA < A.length && pointerB < B.length){
    if(A[pointerA] < B[pointerB]){
      currentIndex++;
      if(currentIndex === targetIndex){
        return A[pointerA];
      }
      else{
        pointerA++;
      }
    }
    else{
      currentIndex++;
      if(currentIndex === targetIndex){
        return B[pointerB];
      }
      else{
        pointerB++;
      }
    }
  }
  while(pointerA < A.length){
    currentIndex++;
    if(currentIndex === targetIndex){
      return A[pointerA];
    }
    else{
      pointerA++;
    }
  }
  while(pointerB < B.length){
    currentIndex++;
    if(currentIndex === targetIndex){
      return B[pointerB];
    }
    else{
      pointerB++;
    }
  }
}
