import Knight from "./knight";

console.log('SHOWTIME!!!');

function knightMoves(x, y, xTarget, yTarget) {

    const knight = new Knight(x, y);

    const paths = knight.makeMoves(knight.board, x, y, xTarget, yTarget);    

    if (!paths.length) {

        return 'Coordinates not reached';

    }

    let shortestPath = 10;

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
// console.log(knightMoves(0, 0, 3, 3));
// console.log(knightMoves(0, 0, 7, 7));
// console.log(knightMoves(3, 3, 4, 3));