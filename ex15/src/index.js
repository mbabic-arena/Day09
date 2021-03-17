// Only change code below this line
function myDoWhile() {
  var i = 0;
  myNumbers = "";
  do {
    myNumbers += i + ", ";
    console.log(i);
    console.log(myNumbers.length);
    console.log(myNumbers);
    i++;
  } while (i < 11);
}
myDoWhile();

console.log(myDoWhile());
// Only change code above this line
module.exports = myDoWhile;
