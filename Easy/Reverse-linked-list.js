
 // Iterative solve;
 /*
var reverseList = function(head) {
    let [curr, prev, next] = [head, null, null];

    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next
    }

    return prev;
};
*/

// Recursive Solve
const reverseList = (head) => {
    // BaseCases
    if(!head?.next) return head;

    return dfs(head);
    //2
}

const dfs = (curr) => {
    //curr = 1
    // prev = 2
    //--
    // curr = 2
    // prev = 3
    const prev = reverseList(curr.next);

    //3 -> 1 // 2 -> 4
    curr.next.next = curr;
    // 2 -> null // 3 -> null
    curr.next = null;


    return prev;
    //return 2
    // return 3
}
