let emptyBoard = [];
let boardRow = []

for (let x = 0; x <= 7; x++) {
    boardRow.push(0);
};

for (let y = 0; y <= 7; y++) {
    emptyBoard.push(boardRow.slice());
};

class Knight {

    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.board = JSON.parse(JSON.stringify(emptyBoard));
        this.board[y][x] = 9;
    }

    test(board, x, y, xDelta, yDelta) {        
        
        let xTarget = x + xDelta;
        let yTarget = y + yDelta;
        
        if ( xTarget > 7 || xTarget < 0 || yTarget > 7 || yTarget < 0 || board[yTarget][xTarget] == 1) {
            return false;
        }

        return true;

    }

    edgeList(board, x, y) {

        let deltas = [{x: -1, y: 2}, {x: -2, y: 1}, {x: -2, y: -1}, {x: -1, y: -2}, {x: 1, y: 2}, {x: 2, y: 1}, {x: 2, y: -1}, {x: 1, y: -2}];
        
        let edges = [];

        deltas.forEach(delta => {

            if (this.test(board, x, y, delta.x, delta.y) == true) {

                edges.push(delta);

            }

        });

        return edges;

    }

    move(board, x, y, xDelta, yDelta, count = 0, steps = `[${x},${y}],`) {

        count++
        
        // Parse to make deepy copy. Shallow copy doesn't work with array of arrays
        let newBoard = JSON.parse(JSON.stringify(board));
        
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

    makeMoves(board, x, y, xTarget, yTarget, count = 0, steps, myArray = []) {

        let moveList = this.edgeList(board, x, y);
        
        moveList.forEach(move => {
            
            let moveData = this.move(board, x, y, move.x, move.y, count, steps);

            console.log(moveData);

            if (moveData.x == xTarget && moveData.y == yTarget) {
                
                myArray.push(moveData);

            } else if (moveData.count < 7) {

                this.makeMoves(moveData.board, moveData.x, moveData.y, xTarget, yTarget, moveData.count, moveData.steps, myArray);

            } else {

                return;

            }
            
        });
        
        return myArray;

    }

};

export default Knight;