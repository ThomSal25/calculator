// Ansatz Taschenrechner
let result = 0;

function init(num) {
  result = num;
  print();
}

function add(num) {
  // result = result + num;
  result += num;
  print();
}

function sub(num) {
  // result = result - num;
  result -= num;
  print();
}

function divide(num) {
  // result = result / num;
  result /= num;
  print();
}

function multiply(num) {
  // result = result * num;
  result *= num;
  print();
}

function reset() {
  result = 0;
  print();
}

function print() {
  console.log(result);
}

print();
init(5);
add(5);
add(6);
add(6);
sub(2);
add(5);
multiply(2);
divide(5);
reset();