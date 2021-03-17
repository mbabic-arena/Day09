// Only change code below this line
function myForLoop1() {
  var evenNumbers = "";

  for (var i = 0; i < 10; i++) {
    console.log(evenNumbers);
  }
}

function myForLoop2() {
  var evenInverseNumbers = "";

  for (var i = 10; i > 0; i--) {
    console.log(evenInverseNumbers);
  }
}
myForLoop1();
myForLoop2();
console.log(myForLoop1());
console.log(myForLoop2());
// Only change code above this line
module.exports = {
  myForLoop1,
  myForLoop2,
};
