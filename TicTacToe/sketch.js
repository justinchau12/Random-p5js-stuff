cell = []
turn = 0
function setup() {
  createCanvas(300, 300)
  strokeWeight(5)
  for (row=0;row<3;row++){
    for (column=0;column<3;column++){
      cell = append(cell, new Cell(row*100,column*100))
    }
  }
}

function draw() {
  background(220)
  for (index=0;index<9;index++){
    cell[index].drawCell()
  }
  if (cell[0].status == 1&& cell[3].status == 1 && cell[6].status == 1 || cell[0].status == 2 && cell[3].status == 2 && cell[6].status == 2){
    line(0,50,300,50)
    noLoop()
  }
  else if(cell[1].status == 1 && cell[4].status == 1 && cell[7].status == 1 || cell[1].status == 2 && cell[4].status == 2 && cell[7].status == 2){
    line(0,150,300,150)
    noLoop()
  }
  else if (cell[2].status == 1&& cell[5].status == 1 && cell[8].status == 1 || cell[2].status == 2 && cell[5].status == 2 && cell[8].status == 2){
    line(0,250,300,250)
    noLoop()
  }
  else if(cell[0].status == 1 && cell[1].status == 1 && cell[2].status == 1 || cell[0].status == 2 && cell[1].status == 2 && cell[2].status == 2){
    line(50,0,50,300)
    noLoop()
  }
  else if(cell[3].status == 1 && cell[4].status == 1 && cell[5].status == 1 || cell[3].status == 2 && cell[4].status == 2 && cell[5].status == 2){
    line(150,0,150,300)
    noLoop()
  }
  else if(cell[6].status == 1 && cell[7].status == 1 && cell[8].status == 1 || cell[6].status == 2 && cell[7].status == 2 && cell[8].status == 2){
    line(250,0,250,300)
    noLoop()
  }
  else if(cell[0].status == 1 && cell[4].status == 1 && cell[8].status == 1 || cell[0].status == 2 && cell[4].status == 2 && cell[8].status == 2){
    line(0,0,300,300)
    noLoop()
  }
  else if(cell[2].status == 1 && cell[4].status == 1 && cell[6].status == 1 || cell[2].status == 2 && cell[4].status == 2 && cell[6].status == 2){
    line(300,0,0,300)
    noLoop()
  }
}

function mouseClicked(){
    if (turn == 0){
      for (index=0;index<9;index++){
        cell[index].ifClicked1()
      }

    }
    else if (turn == 1){
      for (index=0;index<9;index++){
        cell[index].ifClicked2()
      }
    }
}
class Cell{
  constructor(x,y){
    this.x = x
    this.y = y
    this.status = 0
  }
  drawCell(){
    if (this.status == 0){
      square(this.x,this.y,100)
    }
    if (this.status == 1){
      square(this.x,this.y,100)
      stroke('green')
      ellipse(this.x+50,this.y+50,100,100)
      stroke('black')
    }
    if (this.status == 2){
      square(this.x,this.y,100)
      stroke('red')
      line(this.x,this.y,this.x+100,this.y+100)
      line(this.x+100,this.y,this.x,this.y+100)
      stroke('black')
    }
  }
  ifClicked1(){
    if (this.x < mouseX && mouseX < this.x + 100 && this.y < mouseY && mouseY < this.y + 100 && this.status == 0){
      this.status = 1
      turn = 1
    }
  }
  ifClicked2(){
    if (this.x < mouseX && mouseX < this.x + 100 && this.y < mouseY && mouseY < this.y + 100 && this.status == 0){
      this.status = 2
      turn = 0
    }  
  }
}