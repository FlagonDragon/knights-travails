function testMove(myClass) {

//Movement test (forth and back)
// 1
myClass.moveTopRightUp();
myClass.moveBotLeftDown();
// 2
myClass.moveTopRightDown();
myClass.moveBotLeftUp();
// 3 
myClass.moveTopLeftUp();
myClass.moveBotRightDown();
// 4
myClass.moveTopLeftDown();
myClass.moveBotRightUp();
// 5
myClass.moveBotRightUp();
myClass.moveTopLeftDown();
// 6
myClass.moveBotRightDown();
myClass.moveTopLeftUp();
// 7
myClass.moveBotLeftUp();
myClass.moveTopRightDown();
// 8
myClass.moveBotLeftDown();
myClass.moveTopRightUp();

};

export default testMove;

// NOTES

// let move function inherit current iteration of graph and step counter 
// return step counter at the end if target square is reached
// replace record with lowest avaliable step counter to find minimum amount of moves
// then edit function to output coordinates of each move made in shortest sequence

// https://www.w3schools.com/js/js_maps.asp

function test1(xDelta, yDelta) {        
        
    let xTarget = this.x + xDelta;
    let yTarget = this.y + yDelta;

    if ( xTarget > 7 || xTarget < 0 || yTarget > 7 || yTarget < 0 || this.board[yTarget][xTarget] == 1) {
        return false;
    }

    return true;

    }

function move1(xDelta, yDelta) {
    
    let xTarget = this.x + xDelta;
    let yTarget = this.y + yDelta;

    if ( xTarget > 7 || xTarget < 0 || yTarget > 7 || yTarget < 0 || this.board[yTarget][xTarget] == 1) {
        throw new Error('Invalid move!')
    }

    this.board[this.y][this.x] = 1;
    this.x = xTarget;
    this.y = yTarget;
    this.board[this.y][this.x] = 9;
    this.sqr = `[${this.x},${this.y}]`;

}

