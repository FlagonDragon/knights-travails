import './styles.css';

console.log('SHOWTIME!!!');

let myArray = [];
let arrayRow = []

for (let x = 0; x <= 7; x++) {
    arrayRow.push(0);
};

for (let y = 0; y <= 7; y++) {
    myArray.push(arrayRow.slice());
};

console.log(myArray);

function knightMoves(start, end) {

    return `Say hello to 
multi-line
strings!`;


}

console.log(knightMoves());
