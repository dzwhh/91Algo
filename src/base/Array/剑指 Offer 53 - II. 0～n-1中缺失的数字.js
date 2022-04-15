const missingNumber = arr => {
  if (arr[0] === 1) 
    return 0
  for(let i = 0; i < arr.length; i++) {
    if (i != arr[i])
      return i;
  }
  return arr.length;
};

console.log(missingNumber([0,1,3,4,5]))