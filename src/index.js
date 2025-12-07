import './styles.css';
import testMove from './testMove';

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
        myBoard[y][x] = 9;
    }

    move(xDelta, yDelta) {
        myBoard[this.y][this.x] = 1;
        this.x = this.x + xDelta;
        this.y = this.y + yDelta;
        myBoard[this.y][this.x] = 9;
        this.sqr = `[${this.x},${this.y}]`;
    }

    moveTopRightUp() {
        this.move(-1, 2);
    }
    
    moveTopRightDown() {
        this.move(-2, 1);    
    }

    moveBotRightUp() {
        this.move(-2, -1);    
    }

    moveBotRightDown() {
        this.move(-1, -2);    
    }

    moveTopLeftUp() {
        this.move(1, 2);
    }
    
    moveTopLeftDown() {
        this.move(2, 1);    
    }

    moveBotLeftUp() {
        this.move(2, -1);    
    }

    moveBotLeftDown() {
        this.move(1, -2);    
    }

}

function knightMoves(start, end) {

    return `Say hello to 
multi-line
strings!`;

}

const dunk = new Knight(4, 4);


testMove(dunk);



console.log(dunk);


 

// console.log(knightMoves());
