// Justin_C
// Chaos Minesweeper
// Turtorial: https://minesweepergame.com/strategy/how-to-play-minesweeper.php

// Setting up variables.
// Cell_list contains all cells. Cell_number is cell numbers from 0 to 252, its use is to call cells. Mine contains all cell numbers of mine. Begin is to detect if the gam have started. TimeStart is to determine whenever the timer starts. k is used to give each cell their cell numbers. odd is to give the pattern to each cells. TimeValue is to calculate time(sec). End is to determine the game have ended or not. r is to generate random events. speedX, speedY, Xpos, Ypos (1,2) is to let the cicles bounce in event #4. Sound is to set the volume of the sound effects. Played is to make sound effects only play once in draw function.

let cell_list = []
let cell_number = []
let mine = []
let begin = false
let timeStart = false
let k = 0
let odd = true
let timeValue = 300
let end = false
let r = 0
let speedX1 = 2
let speedY1 = 2
let Xpos1 = 312.5
let Ypos1 = 262.5
let speedX2 = 3
let speedY2 = 3
let Xpos2 = 262.5
let Ypos2 = 312.5
let sound = 2
let played = false
p5.disableFriendlyErrors = true
function preload(){
  cele = createImg('ezgif-3-12638f04a4.gif')
  cele.hide()
  cele.position(230,280)
  
  // Loading sound effects
  myTest = loadSound('SoundEffects/roblox-hi-sound.mp3')
  myTest.setVolume(sound)
  mySpawn = loadSound('SoundEffects/roblox-spawn.mp3')
  mySpawn.setVolume(sound)
  myExplosion = loadSound('SoundEffects/img_3869-130.mp3')
  myExplosion.setVolume(sound)
  myFlag = loadSound('SoundEffects/comedy_pop_finger_in_mouth_001.mp3')
  myFlag.setVolume(sound)
  myDig = loadSound('SoundEffects/minecraft_click.mp3')
  myDig.setVolume(sound)
  myBoing = loadSound('SoundEffects/25033f6e-d4d7-42a2-aff2-34960641088b.mp3')
  myBoing.setVolume(sound)
  myWin = loadSound('SoundEffects/5637d9b2-f6ae-435c-a5a4-b8c21433ebdb.mp3')
  myWin.setVolume(sound)
  myFog = loadSound('SoundEffects/minecraft-cave-sound-13.mp3')
  myFog.setVolume(sound)
  myBreeze = loadSound('SoundEffects/breeze1.mp3')
  myBreeze.setVolume(sound)
}
function setup() {
  textStyle(BOLD)
  // Create canvas + preventing Right Click from showing broswer context menu.
  createCanvas(676, 576)
  for (let element of document.getElementsByClassName("p5Canvas")) {
    element.addEventListener("contextmenu", (e) => e.preventDefault());
  }
  // Create cells
  for (let col = 0; col < 14; col++){
    for(let row = 0; row < 18; row++){
      // X-coordinate, Y-coordinate, their number, revealed(Boolean), flagged(Boolean), odd/even
      if(row % 2 == 0 && col % 2 == 0){
        odd = true
      }
      else if(row % 2 == 1 && col % 2 == 1){
        odd = true
      }
      else if(row % 2 == 0 && col % 2 == 1){
        odd = false
      }
      else if(row % 2 == 1 && col % 2 == 0){
        odd = false
      }
      append(cell_list,new Cell(row*37.5,col*37.5,k,false,false,odd))
      k++
    }
  }
  for (let i = 0; i<252; i++){
    append(cell_number,i)
  }
}

