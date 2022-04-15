/**
 * 142. Linked List Cycle II「环形链表 II」
 * 
 */
// 哈希表
 const detectCycle = head => {
  const visited = new Set();
  while(head != null){
    if(visited.has(head))
      return head;
    visited.add(head);
    head = head.next;
  }
  return null;
};

// 双指针
const detectCyclev2 = head => {
  if (head == null || head.next == null) 
  return null;
  let fast = (slow = head);
  do {
    if (fast != null && fast.next != null) {
      fast = fast.next.next;
    } else {
      fast = null;
    }
    slow = slow.next;
  } while (fast != slow);
  if (fast == null) return null;
  fast = head;
  while (fast != slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return fast;
};

