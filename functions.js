console.log("Functions-trials");

// Ex 1

function log(a) {
  console.log(a);
}
log(1);

// Ex 2

function identity(a) {
  return a;
}
console.log(identity(2));

// Ex 3
log(identity(7));

// Ex 4

function sum(a, b) {
  return a + b;
}
log(sum(1, 4));

// Ex 5

function double(a) {
  return a * 2;
}
log(double(4));

// Ex 6

var nr = 4;

log(double(double(nr)));

// Ex 7

var nr1 = 4;
var nr2 = 7;

log(double(sum(nr1, nr2)));

// Ex 8

log(
  sum(
    sum(nr2, nr2),

    sum(nr2, nr2)
  )
);

// Ex 9

function mul(nr1, nr2) {
  return nr1 * nr2;
}
log(mul(2, 9));

// Ex 10

function aprox15(a) {
  if (a > 0) {
    return 15;
  } else {
    return -15;
  }
}
log(aprox15(10));

// Ex 11

function aprox15F(a, b) {
  if (a > 0) {
    return b;
  } else {
    return -b;
  }
}

log(aprox15F(1, -100));

function aproxF(a, b) {
  if (a < 0) {
    if (b < 0) {
      return b;
    } else {
      return -b;
    }
  }
  if (a > 0) {
    if (b > 0) {
      return b;
    } else {
      return -b;
    }
  }
}

log(aproxF(-1, -100));

// solutia 2

function aproxF(a, b) {
    var bMin = b,
        bMax = b;

    if ( b < 0 ) {
        bMax = -b;
    }
    else {
        bMin = -b;
    }
    
    if (a > 0 ) {
        return bMax;
    }
    else {
        return bMin;
    }
}
log(aproxF(1,-100));