function draw() {
  textAlign(CENTER)
  stroke('black')
  strokeWeight(2)
  textSize(40)
  background(220)
  // Constantly displaying the current cells statuses.
  for (let i = 0; i < 252; i++){
      cell_list[i].display()
  }
  fill('rgb(141,141,141)')
  rect(0,526,675,50)
  fill('black')
  textSize(40)
  text('Current Event :',290,565)
  if (begin == false){
    //fill('white')
    //text('Warning: This program contains flashing elements, and may cause eye strain. You have been warned.',134,150,450)
  }
  // Timer
  if (begin == true && timeStart == false){
    setInterval(timeUpdate, 1000)
    setInterval(event, 30000)
    timeStart = true
  }
  // Display time as minute AND seconds.
  if (timeValue % 60 < 10){
    fill('black')
    textSize(40)
    text(floor(timeValue/60) + ' : 0'+ timeValue % 60,70,565)
  }
  else if (timeValue % 60 >= 10){
    fill('black')
    textSize(40)
    text(floor(timeValue/60) + ' : '+ timeValue % 60,70,565)
  }
  // Reminder for user if the timer hits a certain point of time.
  if (timeValue == 150 && end == false){
    strokeWeight(10)
    textSize(75)
    stroke('red')
    fill('orange')
    text('2.5 minutes left...',338,280)
  }
  if (timeValue == 60 && end == false){
    strokeWeight(10)
    textSize(75)
    stroke('red')
    fill('orange')
    text('1 MINUTE!!!',338,280)
  }
  // Win detection
  for (let i = 0, k = 0; i < 252; i++){
    if (cell_list[i].r == true && cell_list[i].m == false && end == false){
      k ++
    }
    if (k == 222){
      win()
    }
  }
  if (r == 0){
    cursor(ARROW)
    fill('black')
    strokeWeight(2)
    stroke('black')
    textSize(40)
    text('-------------',550,565)
    stroke('black')
  }
  // Fog
  else if (r == 1){
    fill('white')
    stroke('grey')
    strokeWeight(2)
    textSize(40)
    text('Fog',550,565)
    stroke('black')
    fill(192,192,192,247.35)
    rect(0,0,676,526)
    let k = int(random(1,601))
    if (k == 1){
      myFog.play()
    }
  }
  // Fraudster
  else if (r == 2){
    fill('navy')
    stroke('indigo')
    strokeWeight(2)
    textSize(40)
    text('Fraudster',550,565)
    stroke('black')
    let k = int(random(0,252))
    if(cell_list[k].f == false){
      cell_list[k].f = true
      myFlag.play()
    }
  }
  // Blizzard
  else if (r == 3){
    if(played == false){
      myBreeze.play()
      played = true
    }
    fill('cyan')
    stroke('white')
    strokeWeight(2)
    textSize(40)
    text('Blizzard',550,565)
    stroke('black')
    let k = int(random(0,252))
    if(cell_list[k].s == false){
      cell_list[k].s = true
    }
  }
  // Balls
  else if (r == 4){
    stroke('orange')
    fill('black')
    strokeWeight(2)
    textSize(40)
    text('Balls',550,565)
    stroke('orange')
    ellipse(Xpos1,Ypos1,150,150)
    ellipse(Xpos2,Ypos2,150,150)
    Xpos1 = Xpos1 + speedX1
    Ypos1 = Ypos1 + speedY1
    Xpos2 = Xpos2 + speedX2
    Ypos2 = Ypos2 + speedY2
    if (Xpos1 <= 65 || Xpos1 >= 610){
      speedX1 = speedX1 * -1
      myBoing.play()
    }
    if (Ypos1 <= 65 || Ypos1 >= 460){
      speedY1 = speedY1 * -1
      myBoing.play()
    }
    if (Xpos2 <= 65 || Xpos2 >= 610){
      speedX2 = speedX2 * -1
      myBoing.play()
    }
    if (Ypos2 <= 65 || Ypos2 >= 460){
      speedY2 = speedY2 * -1
      myBoing.play()
    }
    stroke('black')
  }
  // Futuristic
  else if (r == 5){
    stroke('black')
    fill('white')
    strokeWeight(2)
    textSize(40)
    text('Futuristic',550,565)
    noCursor()
    stroke(255,255,255,12)
    fill(255,255,255,12)
    ellipse(mouseX,mouseY,50)
    stroke('black')
  }
  // Flickering
  else if (r == 6){
    stroke('black')
    fill('white')
    strokeWeight(2)
    textSize(40)
    text('Flickering',550,565)
    let cur = [ARROW, CROSS, HAND, MOVE, TEXT,WAIT,]
    cursor(cur[int(random(0,6))])
  }
}

