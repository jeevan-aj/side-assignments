// String.prototype.toJadenCase = function (text) {
//   let newArray = this.split(" ");
//   let newString = newArray
//     .map((cur, idx) => {
//       return cur.charAt(0).toUpperCase() + cur.slice(1);
//     })
//     .join(" ");

//   return newString;
// };

// let text = "hello how are you";
// let jadenString = text.toJadenCase();
// console.log(jadenString);

function isSenior(data) {
  return data.map(([age, handicap]) =>
    age >= 55 && handicap > 7 ? "Senior" : "Open"
  );
}

console.log(
  isSenior([
    [45, 12],
    [55, 21],
    [19, -2],
    [104, 20],
  ])
);

