import './styles.css';
import testMove from './testMove';

console.log('SHOWTIME!!!');

let emptyBoard = [];
let boardRow = []

for (let x = 0; x <= 7; x++) {
    boardRow.push(0);
};

for (let y = 0; y <= 7; y++) {
    emptyBoard.push(boardRow.slice());
};

class Knight {

    constructor(x, y, board) {
        this.x = x;
        this.y = y;
        this.board = JSON.parse(JSON.stringify(board));
        this.sqr = `[${this.x},${this.y}]`;
        this.board[y][x] = 9;
    }

    test(matrix, x, y, xDelta, yDelta) {        
        
        let xTarget = x + xDelta;
        let yTarget = y + yDelta;
        
        if ( xTarget > 7 || xTarget < 0 || yTarget > 7 || yTarget < 0 || matrix[yTarget][xTarget] == 1) {
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

    edgeList(matrix, x, y) {

        let deltas = [{x: -1, y: 2}, {x: -2, y: 1}, {x: -2, y: -1}, {x: -1, y: -2}, {x: 1, y: 2}, {x: 2, y: 1}, {x: 2, y: -1}, {x: 1, y: -2}];
        // deltas = [{x: -1, y: 2}, {x: -2, y: 1}];
        // deltas = [{x: -1, y: 2}];
        // deltas = [{x: -1, y: -2}, {x: -2, y: -1}];
        // deltas = [{x: -1, y: 2}, {x: -2, y: 1}, {x: -2, y: -1}];
        
        let edges = [];

        deltas.forEach(delta => {

            if (this.test(matrix, x, y, delta.x, delta.y) == true) {
                edges.push(delta);
            }

        });

        return edges;

    }

    move(matrix, x, y, xDelta, yDelta, count = 0, steps = `[${x},${y}],`) {

        count ++
        
        // Parse to make deepy copy. Shallow copy doesn't work with array of arrays
        let newBoard = JSON.parse(JSON.stringify(matrix));
        
        let xTarget = x + xDelta;
        let yTarget = y + yDelta;

        if ( xTarget > 7 || xTarget < 0 || yTarget > 7 || yTarget < 0 || newBoard[yTarget][xTarget] == 1) {
            throw new Error('Invalid move!');
        }

        newBoard[y][x] = 1;
        x = xTarget;
        y = yTarget;
        newBoard[y][x] = 9;

        steps += `[${x},${y}],`;
        
        return {x: x, y: y, board: newBoard, count: count, steps: steps};

    }

    moveTopRightUp() {this.move(-1, 2)}
    moveTopRightDown() {this.move(-2, 1)}
    moveBotRightUp() {this.move(-2, -1)}
    moveBotRightDown() {this.move(-1, -2)}
    moveTopLeftUp() {this.move(1, 2)}
    moveTopLeftDown() {this.move(2, 1)}
    moveBotLeftUp() {this.move(2, -1)}
    moveBotLeftDown() {this.move(1, -2)}

    makeMoves(matrix, x, y, xFinal, yFinal, count = 0, steps, myArray = []) {

        let moveList = this.edgeList(matrix, x, y);

        console.log(moveList);
        
        moveList.forEach(move => {

            console.log(move.x+', '+move.y);
            
            let moveData = this.move(matrix, x, y, move.x, move.y, count, steps);

            console.log(moveData);

            if (moveData.x == xFinal && moveData.y == yFinal) {

                console.log('got em');
                
                myArray.push(moveData);

            } else {

                this.makeMoves(moveData.board, moveData.x, moveData.y, xFinal, yFinal, moveData.count, moveData.steps, myArray);

            }
            
        });
        
        return myArray;

    }

};

const dunk = new Knight(3, 3, emptyBoard);

console.log(dunk.makeMoves(dunk.board, dunk.x, dunk.y, 0, 0));

function knightMoves(x, y, xTarget, yTarget) {

    const knight = new Knight(x, y, emptyBoard);

    const paths = knight.makeMoves(knight.board, x, y, xTarget, yTarget);

    if (!paths.length) {
        return 'Coordinates not reached';
    }

    let shortestPath = 1000;

    paths.forEach(path => {

        if (path.count < shortestPath) {
            shortestPath = path.count;
        }
         
    });

    for (let path of paths) {

        if (path.count == shortestPath) {

            return path.steps.slice(0, -1);

        }

    }

};

// console.log(knightMoves(3, 3, 0, 0));
console.log(knightMoves(0, 0, 3, 3));






