function setup() {
  createCanvas(400, 400);
  move = 400
}

function draw() {
  background(0);
  textSize(30)
  fill("red")
  text("Attention all Fortnite gamers: John Wick is in great danger and he needs your help to wipe out the squads in the Tilted Towers, but to do this he needs a golden scar and a couple of chug jugs. To help him, all he needs is your credit card number, the three digits on the back, and the expiration month and year. But, you gotta be quick, so John Wick can secure the bag and achieve the epic Victory Royal!",move,200)
  move = move - 2
  if (move <= -6000){
    move = 400
  }
}