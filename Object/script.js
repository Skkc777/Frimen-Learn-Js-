const dog = {
    name: 'Fido',
    weight: 20.2,
    age: 4,
    breed: 'смешанный',
    activity: 'fetch balls'

};
let bark;

if (dog.weight > 20) {
    bark = 'WOOF WOOF';
} else {
    bark = 'woof woof';
}

const speakDog = `${dog.name} says ${bark} when he wants to ${dog.activity}`;
console.log(speakDog);


const taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
};

const ferrarri = {
    make: "Italy Motors",
    model: "355fx turbo",
    year: 2014,
    color: "red",
    passengers: 2,
    convertible: false,
    mileage: 1230
};

// function prov(car) {
//     if( car.year < 1965 && car.mileage > 10000) {
//         return false;
//     } else {
//         return true;
//     }
// }
function prov(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1965) {
        return true;
    } else {
        return true;
    }
}



prov(taxi);
prov(ferrarri);

console.log(prov(taxi));
console.log(prov(ferrarri));




   function getSecret(file, secretPassword) {
    file.opened = file.opened + 1;
    if (secretPassword == file.password) {
    return file.contents;
    }
    else {
    return "Invalid password! No secret for you.";
    }
   }
   function setSecret(file, secretPassword, secret) {
    if (secretPassword == file.password) {
        file.opened = 0;
        file.contents = secret;
    }
   }
   var superSecretFile = {
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit."
   };
   var secret = getSecret(superSecretFile, 2);
   console.log(secret);
   setSecret(superSecretFile, superSecretFile.password , "Dr. Evel's next meeting is in Philadelphia.");
   secret = getSecret(superSecretFile, 2);
   console.log(secret);