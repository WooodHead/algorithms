/*
 * Difficulty:
 * Hard
 *
 * Desc:
 * Merge k sorted linked lists and return it as one sorted list.
 * Analyze and describe its complexity.
 *
 * 将 k 个已排好序的链表合并。注意优化其复杂度
 */

/*
 * 思路：
 * 算法和 21 题 merge two sorted lists 一致
 * 除此以外还有一种方法：
 * 即一开始就将所有链表的第一个元素放入最小堆中，每次从最小堆中取出最小值，
 * 将其添加到答案的最后，并将其所属链表的下一个元素加入到最小堆当中
 *
 * 或者还有比较偷鸡的办法，就是每次从 lists 中 pop 两个队列，然后进行 two lists merge
 * 甚至可以依一次 pop 更多的队列，使复杂度进一步降低
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  var result = new ListNode();
  var current = result;

  while(l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  if (l1) {
    current.next = l1;
  } else if (l2) {
    current.next = l2;
  }
  return result.next;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  if (lists.length === 0) return [];
  if (lists.length === 1) return lists[0];
  var result = [lists[0]];

  for (var i = 1; i < lists.length; i += 1) {
    result = [mergeTwoLists(result[0], lists[i])];
  }
  return result[0];
};
