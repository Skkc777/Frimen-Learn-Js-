let location1 = Math.floor(Math.random() * 7);
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;

let hits = 0;

let guesses = 0;

let isSunk = false;



while (isSunk == false) {
    guess = prompt('Znachenie 0-6');

    if (guess < 0 || guess > 6 || guess == '' || guess == undefined) {
        alert('Vvedite korrektnoe znach!');
    } else {
        guesses++;

    }
    if (guess == location1 || guess == location2 || guess == location3) {
        alert('Hit!');
        hits++;
    } else {
            alert('Miss!');
}
        if (hits == 3) {
            isSunk = true;
            alert('You won!');
            alert(`Ваша точность равна: ${hits / guesses}`);
         
  }
    
}
























// for ( hits = 0;hits < 3; hits++) {

//     guess = +prompt('Vvedite znachenie ot 0-6', '');
//       guesses++;

//     if (hits == location1 || hits == location2 || hits == location3) {

//         alert('Hit!');
//     } else {
//         alert('Mimo!');
//     }
//     if (hits >= 3) {
//         isSunk = true;
//         alert(`Точность вашего попадания равна ${guesses / hits}`);
//         } else {


//  }
// }






// while ( hits < 3) {
//      guess = +prompt('znach');


//     if (guess < 7) {
//         guesses++;

//         if(hits == location1 || hits == location2 || hits == location3) {
//             alert('hit!');
//             hits++;
//             guesses++;

//         } if (hits == 3) {
//             isSunk = true;
//         }

//         } else {
//            alert('vvedite znachenie cifroi ili menishe 7!');
//         }
// }




















//    +prompt('Введите значение от 0-7');

//    if(hits == location1 || hits == location2 || hits == location3 && hits == 3) {
//         hits++;
//         guesses++;
//     } 

//     if (hits == 3) {
//         isSunk = true;
//         prompt(`Вы сбили корабль`);
//     } else {
//         guesses++;

//     }
// }