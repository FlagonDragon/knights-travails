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
        this.sqr = `[${this.x},${this.y}]`;
        myBoard[y][x] = 'k';
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
        myBoard[this.y][this.x] = 1;
        this.x = this.x + 1;
        this.y = this.y + 2;
        myBoard[this.y][this.x] = 'k';
        this.sqr = `[${this.x},${this.y}]`;
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

dunk.moveTopLeftUp();
dunk.moveTopLeftUp();
dunk.moveTopLeftUp();

console.log(dunk);


 

// console.log(knightMoves());
