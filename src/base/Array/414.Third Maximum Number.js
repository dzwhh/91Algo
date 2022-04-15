/**
 * 414. Third Maximum Number「第三大数」
 * 题目地址：https://leetcode-cn.com/problems/third-maximum-number/
*/ 


const thirdMax = (arr) => {
  let x = -Number.MAX_VALUE,
      y = -Number.MAX_VALUE,
      z = -Number.MAX_VALUE;
  for (let val of arr) {
    if (val > x) {
      z = y;
      y = x;
      x = val;
    } else if (x > val && val > y) {
      z = y;
      y = val;
    } else if (y > val && val > z) {
      z = val;
    }
  }
  return z === -Number.MAX_VALUE ? x : z;
};

// Example
console.log(thirdMax([3,2,2,1]))