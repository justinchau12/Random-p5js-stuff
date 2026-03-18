/* 
This program works like this:
Put all questions into quiz_question.
Shuffle the questions.
Choose 10 and put them in quiz.
List out question in quiz and display them using quiz_question.
Correct, mark++. Wrong, next question and repeat.
*/

// Setting up variables.
intro = true
number = 0
mark = 0
quiz_question = []
choice = []
question = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
function preload(){
  img = loadImage('240x240bb.png')
  img1 = loadImage('profileIcon_tmvjz42zong61.webp')
  img2 = loadImage('iinqkP2UbVrH1J3IVEAdV0N4BnQvp7fYZQvs8fTmpxA.webp')
  img3 = loadImage('Artist\'s_concept_of_collision_at_HD_172555.jpg')
  img4 = loadImage('s9s.jpg')
  img5 = loadImage('Lspn_comet_halley.jpg')
  img6 = loadImage('Will-o-the-wisp_and_snake_by_Hermann_Hendrich_1823.jpg')
  img7 = loadImage('01-reference-volcanoes-cb9bmt.avif')
}

// Creating the intro page.
function setup() {
  createCanvas(400, 400);
  textSize(40)
  strokeWeight(5)
  textAlign(CENTER)
  start_b = createButton('Start')
  start_b.position(100,300)
  start_b.size(200,50)
  start_b.style('background-color','red')
  start_b.style('font-size','40px')
  start_b.mousePressed(start_q)
  shuffle(question,true)
  for (index = 0;index<10;index++){
    choice[index] = question[index]
  }
  
/*Question List*/{append(quiz_question, new MC('Which of the following -phobia is fake?',"Europhobia",'Pseudophobia','Terminphobia','Rhabdophobia',170,183,179,182))
  append(quiz_question, new MC('Which of the following -ism is fake?',"Epiphenomenalism",'Hyperparasitism','Thnetopsychism','Transgenicism',203,192,192,182))
  append(quiz_question, new MC('Captial of Togo?',"Lomé",'Tsévié','Kpalimé','Sokodé',166,169,179,175))
  append(quiz_question, new MC('Which is the last letter added to the alphabet?','W','J','Z','Q',173,173,173,173))
  append(quiz_question, new MC(' Who is the first scientist that proposed heliocentrism?',' Galileo Galilei','Nicolaus Copernicus','Johannes Kepler','William Lilly',173,210,191,169))
  append(quiz_question, new MC('How many quarks are there?','3','5','6','7',173,173,173,173))
  append(quiz_question, new MC('Which of the following opertion in history is fake?',' Operation Desert Hawk','Operation Trident','Operation Blackout','Operation Toenails',220,196,203,198))
  append(quiz_question, new TF('Colossial squids have four tentacles while giant squids have two tentacles only.'))
  append(quiz_question, new TF('In the history of England, there are two greats in total.'))
  append(quiz_question, new TF('1 yottabyte is equal to 1e+24 byte.'))
  append(quiz_question, new TF('The word lunatic originated from the Moon.'))
  append(quiz_question, new TF('Polish is the only offical langaugae in Poland-Lithuanian Commonwealth.'))
  append(quiz_question, new TF('The word Galaxy originated from galaxias kyklos, meaning milky road.'))
  append(quiz_question, new FIB('During tha battle of Vienna, the ___ Empire surrounded Vienna for two months.',1,img1))
  append(quiz_question, new FIB('The gas ___ is used during WW1 as toxic gas.',1,img2))
  append(quiz_question, new FIB('A Mars like planet collided with Earth around 4.5 billions years ago. It\'s called___.',1,img3))
  append(quiz_question, new FIB('Potassium derive from the word ___ in English for it is found in that.',1,img4))
  append(quiz_question, new FIB('___, is a comet that is only visible to theEarth every 75-79 years.',1,img5))
  append(quiz_question, new FIB('WILL-O’-THE-WISPS is caused by the burning of ___.',1,img6))
  append(quiz_question, new FIB('The word volcano means the island of ___.',1,img7))
  }
}
function draw(){
  background(220);
  if (intro == true){
    fill("white")
    rect(0,0,400,400)
    stroke('black')
    fill('lightgrey')
    textStyle(BOLD)
    text('Useless Facts Quiz!',200,100)
    img.resize(150,0)
    image(img,130,120)
  }
  // Display the questions
  if (intro == false){
    textAlign(CENTER)
    start_b.hide()
    fill("#DAC29E")
    rect(0,0,400,400)
    if (choice[number] == 1){
      quiz_question[0].display()
    }
    else if (choice[number] == 2){
      quiz_question[1].display()
    }
    else if (choice[number] == 3){
      quiz_question[2].display()
    }
    else if (choice[number] == 4){
      quiz_question[3].display()
    }
    else if (choice[number] == 5){
      quiz_question[4].display()
    }
    else if (choice[number] == 6){
      quiz_question[5].display()
    }
    else if (choice[number] == 7){
      quiz_question[6].display()
    }
    else if (choice[number] == 8){
      quiz_question[7].display()
    }
    else if (choice[number] == 9){
      quiz_question[8].display()
    }
    else if (choice[number] == 10){
      quiz_question[9].display()
    }
    else if (choice[number] == 11){
      quiz_question[10].display()
    }
    else if (choice[number] == 12){
      quiz_question[11].display()
    }
    else if (choice[number] == 13){
      quiz_question[12].display()
    }
    else if (choice[number] == 14){
      quiz_question[13].display()
    }
    else if (choice[number] == 15){
      quiz_question[14].display()
    }
    else if (choice[number] == 16){
      quiz_question[15].display()
    }
    else if (choice[number] == 17){
      quiz_question[16].display()
    }
    else if (choice[number] == 18){
      quiz_question[17].display()
    }
    else if (choice[number] == 19){
      quiz_question[18].display()
    }
    else if (choice[number] == 20){
      quiz_question[19].display()
    }
    else{
      end()
    }
  }
}

