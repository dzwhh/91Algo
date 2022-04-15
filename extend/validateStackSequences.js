/**
 * 946.验证栈序列
 * 题目描述：给定 pushed 和 popped 两个序列，每个序列中的 值都不重复，
 * 只有当它们可能是在最初空栈上进行的推入 push 和弹出 pop 操作序列的结果时，返回 true；否则，返回 false 。
 * 示例：
 * 输入：pushed = [1,2,3,4,5], popped = [4,5,3,2,1]
 * 输出：true
 * 解释：我们可以按以下顺序执行：
 * push(1), push(2), push(3), push(4), pop() -> 4,
 * push(5), pop() -> 5, pop() -> 3, pop() -> 2, pop() -> 1
 * --------------------------------
 * 思路
 * 1. 循环把pushed数组元素压入栈中，同时当次循环压栈过程中判断栈顶元素是否和popped的元素一致，如果一致就代表当前栈顶要出栈
 * 2. 然后循环判断出栈后为了判断下一个栈顶是否要出栈，同时当前popped出栈的指针向后挪一位，这部分循环的是popped的下一个出栈是否和下一个栈顶一致，一致代表持续出栈
 * 3. 如果没有一致，代表可能下一个元素是压栈操作，所以跳出栈顶元素判断循环，再次进入压栈循环，重复上面的步骤
 * 4. 代码实现上需要用到2个循环体
 * 复杂度分析
 * 因为并不是2层循环嵌套判断，而是O(n)复杂度判断
 */



const validateStackSequences =  (pushed,popped) => {
  const stack = [];
  let index = 0;
  const size = pushed.length;
  for (let i = 0; i < size; i++) {
    stack.push(pushed[i]);
    while(stack.length != 0 && index < size && stack[stack.length-1] === popped[index]){
      stack.pop();
      index++
    }
  }
  return index === size;
}



// Example
pushed = [1,2,3,4,5]
popped = [4,5,3,2,1]
console.log(validateStackSequences(pushed,popped))