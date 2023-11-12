//second largest element
let array = [1,2,3,4,5,5,43,4];
let sorted = array.sort((a,b)=> b-a).filter((a,b)=> array.indexOf(a)==b);
console.log(sorted[1]);


//sort takes 2 argument if a-b is negative it means b is bigger then it swap if value is 0 then they dont
//filter takes 3 arguments :curent element,curent index,current array
//indexOf gives current elements first occurance index number
//reduce takes 4 arguments in its callback function which are in order accumulator (acc),curent value (cur),curent index(inx),current array(src)
//method chainign in js is from left to right eg: array.sort(something).array.filter(somehing...)
//writing multiple functions in a line is method chaning 