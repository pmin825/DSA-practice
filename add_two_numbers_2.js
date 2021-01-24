var addTwoNumbers = function(l1, l2) {
  let l1String = '';
  let l2String = '';
  
  while (l1.next !== null) {
      l1String += l1.val.toString();
      if (l1.next !== null) {
          l1 = l1.next;
      }
  }
  l1String += l1.val.toString();
  
  while (l2.next !== null) {
      l2String += l2.val.toString();
      if (l2.next !== null) {
          l2 = l2.next;
      }   
  }
  l2String += l2.val.toString();
  
  let result = (parseInt(l1String) + parseInt(l2String)).toString().split('');
  let newList = new ListNode(0)
  
  let head = newList
  while (result.length > 0) {
      head.next = new ListNode(parseInt(result.shift()))
      head = head.next;
  }
  
  return newList.next
}

// this solution only works if the number is not too large, aka javascripts MAX_SAFE_INTEGER