/**
 * @param {number} maxSize
 */
 var CustomStack = function(maxSize) {
  this.stack = new Array(maxSize);
  this.top = 0;
};

/** 
* @param {number} x
* @return {void}
*/
CustomStack.prototype.push = function(x) {
  if (this.top === this.stack.length)
      return;
  else   
      this.stack[this.top++] = x;
};

/**
* @return {number}
*/
CustomStack.prototype.pop = function() {
  if (this.top === 0)
    return -1
  return this.stack[--this.top];
  
};

/** 
* @param {number} k 
* @param {number} val
* @return {void}
*/
CustomStack.prototype.increment = function(k, val) {
  let len = Math.min(k,this.top)
  for(let i = 0; i < len; i++){
      this.stack[i] += val
  }
};

// Example
stack = new CustomStack();
stack.push(1);
stack.push(2);
console.log(stack)