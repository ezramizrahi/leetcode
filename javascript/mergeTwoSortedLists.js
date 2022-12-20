/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  You are given the heads of two sorted linked lists list1 and list2.

//  Merge the two lists in a one sorted list. 
//  The list should be made by splicing together the nodes of the first two lists.
 
//  Return the head of the merged linked list.

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
    if (list1 == null) return list2;
    if (list2 == null) return list1;

    // If list1 is lower
    if (list1.val < list2.val) {
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    }
    // If same or list2 is lower
    else {
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
    }
};