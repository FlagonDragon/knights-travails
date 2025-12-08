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