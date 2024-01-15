class Node{
    constructor(val = 0,next= null){
    this.val = val 
    this.next = next    
    }
}

function mergeTwoLinkedList(list1,list2){
    let dummy = new ListNode()
    let current =  dummy

    while(list1!==null && list2!==null){
        if(list1.val<list2.val){
            current.next = list1
            list1 = list1.next
        }
        else{
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    if(list1!== null){
        current.next = list1
    }
    else{
        current.next = list2
    }

    return dummy.next
}




  // Create a dummy node to simplify the code
  const dummy = new ListNode();
  let current = dummy;

  // Traverse both lists and merge them
  while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
          current.next = list1;
          list1 = list1.next;
      } else {
          current.next = list2;
          list2 = list2.next;
      }
      current = current.next;
  }

  // If one of the lists is not fully traversed, append the remaining nodes
  if (list1 !== null) {
      current.next = list1;
  } else {
      current.next = list2;
  }

  // The merged list starts from the next of the dummy node
  return dummy.next;