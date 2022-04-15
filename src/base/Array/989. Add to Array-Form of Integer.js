/**
 * 989.Add to Array-Form of Integer「数组形式的整数加法」
*/

const addToArrayForm = (num, k) => {
  let res = [];
  let sum = 0;
  let carry = 0;
  let last = num.length - 1;

  while(last >= 0 || k != 0){
    let x = last >= 0 ? num[last] : 0;
    let y = k != 0 ? k % 10 : 0;

    sum = x + y + carry;
    res.push(sum % 10);
    last--;
    k = Math.floor(k / 10);
    carry = Math.floor(sum / 10);
  }

  if(carry === 1) 
    res.push(carry);

  return res.reverse();
}


//Example
console.log(addToArrayForm([1,2,2,7],34))