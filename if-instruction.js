/*IF Exercises*/
// Ex 1: compare function

function compare(x, y) {
  if (x > y) {
    return true;
  } else {
    return false;
  }
}

function biggerThan10(x, y) {
  if (x - y > 10) {
    return true;
  } else {
    return false;
  }
}
// console.log(biggerThan10(10, 5));

function medianCompare(a, b, c) {
  if ((a + b) / 2 > c) {
    return true;
  } else {
    return false;
  }
}

// console.log(medianCompare(10,22,11));

function clearRest(a, b, c, d) {
  if ((a + b) % (c + d) === 0) {
    return true;
  } else {
    return false;
  }
}
// console.log(clearRest(2,6,2,2));

function identity(a) {
  return (identity = a);
}
// console.log(identity(5));

function hello() {
  console.log("Hello world");
}
hello();
