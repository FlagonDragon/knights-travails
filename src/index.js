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

    test(xDelta, yDelta) {        
        
        let xTarget = this.x + xDelta;
        let yTarget = this.y + yDelta;
        
        if ( xTarget > 7 || xTarget < 0 || yTarget > 7 || yTarget < 0 || myBoard[yTarget][xTarget] == 1) {
            return false;
        }

        return true;

    }

    testTopRightUp() {return this.test(-1, 2)}
    testTopRightDown() {return this.test(-2, 1)}
    testBotRightUp() {return this.test(-2, -1)}
    testBotRightDown() {return this.test(-1, -2)}
    testTopLeftUp() {return this.test(1, 2)}
    testTopLeftDown() {return this.test(2, 1)}
    testBotLeftUp() {return this.test(2, -1)}
    testBotLeftDown() {return this.test(1, -2)}

    edgeList() {

        let deltas = [{x: -1, y: 2}, {x: -2, y: 1}, {x: -2, y: -1}, {x: -1, y: -2}, {x: 1, y: 2}, {x: 2, y: 1}, {x: 2, y: -1}, {x: 1, y: -2}];
        deltas = [{x: -1, y: 2}, {x: -2, y: 1}];
        
        let edges = [];

        deltas.forEach(delta => {

            if (this.test(delta.x, delta.y) == true) {
                edges.push(delta);
            }

        });

        return edges;

    }

    move(xDelta, yDelta) {
        
        let xTarget = this.x + xDelta;
        let yTarget = this.y + yDelta;

        if ( xTarget > 7 || xTarget < 0 || yTarget > 7 || yTarget < 0 || myBoard[yTarget][xTarget] == 1) {
            throw new Error('Invalid move!')
        }

        myBoard[this.y][this.x] = 1;
        this.x = xTarget;
        this.y = yTarget;
        myBoard[this.y][this.x] = 9;
        this.sqr = `[${this.x},${this.y}]`;

    }

    moveTopRightUp() {this.move(-1, 2)}
    moveTopRightDown() {this.move(-2, 1)}
    moveBotRightUp() {this.move(-2, -1)}
    moveBotRightDown() {this.move(-1, -2)}
    moveTopLeftUp() {this.move(1, 2)}
    moveTopLeftDown() {this.move(2, 1)}
    moveBotLeftUp() {this.move(2, -1)}
    moveBotLeftDown() {this.move(1, -2)}

    makeMoves() {

        let moveList = this.edgeList();

        console.log(moveList);
        

        moveList.forEach(move => {
            console.log(move.x+', '+move.y);
            
            this.move(move.x, move.y);
        });

    }

};

const dunk = new Knight(3, 3);
// testMove(dunk);
console.log(dunk);

// let edges = dunk.edgeList();
// console.log(edges);

dunk.makeMoves();

function knightMoves(start, end) {

    return `:)`;

};
 
console.log(dunk);