function setup() {
  createCanvas(400, 400);
  sliderR = createSlider(0,255,0)
  sliderR.style('width', '100px')
  sliderR.position(145, 80)
  sliderG = createSlider(0,255,0)
  sliderG.style('width', '100px')
  sliderG.position(145, 180)
  sliderB = createSlider(0,255,0)
  sliderB.style('width', '100px')
  sliderB.position(145, 280)
}

function draw() {
  R = sliderR.value()
  G = sliderG.value()
  B = sliderB.value()
  background(R,G,B);
  fill('white')
  textSize(50)
  textAlign(CENTER)
  textStyle("Stroke", 'black')
  text(str(R)+', '+str(G)+', '+str(B),200,370)
}