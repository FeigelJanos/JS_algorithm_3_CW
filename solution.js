function findOdd(A) {
  let sorted = {}
  let answer
  
  for (let i in A) {
    sorted[A[i]] = sorted[A[i]] ? ++sorted[A[i]] : 1
  }
  
  Object.entries(sorted).forEach(
    ([key, value]) => { 
      if (value % 2 != 0){
        answer = key
      } 
    }
  );

  return parseInt(answer)
  }
