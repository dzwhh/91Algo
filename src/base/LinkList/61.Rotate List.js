/**
 * Rotate List「旋转链表」
 * 题目地址: https://leetcode-cn.com/problems/rotate-list/
 */

 const rotateRight = (head, k) => {
  if(head === null) return head;

  let len = 0,last = head;

  while(last){
    last = last.next;
    len++;
  }

  k = k % len;

  let slow = (fast = head);

  for(let i = 0; i < k; i++){
    fast = fast.next;
  }

  while(fast.next != null){
    fast = fast.next;
    slow = slow.next;
  }

  fast.next = head;
  head = slow.next;
  slow.next = null

  return head;
};