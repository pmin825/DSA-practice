// const reverseList = (head) => {
//     let prev = null;
//     while (head) {
//         const next = head.next;
//         const curr = head;
//         curr.next = prev;
//         head = next;
//         prev = curr;
//     }

//     return prev;
// };

function reverseLinkedList(head) {
	let node = head;
	const values = [];
	while (node.next !== null) {
		values.push(node);
		node = node.next;
	}
	head = node;
	while (values.length) {
		node.next = values.pop();
		node = node.next;
	}
	node.next = null;
	return head;
}