function mousePressed(){
  // Detect if the player wants to reveal or flag the cell
  if (mouseButton === LEFT){
    for (let i = 0; i < 252; i++){
      cell_list[i].detectClick()
    }
  }
  else if (mouseButton === RIGHT){
    for (let i = 0; i < 252; i++){
      cell_list[i].flagged()
    }
  }
}
function keyPressed(){
  // To test the volume in presentation
  if (keyCode == 81){
    myTest.play()
  }
}
function event(){
  played = false
  myBreeze.stop()
  myFog.stop()
  cursor(ARROW)
  r = int(random(1,7))
}
function lose(){
  r = 0
  end = true
  myBreeze.stop()
  myExplosion.play()
  for (let i = 0; i < 252; i++){
    cell_list[i].s = false
    reveal(cell_list[i].n)
  }
}
function win(){
  // Win screen
  r = 0
  myBreeze.stop()
  myWin.play()
  cele.show()
  textSize(75)
  stroke('white')
  strokeWeight(10)
  fill('yellow')
  text('You Win!',338,280)
  end = true
  noLoop()
}
function reveal(n){
  cell_list[n].k = 0
  if (cell_list[n].m == false){
    // I had to set zero since a cell can have different neighbours, and the number will accumulate if I don't do this.
    cell_list[n].k = 0
    if (n == 0){
      if(cell_list[n+1].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+18].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+19].m == true){
        cell_list[n].k++
      }
    }
    else if (n == 17){
      if(cell_list[n-1].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+17].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+18].m == true){
        cell_list[n].k++
      }
    }
    else if (n == 234){
      if(cell_list[n-18].m == true){
        cell_list[n].k++
      }
      if(cell_list[n-17].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+1].m == true){
        cell_list[n].k++
      }
    }
    else if (n == 251){
      if(cell_list[n-1].m == true){
        cell_list[n].k++
      }
      if(cell_list[n-19].m == true){
        cell_list[n].k++
      }
      if(cell_list[n-18].m == true){
        cell_list[n].k++
      }
    }
    else if (n == 18 || n == 36 || n == 54 || n == 72 || n == 90 || n == 108 || n == 126 || n == 144 || n == 162 || n == 180 || n == 198 || n == 216){
      if(cell_list[n-18].m == true){
        cell_list[n].k++
      }
      if(cell_list[n-17].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+1].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+18].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+19].m == true){
        cell_list[n].k++
      }
    }
    else if (n == 35 || n == 53 || n == 71 || n == 89 || n == 107 || n == 125 || n == 143 || n == 161 || n == 179 || n == 197 || n == 215 || n == 233){
      if(cell_list[n-18].m == true){
        cell_list[n].k++
      }
      if(cell_list[n-19].m == true){
        cell_list[n].k++
      }
      if(cell_list[n-1].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+17].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+18].m == true){
        cell_list[n].k++
      }
    }
    else if(n == 1 || n == 2 || n == 3 || n == 4 || n == 5 || n == 6 || n == 7|| n == 8 || n == 9 || n == 10 || n == 11 || n == 12 || n == 13 || n == 14 || n == 15 || n == 16){
      if(cell_list[n-1].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+17].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+18].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+19].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+1].m == true){
        cell_list[n].k++
      }
    }
    else if(n == 235 || n == 236 || n == 237 || n == 238 || n == 239 || n == 240 || n == 241 || n == 242 || n == 243 || n == 244 || n == 245 || n == 246 || n == 247 || n == 248 || n == 249 || n == 250){
      if(cell_list[n-1].m == true){
        cell_list[n].k++
      }
      if(cell_list[n-19].m == true){
        cell_list[n].k++
      }
      if(cell_list[n-18].m == true){
        cell_list[n].k++
      }
      if(cell_list[n-17].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+1].m == true){
        cell_list[n].k++
      }
    }
    else{
      if(cell_list[n-19].m == true){
        cell_list[n].k++
      }
      if(cell_list[n-18].m == true){
        cell_list[n].k++
      }
      if(cell_list[n-17].m == true){
        cell_list[n].k++
      }
      if(cell_list[n-1].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+1].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+17].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+18].m == true){
        cell_list[n].k++
      }
      if(cell_list[n+19].m == true){
        cell_list[n].k++
      }
    }
    cell_list[n].r = true
  }
  if (cell_list[n].m == true && cell_list[n].f == false && end == false){
    lose()
  }
  else if(cell_list[n].m == true && end == true){
    cell_list[n].r = true
    // Lose screen
    textSize(75)
    stroke('blue')
    strokeWeight(10)
    fill('cyan')
    text('Game Over',338,280)
    noLoop()
  }
}
function timeUpdate(){
  if(timeValue>0){
    timeValue--
  }
  if (timeValue == 0){
    lose()
  }
}
class Cell{
  constructor(x,y,n,m,f,o){
    // Naming logics
    this.x = x // X
    this.y = y // Y
    this.n = n // Number
    this.m = m // Mine
    this.r = false // Revealed?
    this.k = 0 // A constant that would be used to determine how many cells is revealed.
    this.f = f // Flagged?
    this.o = o // Odd number?
    this.s = false // Snowed?
  }
  display(){
    strokeWeight(2)
    if(this.r == false){
      if (this.s == true){
        fill('white')
      }
      else if (this.o == true){
        fill('rgb(5,150,5)')
      }
      else if (this.o == false){
        fill('rgb(3,139,3)')
      }
      rect(this.x,this.y,37.5,37.5)
      if (this.f == true){
        fill('red')
        triangle(this.x+17,this.y+7,this.x+30,this.y+17,this.x+17,this.y+25)
        fill('black')
        rect(this.x+15,this.y+6.5,3,25)
        rect(this.x+6,this.y+30,25,3)
      }
    }
    else if(this.r == true){
      strokeWeight(2)
      if (this.k == 0){
        this.k = ''
        // Revealing the surrounding cells if there are no mines around them.
        if (this.n == 0){
          reveal(this.n+1)
          reveal(this.n+18)
          reveal(this.n+19)
        }
        else if (this.n == 17){
          reveal(this.n-1)
          reveal(this.n+17)
          reveal(this.n+18)
        }
        else if (this.n == 234){
          reveal(this.n-18)
          reveal(this.n-17)
          reveal(this.n+1)
        }
        else if (this.n == 251){
          reveal(this.n-1)
          reveal(this.n-19)
          reveal(this.n-18)
        }
        else if (this.n == 18 || this.n == 36 || this.n == 54 || this.n == 72 || this.n == 90 || this.n == 108 || this.n == 126 || this.n == 144 || this.n == 162 || this.n == 180 || this.n == 198 || this.n == 216){
          reveal(this.n-18)
          reveal(this.n-17)
          reveal(this.n+1)
          reveal(this.n+18)
          reveal(this.n+19)
        }
        else if (this.n == 35 || this.n == 53 || this.n == 71 || this.n == 89 || this.n == 107 || this.n == 125 || this.n == 143 || this.n == 161 || this.n == 179 || this.n == 197 || this.n == 215 || this.n == 233){
          reveal(this.n-18)
          reveal(this.n-19)
          reveal(this.n-1)
          reveal(this.n+17)
          reveal(this.n+18)
        }
        else if(this.n == 1 || this.n == 2 || this.n == 3 || this.n == 4 || this.n == 5 || this.n == 6 || this.n == 7|| this.n == 8 || this.n == 9 || this.n == 10 || this.n == 11 || this.n == 12 || this.n == 13 || this.n == 14 || this.n == 15 || this.n == 16){
          reveal(this.n-1)
          reveal(this.n+17)
          reveal(this.n+18)
          reveal(this.n+19)
          reveal(this.n+1)
        }
        else if(this.n == 235 || this.n == 236 || this.n == 237 || this.n == 238 || this.n == 239 || this.n == 240 || this.n == 241 || this.n == 242 || this.n == 243 || this.n == 244 || this.n == 245 || this.n == 246 || this.n == 247 || this.n == 248 || this.n == 249 || this.n == 250){
          reveal(this.n-1)
          reveal(this.n-19)
          reveal(this.n-18)
          reveal(this.n-17)
          reveal(this.n+1)
        }
        // This code is meaningless ↓, but somehow without it, the whole thing crashes. So, DO NOT TOUCH. Edit: if(this.n != 0 && this.n != 17 && this.n != 234 && this.n != 251) I removed it and it's fine ¯\_(ツ)_/¯ 
        else{
          reveal(this.n-19)
          reveal(this.n-18)
          reveal(this.n-17)
          reveal(this.n-1)
          reveal(this.n+1)
          reveal(this.n+17)
          reveal(this.n+18)
          reveal(this.n+19)
        }
      }
      if (this.s == true){
        fill('white')
      }
      else if (this.o == true){
        strokeWeight(2)
        stroke('black')
        fill('rgb(255,195,91)')
      }
      else if (this.o == false){
        strokeWeight(2)
        stroke('black')
        fill('rgb(248,169,26)')
      }
      rect(this.x,this.y,37.5,37.5) 
      if(this.k == 1){
        fill('blue')
      }
      else if(this.k == 2){
        fill('green')
      }
      else if(this.k == 3){
        fill('red')
      }
      else if(this.k == 4){
        fill('darkblue')
      }
      else if(this.k == 5){
        fill('maroon')
      }
      else if(this.k == 6){
        fill('teal')
      }
      else if(this.k == 7){
        fill('black')
      }
      else if (this.k == 8){
        fill('lightgrey') 
      }
      textSize(35)
      text(this.k,this.x+17,this.y+32)
      if (this.m == true){
        strokeWeight(2)
        fill('black')
        ellipse(this.x+18.75,this.y+18.75,25,25)
      }
    }
  }
  detectClick(){
    // Removing the first cell and the surrounding (3-8) cells that the player clicked from getting selected as mine to prevent that the player lost immediately.
    if (this.x < mouseX && mouseX < this.x + 37.5 && begin == false){
      if (this.y < mouseY && mouseY < this.y + 37.5 && begin == false){
        mySpawn.play()
        if (this.n == 0){
          cell_number.splice(cell_number.indexOf(this.n),1)
          cell_number.splice(cell_number.indexOf(this.n+1),1)
          cell_number.splice(cell_number.indexOf(this.n+18),1)
          cell_number.splice(cell_number.indexOf(this.n+19),1)
        }
        else if (this.n == 17){
          cell_number.splice(cell_number.indexOf(this.n),1)
          cell_number.splice(cell_number.indexOf(this.n-1),1)
          cell_number.splice(cell_number.indexOf(this.n+17),1)
          cell_number.splice(cell_number.indexOf(this.n+18),1)
        }
        else if (this.n == 234){
          cell_number.splice(cell_number.indexOf(this.n),1)
          cell_number.splice(cell_number.indexOf(this.n-18),1)
          cell_number.splice(cell_number.indexOf(this.n-17),1)
          cell_number.splice(cell_number.indexOf(this.n+1),1)
        }
        else if (this.n == 251){
          cell_number.splice(cell_number.indexOf(this.n),1)
          cell_number.splice(cell_number.indexOf(this.n-1),1)
          cell_number.splice(cell_number.indexOf(this.n-19),1)
          cell_number.splice(cell_number.indexOf(this.n-18),1)
        }
        else if (this.n == 18 || this.n == 36 || this.n == 54 || this.n == 72 || this.n == 90 || this.n == 108 || this.n == 126 || this.n == 144 || this.n == 162 || this.n == 180 || this.n == 198 || this.n == 216){
          cell_number.splice(cell_number.indexOf(this.n),1)
          cell_number.splice(cell_number.indexOf(this.n-18),1)
          cell_number.splice(cell_number.indexOf(this.n-17),1)
          cell_number.splice(cell_number.indexOf(this.n+1),1)
          cell_number.splice(cell_number.indexOf(this.n+18),1)
          cell_number.splice(cell_number.indexOf(this.n+19),1)
        }
        else if (this.n == 35 || this.n == 53 || this.n == 71 || this.n == 89 || this.n == 107 || this.n == 125 || this.n == 143 || this.n == 161 || this.n == 179 || this.n == 197 || this.n == 215 || this.n == 233){
          cell_number.splice(cell_number.indexOf(this.n),1)
          cell_number.splice(cell_number.indexOf(this.n-18),1)
          cell_number.splice(cell_number.indexOf(this.n-19),1)
          cell_number.splice(cell_number.indexOf(this.n-1),1)
          cell_number.splice(cell_number.indexOf(this.n+17),1)
          cell_number.splice(cell_number.indexOf(this.n+18),1)
        }
        else if(this.n == 1 || this.n == 2 || this.n == 3 || this.n == 4 || this.n == 5 || this.n == 6 || this.n == 7|| this.n == 8 || this.n == 9 || this.n == 10 || this.n == 11 || this.n == 12 || this.n == 13 || this.n == 14 || this.n == 15 || this.n == 16){
          cell_number.splice(cell_number.indexOf(this.n),1)
          cell_number.splice(cell_number.indexOf(this.n-1),1)
          cell_number.splice(cell_number.indexOf(this.n+17),1)
          cell_number.splice(cell_number.indexOf(this.n+18),1)
          cell_number.splice(cell_number.indexOf(this.n+19),1)
          cell_number.splice(cell_number.indexOf(this.n+1),1)
        }
        else if(this.n == 235 || this.n == 236 || this.n == 237 || this.n == 238 || this.n == 239 || this.n == 240 || this.n == 241 || this.n == 242 || this.n == 243 || this.n == 244 || this.n == 245 || this.n == 246 || this.n == 247 || this.n == 248 || this.n == 249 || this.n == 250){
          cell_number.splice(cell_number.indexOf(this.n),1)
          cell_number.splice(cell_number.indexOf(this.n-1),1)
          cell_number.splice(cell_number.indexOf(this.n-19),1)
          cell_number.splice(cell_number.indexOf(this.n-18),1)
          cell_number.splice(cell_number.indexOf(this.n-17),1)
          cell_number.splice(cell_number.indexOf(this.n+1),1)
        }
        else{
          cell_number.splice(cell_number.indexOf(this.n),1)
          cell_number.splice(cell_number.indexOf(this.n-19),1)
          cell_number.splice(cell_number.indexOf(this.n-18),1)
          cell_number.splice(cell_number.indexOf(this.n-17),1)
          cell_number.splice(cell_number.indexOf(this.n-1),1)
          cell_number.splice(cell_number.indexOf(this.n+1),1)
          cell_number.splice(cell_number.indexOf(this.n+17),1)
          cell_number.splice(cell_number.indexOf(this.n+18),1)
          cell_number.splice(cell_number.indexOf(this.n+19),1)
        }
        // Choose the mines.
        shuffle(cell_number,true)
        for(let i = 0;i<30;i++){
          append(mine,cell_number[i])
        }
        for(let i = 0;i<30;i++){
          cell_list[mine[i]].m = true
        }
        reveal(this.n)
        begin = true
      }
    }
    else if (this.x < mouseX && mouseX < this.x + 37.5){
      if (this.y < mouseY && mouseY < this.y + 37.5){
        if (this.s == false){
          if (this.r == false){
            if (this.m == false){
              if(this.f == false){
                if(end == false){
                  myDig.stop()
                  myDig.play()
                  reveal(this.n)
                }
              }
            }
            else if(this.m == true && this.f == false){
              lose()
            }
          }
        }
        else if (this.s == true){
          // This code is set so that the user had to clicked twice to reveal a cell if the cell has snow of it.
          this.s = false
        }
      }
    }
  }
  flagged(){
    if (begin == true){
      if (this.r == false && end == false){
        if (this.x < mouseX && mouseX < this.x + 37.5){
          if (this.y < mouseY && mouseY < this.y + 37.5){
          // Changes the stats of the cell.
            this.f = !(this.f) 
            myFlag.play()
          }
        }
      }
    }
  }
}

