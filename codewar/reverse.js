function reverseWords(str) {
    let words = str.split(' ')
    return words.map((cur)=> cur.split('').reverse().join(''))
  }
  console.log(reverseWords("hi i am jeevan"))