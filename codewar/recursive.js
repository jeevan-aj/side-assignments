function reverse(a){
   if(a==0||a==1){
    return 1
   }
   return a* reverse(a-1)
}

console.log(reverse(5))