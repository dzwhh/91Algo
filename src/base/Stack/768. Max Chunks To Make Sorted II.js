/**
 * 768. Max Chunks To Make Sorted II
 * 单调递增栈
 */

 const maxChunksToSorted = arr => {
  const stack = [];

  for(let i = 0; i < arr.length; i++){
    if(stack.length === 0 || stack[stack.length - 1] <= arr[i]){
      stack.push(arr[i]);
    }
    else {
      const maxTemp = stack.pop();
      while(stack[stack.length - 1] > arr[i]){
        stack.pop();
      }
      stack.push(maxTemp);
    }
  }
  return stack.length;
};
arr = [1,4,3,5,6,7]
console.log(maxChunksToSorted(arr));