function start_q(){
  intro = false
}
// Determine whether the user inputed the correct answer.
// Mulitple choice (a,b,c,d)
function continue_qa(){
  quiz_question[number].vanish()
  if (choice[number] == 3 || choice[number] == 5){
    mark++
  }
  number++
}
function continue_qb(){
  quiz_question[number].vanish()
  if (choice[number] == 4){
    mark++
  }
  number++
}
function continue_qc(){
  quiz_question[number].vanish()
  if (choice[number] == 1 || choice[number] == 6 || choice[number] == 7){
    mark++
  }
  number++
}
function continue_qd(){
  quiz_question[number].vanish()
  if (choice[number] == 2){
    mark++
  }
  number++
}

// True and false (t,f)
function continue_t(){
  quiz_question[number].vanish()
  if (choice[number] == 10 || choice[number] == 11){
    mark++
  }
  number++
}
function continue_f(){
  quiz_question[number].vanish()
  if (choice[number] == 8 || choice[number] == 9 || choice[number] == 12 || choice[number] == 13){
    mark++
  }
  number++
}

// Fill in blanks (fib)
function continue_fib(){
  quiz_question[number].vanish()
  A = quiz_question[choice[number]-1].a.toLowerCase()
  if (choice[number] == 14){
    if (A == 'ottoman'){
      mark++
    }
  }
  else if (choice[number] == 15){
    if (A == 'chlorine'){
      mark++
    }
  }
  else if (choice[number] == 16){
    if (A == 'theia'){
      mark++
    }
  }
  else if (choice[number] == 17){
    if (A == 'potash'){
      mark++
    }
  }
  else if (choice[number] == 18){
    if (A == 'halley'){
      mark++
    }
  }
  else if (choice[number] == 19){
    if (A == 'methane'){
      mark++
    }
  }
  else if (choice[number] == 20){
    if (A == 'vulcan'){
      mark++
    }
  }
  number++
}

