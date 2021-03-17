// Only change code below this line
function comparsionToEqual(a) {
  if (a < 5) {
    return "Less than 5";
  }
  if (a < 10) {
    return "Less than 10";
  }
  if (a > 20) {
    return "More than 20";
  }
  if (a > 10) {
    return "10 or over";
  }
}

comparsionToEqual(8);

console.log(comparsionToEqual(0));
console.log(comparsionToEqual(5));
console.log(comparsionToEqual(17));
console.log(comparsionToEqual(21));

// Only change code above this line
module.exports = comparsionToEqual;
