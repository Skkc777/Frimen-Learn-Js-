// const dog = {
//     name: 'Fido',
//     weight: 20.2,
//     age: 4,
//     breed: 'смешанный',
//     activity: 'fetch balls'

// };
// let bark;

// if (dog.weight > 20) {
//     bark = 'WOOF WOOF';
// } else {
//     bark = 'woof woof';
// }

// const speakDog = `${dog.name} says ${bark} when he wants to ${dog.activity}`;
// console.log(speakDog);


// const taxi = {
//     make: "Webville Motors",
//     model: "Taxi",
//     year: 1955,
//     color: "yellow",
//     passengers: 4,
//     convertible: false,
//     mileage: 281341
// };

// const ferrarri = {
//     make: "Italy Motors",
//     model: "355fx turbo",
//     year: 2014,
//     color: "red",
//     passengers: 2,
//     convertible: false,
//     mileage: 1230
// };

// function prov(car) {
//     if( car.year < 1965 && car.mileage > 10000) {
//         return false;
//     } else {
//         return true;
//     }
// }
// function prov(car) {
//     if (car.mileage > 10000) {
//         return false;
//     } else if (car.year > 1965) {
//         return true;
//     } else {
//         return true;
//     }
// }



// prov(taxi);
// prov(ferrarri);

// console.log(prov(taxi));
// console.log(prov(ferrarri));




// function getSecret(file, secretPassword) {
//     file.opened = file.opened + 1;
//     if (secretPassword == file.password) {
//         return file.contents;
//     } else {
//         return "Invalid password! No secret for you.";
//     }
// }

// function setSecret(file, secretPassword, secret) {
//     if (secretPassword == file.password) {
//         file.opened = 0;
//         file.contents = secret;
//     }
// }
// var superSecretFile = {
//     level: "classified",
//     opened: 0,
//     password: 2,
//     contents: "Dr. Evel's next meeting is in Detroit."
// };
// var secret = getSecret(superSecretFile, 2);
// console.log(secret);
// setSecret(superSecretFile, superSecretFile.password, "Dr. Evel's next meeting is in Philadelphia.");
// secret = getSecret(superSecretFile, 2);
// console.log(secret);

function makeCar() {

    const makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    const models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    const years = [1955, 1957, 1948, 1954, 1961];
    const colors = ["red", "blue", "tan", "yellow", "white"];
    const convertible = [true, false];

    const rand1 = Math.floor(Math.random() * makes.length);
    const rand2 = Math.floor(Math.random() * models.length);
    const rand3 = Math.floor(Math.random() * years.length);
    const rand4 = Math.floor(Math.random() * colors.length);
    const rand5 = Math.floor(Math.random() * 5) + 1;
    const rand6 = Math.floor(Math.random() * 2);

    const car = {
        make: makes[rand1],
        model: models[rand2],
        year: years[rand3],
        color: colors[rand4],
        passengers: rand5,
        convertible: convertible[rand6],
        mileage: 0
    };
    return car;
}



function displayCar(car) {
    console.log(`Your new car is a ${car.year} ${car.make} ${car.model}`);
}

let carNew = makeCar();
displayCar(carNew);



const fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000,
    started: false,
    start: function () {
        this.started = true;
    },
    stop: function () {
        this.started = false;
    },
    drive: function () {
        if (this.started) {
            console.log("Zoom zoom!");
        } else {
            console.log('Check oil on the ur motor');
        }
    }
};

fiat.drive();
fiat.start();
fiat.drive();
fiat.stop();


var song = {
    name: "Walk This Way",
    artist: "Run-D.M.C.",
    minutes: 4,
    seconds: 3,
    genre: "80s",
    playing: false,
    play: function() {
        this.playing = true;
    if (this.playing) {
    console.log("Playing " +  this.name + " by " + this.artist);
    }
    },
    pause: function() {
    if (this.playing) {
    this.playing = false;
    }
    }
   };
   song.play();
   song.pause();


   var eightBall = { index: 0,
    advice: ["yes", "no", "maybe", "not a chance"],
    shake: function() {
    this.index = eightBall.index + 1;
    if (this.index >= eightBall.advice.length) {
        this.index = 0;
    }
    },
    look: function() {
    return this.advice[this.index];
    }
   };
   eightBall.shake();
   console.log(eightBall.look());


var dog = {
    name: 'Fido',
    weight: 20.2,
    age: 4,
    breed: 'mixed',
    activity: 'fetch balls'

};
var bark;


if (dog.weight > 20) {
    bark = 'Woof WOOF';

} else {
    bark = 'woof woof';
}

var speak = `${dog.name} says ${bark} when he wants to ${dog.activity} `;

console.log(speak);