// Display the end scene after all questions is answered.
function end(){
  fill("grey")
  textSize(40)
  text('Quiz Finished!',200,50)
  fill("grey")
  textSize(20)
  text('Title',200,100)
  if (mark == 0){
    fill("brown")
    t = 'Player'
  }
  else if(mark <=3){
    fill("grey")
    t = 'Beginner'
  }
  else if(mark <=5){
    fill("rgb(77,69,69")
    t = 'Smarty'
  }
  else if(mark <=7){
    fill("skyblue")
    t = 'Professional'
  }
  else if(mark <=9){
    fill("red")
    t = 'Master'
  }
  else if(mark == 10){
    fill("yellow")
    t = 'Legend'
  }
  textSize(40)
  text(t,200,150)
  fill("#A178E9")
  textSize(80)
  text(mark+'/10',200,280)
}

// All the multiple questions.
class MC{
  constructor(q,a,b,c,d,ax,bx,cx,dx){
    this.q = q
    this.a = a
    this.b = b
    this.c = c
    this.d = d
    this.ax = ax
    this.bx = bx
    this.cx = cx
    this.dx = dx
  }
  display(){
    fill('lightgrey')
    textSize(20)
    text(this.q,0,50,400)
    this.buttonA = createButton('A')
    this.buttonA.position(50,120)
    this.buttonA.size(50,50)
    this.buttonA.style('background-color','red')
    this.buttonA.style('font-size','40px')
    this.buttonA.mousePressed(continue_qa)
    text(this.a,this.ax,150)
  
    this.buttonB = createButton('B')
    this.buttonB.position(50,190)
    this.buttonB.size(50,50)
    this.buttonB.style('background-color','yellow')
    this.buttonB.style('font-size','40px')
    this.buttonB.mousePressed(continue_qb)
    text(this.b,this.bx,220)
  
    this.buttonC = createButton('C')
    this.buttonC.position(50,260)
    this.buttonC.size(50,50)
    this.buttonC.style('background-color','lime')
    this.buttonC.style('font-size','40px')
    this.buttonC.mousePressed(continue_qc)
    text(this.c,this.cx,290)
    
    this.buttonD = createButton('D')
    this.buttonD.position(50,330)
    this.buttonD.size(50,50)
    this.buttonD.style('background-color','blue')
    this.buttonD.style('font-size','40px')
    this.buttonD.mousePressed(continue_qd)
    text(this.d,this.dx,360)
  }
  vanish(){
    removeElements()
  }
}
// All the true and false questions.
class TF{
  constructor(q){
    this.q = q
  }
  display(){
    fill('lightgrey')
    textSize(20)
    text(this.q,0,50,400)
    this.buttonT = createButton('TRUE')
    this.buttonT.position(125,175)
    this.buttonT.size(150,50)
    this.buttonT.style('background-color','lime')
    this.buttonT.style('font-size','40px')
    this.buttonT.mousePressed(continue_t)
  
    this.buttonF = createButton('FALSE')
    this.buttonF.position(125,290)
    this.buttonF.size(150,50)
    this.buttonF.style('background-color','red')
    this.buttonF.style('font-size','40px')
    this.buttonF.mousePressed(continue_f)
  }
  vanish(){
    removeElements()
  }
} 
// All the fill in the blank questions.
class FIB{
  constructor(q,n,p){
    this.q = q
    this.n = n
    this.p = p
  }
  display(){
    fill('lightgrey')
    textSize(20)
    text(this.q,0,50,400)
    image(this.p,125,190)
    this.p.resize(150,120)

    if (this.n == 1){
      this.t = createInput('Fill in one word.')
      this.n--
    }
    this.t.position(135,150)
    this.t.size(120,30)
    this.a = this.t.value()

    this.buttonS = createButton('Submit')
    this.buttonS.position(125,325)
    this.buttonS.size(150,50)
    this.buttonS.style('background-color','grey')
    this.buttonS.style('font-size','40px')
    this.buttonS.mousePressed(continue_fib)
  }
  vanish(){
    removeElements()
  }
}
