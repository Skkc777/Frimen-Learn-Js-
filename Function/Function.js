// let dogName = ['rover', 'spot', 'spike', 'lady'],
//     dogWeight = [23, 13, 53, 17];


// dogName.forEach((weight, i) => {
//     let full = dogName.map(function (value, index) {
//         return value + dogWeight[index];
//     });

//     weight = dogWeight[i];
//     if (weight > 20) {
//         console.log(Object.keys(full) + ': WOOF WOOF');
//     } else {
//         console.log(Object.keys(full) + ': woof woof');
//     }
// });

// function bark( name, weight) {
//     if(weight > 20) {
//         console.log(`${name}: WOOF WOOF`);
//     } else {
//     console.log(`${name}: woof woof`);
// }
// }

// bark('rover', 23);
// bark('spot', 13);
// bark('spike', 53);
// bark('lady', 17);
// bark("juno", 20); //mal
// bark("scottie", -1); //mal
// bark("dino", 0, 0); //mal нет третьего аргумента и он не отображается
// bark("fido", "20"); // расскрывает скобки и переводит в числовое значение
// bark("lady", 10); // mal
// bark("bruno", 21); // big


function whatShallWear(temperature) {
    if(temperature < 60) {
        console.log("Wear a jacket");
    } else if(temperature < 70) {
        console.log("Wear t-shirt");
    } else {
        
        console.log("Wear a sweater");
    }
}
whatShallWear(50);
whatShallWear(60);
whatShallWear(70);


// function doIt(param) {
//     param = 2;
//    }
//    var test = 1;
//    doIt(test);
//    console.log(test);


// function speak(kind) {
//     var defaultSound = "";
//     if (kind == "dog") {
//     alert("Woof");
//     } else if (kind == "cat") {
//     alert("Meow");
//     } else {
//     alert(defaultSound);
//     }
//    }
//    var pet = prompt("Enter a type of pet: ");
//    speak(pet);

var avatar;
var levelThreshold = 1000;

// function getScore(points) {
//     var score;
//     var i = 0;
//     while (i < levelThreshold) {
//     //Код
//     i = i + 1;
//   }
    
//     return score;
//    }

//    console.log(avatar);


// function playTurn(player, location) {
//      points = 0;
//     if (location == 1) {
//     points = points + 100;
//     }
//     return points;
//    }
//    var total = playTurn("Jai", 1);
//    alert(points);


// var x = 32;
// var y = 44;
// var radius = 5;          
// var centerX = 0;
// var centerY = 0;
// var width = 600;
// var height = 400;     ///----- global lvl
// function setup(width, height) {
//  centerX = width/2;
//  centerY = height/2;
// }
// function computeDistance(x1, y1, x2, y2) {
//  var dx = x1 - x2;
//  var dy = y1 - y2;
//  var d2 = (dx * dx) + (dy * dy);
//  var d = Math.sqrt(d2);
//  return d;
// }
// function circleArea(r) {
//  var area = Math.PI * r * r;
//  return area;
// }
// setup(width, height);
// var area = circleArea(radius);
// var distance = computeDistance(x, y, centerX, centerY);
// alert("Area: " + area);
// alert("Distance: " + distance);


function clunk(times) { // times = facky facky = 1; // вывод clunk
    var num = times;
    while (num > 0) {  // 1 > 0
    display("clunk"); // used 
    num = num - 1; // num = 1 - 1; = 0//
    }
   }
   function thingamajig(size) { // size = 5; //
    var facky = 1; // 
    clunkCounter = 0; // global and now = 1;
    if (size == 0) { // false
    display("clank");
    } else if (size == 1) { // false
    display("thunk");
    } else { // true 
    while (size > 1) {
    facky = facky * size; // 1*5 = 5 & 5 -1 = 4;3,2,1,0
    size = size - 1;
    }
    clunk(facky);
    }
   }
   function display(output) { //output = 'clunk'
    console.log(output);
    clunkCounter = clunkCounter + 1; // clunkcounter = 0 + 1; 
   }
   var clunkCounter = 0;
   thingamajig(5);
   console.log(clunkCounter);
