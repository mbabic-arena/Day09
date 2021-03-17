function inverseWhile() {
  var i = 5;
  var fiveNumbers = "";

  while (i >= 0) {
    fiveNumbers += i + ",";
    console.log(i);
    console.log(fiveNumbers);
    i--;
  }
  return fiveNumbers;
}

// Only change code above this line
console.log(inverseWhile());
module.exports = inverseWhile;
