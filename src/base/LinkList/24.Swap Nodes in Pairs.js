/**
 * 24.Swap Nodes in Pairs
 * 链表节点两两交换
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const swapPairs = head => {
  if (head === null || head.next === null) 
    return head;

  let dummyNode = new ListNode(0,head);
  let prev = dummyNode, cur = head;

  while(cur !== null && cur.next != null){
    // 保存下一次反转节点指针
    let nextPair = cur.next.next 
    let second = cur.next;

    // 开始反转节点
    second.next = cur;
    cur.next = nextPair;
    prev.next = second;

    // 更新指针 prev -> B -> A -> C -> D 让prev 指向 A，原来的cur.next.next 变成了 cur
    prev = cur; 
    cur = nextPair;
  }

  return dummyNode.next;
}


// Example
head = [1,2,3,4];
console.log(swapPairs(head));