/* Coding thoughts:
    At first, I thought that this game would be easy, but I am VERY wrong. So I decide to separate each part of the game to code, so it will be much easier.
    I separated the game into the according parts:
      1.Generation of mine
      2.Calculation of number blocks
      3.Chain reaction of opening an empty blocks
      4.Flag/Right Click
      5.Patterns of grass and dirt
      6.Disasters
      7.Game Over/Win
    1. Generation of mines
      At first, the mines is preset before the user clicked for their first time. If the first click is a mine, then it would move to left corner. If it is occupied, move on to the left and so on. But I realised that this system is unreliable.(What if the mine is still at the same spot after it is clicked?) So, I changed the system to only generate mine AFTER the usre clicked. This was successful. And I can always set the first block that the user click as empty!
      
    2. Calculation of number blocks
      There are different calculation of the number for:
        Corner blocks.
        Side blocks.
        Middle blocks.
      After doing some math, I realise that there are patterns for each kind of blocks. So now, the number is shown correctly.
      
    3.Chain reaction of opening an empty blocks
      Using the calculation method I did in 2, I coded so that if a cell is revealed and empty, it would reveal its surronding blocks. So now, if the user clicked on an empty cell, it would show its neighbours, and its neighbours' neighbours!
      
    4. Flag/Right Click
      Now it is simpler. I set that every time a mouse key is pressed, it would detect whether it's left key or right key. If it's right key, then flagged the cell. During the flag, the cell could not be revealed (Unless it is actually not a mine, and it is someone's neighbours.)
    
    5.Patterns of grass and dirt
      I just set that:
  if  rows columns output
are:  odd  odd      dark
      odd  even     light
      even odd      dark
      even even     light
      
    6. Disasters
      It is a very fun thing to code this since I am able to code my ideas into this.
      I set a time interval (30 seconds, or 30000 ms) to generate a number. And the number correpsonds to which event is happening. The timer displays the current time. The disasters are:
      Fog. I just use a grey rectangle with a 95% transparency
      Fradster. I generate a random number, and if the cell that corresponds with the number is not flagged, gets flagged
      Blizzard. Same method but the event turns the grass white.
      Balls. Old code with a little so that it is compatible with this program.
      Futuristic. The mose cursor is a barely visible white ellipse.
      Flickering. The mouse cursor keeps on switching.
      
    7. Game Over/ Win
      I made this at the last, since it is better to debug without lose or win detection that would stop the game.
      If the timer hits zero or the user clicked a mine, the game stopped and reveal all cells, and then game over.
      If all cells except mines are revealed, the the user would win and the game would stops.
      
    Overall, I think this program truly challenges my knowledge at coding and I am very glad that this game turns out great!
*/
