/**
 * 394.Decode String「字符串解码」
 * 题目地址: https://leetcode-cn.com/problems/decode-string/
 * */

 const decodeString = s => {
  let stack = [];

  for(let c of s){
    if(c === ']'){
      let repeatStr = '';
      let repeatCnt = '';

      while(stack.length > 0 && stack[stack.length - 1] != '['){
        repeatStr = stack.pop() + repeatStr;
      }
      stack.pop();
      while(stack.length > 0 && !isNaN(stack[stack.length - 1])){
        repeatCnt = stack.pop() + repeatCnt;
      }
      stack.push(repeatStr.repeat(repeatCnt));
    }else{
      stack.push(c);
    }
  }
  return stack.join('');
}

//Example
console.log(decodeString('a2[b2[c]]'));