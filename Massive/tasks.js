const products = ["Choo Choo Chocolate",
    "Icy Mint", "Cake Batter",
    "Bubblegum"
];

let hasBubbleGum = [false,
    false,
    false,
    true];


// let i = 0;

for(let i = 0; i < hasBubbleGum.length; i++ ) {
    if(hasBubbleGum[i]) {
                console.log(`${products[i]} buble gum =)`);
}
}

// while(i < hasBubbleGum.length) {

//     if(hasBubbleGum[i]) {
//         console.log(`${products[i]} buble gum =)`);
//     } i++;
// }