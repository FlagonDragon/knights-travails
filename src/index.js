import './styles.css';

console.log('SHOWTIME!!!');

let myBoard = [];
let boardRow = []

for (let x = 0; x <= 7; x++) {
    boardRow.push(0);
};

for (let y = 0; y <= 7; y++) {
    myBoard.push(boardRow.slice());
};

console.log(myBoard);

class Knight {

    constructor(x, y) {

        this.x = x;
        this.y = y;
        this.sqr = myBoard[y][x];

    }

    moveTopRightUp() {
    }
    
    moveTopRightDown() {
        
    }

    moveBotRightUp() {
        
    }

    moveBotRightDown() {
        
    }

    moveTopLeftUp() {
        this.x = this.x + 1;
        this.y = this.y + 2;
        this.sqr = myBoard[this.y][this.x];
    }
    
    moveTopLeftDown() {
        
    }

    moveBotLeftUp() {
        
    }

    moveBotLeftDown() {
        
    }

}

function knightMoves(start, end) {

    return `Say hello to 
multi-line
strings!`;

}

const dunk = new Knight(0, 0);

myBoard[2][1] = 21;
myBoard[4][2] = 42;

console.log(dunk);

console.log(dunk.sqr);

dunk.moveTopLeftUp();
dunk.moveTopLeftUp();


console.log(dunk.sqr);

console.log(dunk);


 

// console.log(knightMoves());
