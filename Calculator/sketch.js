function setup() {
  determine = 0
  createCanvas(400, 400)
  background(220)
  textAlign(CENTER)
  
// Drawing the button on the canva
  input = createInput('Enter first number')
  input.position(30,20)
  input.size(150,20)
  
  input2 = createInput('Enter second number')
  input2.position(220,20)
  input2.size(150,20)
  
  add = createButton('+')
  add.position(12,75)
  add.size(75,25)
  add.mousePressed(addS)
  add.style('background-color','white')
  
  minus = createButton('-')
  minus.position(112,75)
  minus.size(75,25)
  minus.mousePressed(minusS)
  minus.style('background-color','white')
  
  time = createButton('x')
  time.position(212,75)
  time.size(75,25)
  time.mousePressed(timeS)
  time.style('background-color','white')
  
  divide = createButton('÷')
  divide.position(312,75)
  divide.size(75,25)
  divide.mousePressed(divideS)
  divide.style('background-color','white')
  
  submit = createButton('Submit')
  submit.position(165,200)
  submit.size(75,25)
  submit.mousePressed(pressed)
  
  fill("white")
  rect(0,125,400,50)
  
}
function draw(){
  if (determine == 1){
    add.style('background-color','grey')
    minus.style('background-color','white')
    time.style('background-color','white')
    divide.style('background-color','white')
    add.style('color','crimson')
    minus.style('color','black')
    time.style('color','black')
    divide.style('color','black')
  }
  if (determine == 2){
    add.style('background-color','white')
    minus.style('background-color','grey')
    time.style('background-color','white')
    divide.style('background-color','white')
    add.style('color','black')
    minus.style('color','red')
    time.style('color','black')
    divide.style('color','black')
  }
  if (determine == 3){
    add.style('background-color','white')
    minus.style('background-color','white')
    time.style('background-color','grey')
    divide.style('background-color','white')
    add.style('color','black')
    minus.style('color','black')
    time.style('color','red')
    divide.style('color','black')
  }
  if (determine == 4){
    add.style('background-color','white')
    minus.style('background-color','white')
    time.style('background-color','white')
    divide.style('background-color','grey')
    add.style('color','black')
    minus.style('color','black')
    time.style('color','black')
    divide.style('color','red')
  }
}

// determine which button is clicked
function pressed(){
  fill('black')
  textSize(25)
  if (determine == 1){    
    fill("white")
    rect(0,125,400,50)
    fill('black')
    answer = int(input.value()) + int(input2.value())
    if (isNaN(answer) || answer == Infinity){
      t = ('ERROR!')
      text(t,200,160)
    }
    else{
      t = input.value() + '+' + input2.value() + '=' + answer
      text(t,200,160)
    }
  }
  else if (determine == 2){
    fill("white")
    rect(0,125,400,50)
    fill('black')
    answer = int(input.value()) - int(input2.value())
    if (isNaN(answer) || answer == Infinity){
      t = ('ERROR!')
      text(t,200,160)
    }
    else {
      t = input.value() + '-' + input2.value() + '=' + answer
      text(t,200,160)
    }
  }
  else if (determine == 3){
    fill("white")
    rect(0,125,400,50)
    fill('black')
    answer = int(input.value()) * int(input2.value())
    if (isNaN(answer) || answer == Infinity){
      t = ('ERROR!')
      text(t,200,160)
    }
    else {
      t = input.value() + 'x' + input2.value() + '=' + answer
      text(t,200,160)
    }
  }
  else if (determine == 4){
    fill("white")
    rect(0,125,400,50)
    fill('black')
    answer = int(input.value()) / int(input2.value())
    if (isNaN(answer) || answer == Infinity){
      t = ('ERROR!')
      text(t,200,160)
    }
    else {
      t = input.value() + '÷' + input2.value() + '=' + answer
      text(t,200,160)
    }
  }
  else{
    print('ERROR!')
  }
}
// Determine which calculation is picked
function addS(){
  determine = 1
}
function minusS(){
  determine = 2
}
function timeS(){
  determine = 3
}
function divideS(){
  determine = 4
}