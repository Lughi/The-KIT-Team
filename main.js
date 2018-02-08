var pag1 = 1;

var name = "Lucien";
var age = 27;
var phoneNumber = "078268773827";
var married = false; //boolean
var coder = true;

// alert("Hello! My name is " + name + " and I am " + age + " years old!!!");

// Weird #2

var x = undefined;
var y = null;

// alert(t  sypeof x);

//  Weird #3

// typeof x; //undefined

var myCar = {
    color: 'red',
    price: 5000,
    speed: '400 km/h'
};

myCar.name = 'logan';
// console.log(myCar);

var empty = {};
empty.laptop = 'alb';

var pointA = {
    x: 0,
    y: 1
}

var pointB = {
    x: 10,
    y: 11
}

// var distance = Math.sqrt((pointB.x - pointA.x) * (pointB.x - pointA.x) + (pointB.y - pointA.y) * (pointB.y - pointA.y));
// console.log(distance);

// shows which p's from the function

console.log(getDistance(pointA, pointB));

function getDistance(p1, p2) {
    console.log ('De la tibi se stie!');
    return Math.sqrt((p2.x - p1.x) * (p2.x - p1.x) + (p2.y - p1.y) * (p2.y - p1.y));
};