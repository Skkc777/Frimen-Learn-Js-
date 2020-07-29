// let words1 = ["Я", "Ты", "Он", "Мы", "Они"],
//     words2 = ["ушли", "пришли", "зашли", "покурили", "вернулись"],
//     words3 = ["домой", "в гости", "на улицу", "в кино", "в зоопарк"];

//     function makePhrase() {
//     let phrase1 = Math.floor(Math.random() * words1.length),
//       phrase2 = Math.floor(Math.random() * words2.length),
//       pharse3 = Math.floor(Math.random() * words3.length);

//       alert(`${words1[phrase1]} ${words2[phrase2]} ${words3[pharse3]}`);
//     }
//     makePhrase();


// const scores = [60, 50, 60, 58, 54, 54,
//     58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51,
//     69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18,
//     41, 53, 55, 61, 51, 44, 108
// ];

//  const howMuch = scores.length;
// let maxNumArr = getMax(scores).keys;

// scores.forEach((item, index) => {
//         console.log(`Bubble solution #${index}: ${item};    `);
//      });


//      function getMax(scores, index) {

//         return Math.max.apply(null, scores);
//    }




// console.log(`Количество тестов = ${howMuch};`);
// console.log(`Максимальное значение равно: ${getMax(scores)};    `);
// console.log(`Номер максимального эксперимента равен: ${maxNumArr}`);


const scores = [60, 50, 60, 58, 54,
    58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51,
    69, 64, 66, 55, 52, 61,
    46, 31, 57, 52, 44, 18, 23,
    41, 53, 55, 61, 51, 44
];
// let highScore = 0;
// let highScoreNumber = [];
// let numberHighSort = [];

// scores.forEach((item, index) => {
//     for (let i = 0; i < scores.length; i++) {
//         if (scores[i] > highScore) {
//             highScore = scores[i];
//             numberHighSort = scores.sort((a, b) => b - a);
//         }
//     }
//     console.log(`Bubble solution #${index}: ${item};`);
// });

// for (let i = 0; i < scores.length; i++) {
//     if (scores[i] == highScore) {
//         highScoreNumber.push(i);
//     }
// }
// console.log(`Количество тестов: ${scores.length}`);
// console.log(`Max result: ${highScore}`);
// console.log
// (
// `Max result: номер с макс.значением ${numberHighSort.indexOf(numberHighSort[0])}: ${numberHighSort[0]}}`
// );
const costs = [0.25, 0.27, 0.25, 0.25, 0.25, 0.25,
    0.33, 0.31, 0.25, 0.29, 0.27, 0.22,
    0.31, 0.25, 0.25, 0.33, 0.21, 0.25,
    0.25, 0.25, 0.28, 0.25, 0.24, 0.22,
    0.20, 0.25, 0.30, 0.25, 0.24, 0.25,
    0.25, 0.25, 0.27, 0.25, 0.26, 0.29];

function getCosts(scores, costs, highScore) {
    let cost = 100;
    let index;
    for(let i = 0; i < scores.length; i++) {
        if(scores[i] == highScore && cost > costs[i]) {
             index = i;
             cost = costs[i];
        }
    } 
    return index;
}

function scoresRealise(scores) {
    let highScore = 0;
    let outputScore;

    for (let i = 0; i < scores.length; i++) {

        outputScore = `Мыльныё пузырь №${i}: значение ${scores[i]}`;
        console.log(outputScore);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBest(scores, highScore) {
    let bestSolution = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolution.push(i);
        }
    }
    return bestSolution;
}



const highScore = scoresRealise(scores);
const bestSolution = getBest(scores, highScore);
const mostCost = getCosts(scores, costs, highScore);
console.log(`Количество результатов: ${scores.length}`);
console.log(`Максимальный результат равен: ${highScore}`);
console.log(`Номер максимального значения равен: ${bestSolution}`);
console.log(`Макс. эффективный результат равен: ${mostCost}`);








