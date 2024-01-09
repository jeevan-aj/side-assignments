var mergeTwoLists = function(list1, list2) {
    let newArray = []
    let fullLength
    // if(list1.length>list2.length){
    //     fullLength = list1.length
    // }
    // else{
    //     fullLength = list2.length
    // }
    fullLength = list1.length
    for(let i = 0;i<fullLength;i++){
        newArray.push(list1[i],list2[i])
    }
    return newArray
};
console.log(mergeTwoLists([1,2,3],[4,4,5,6]))