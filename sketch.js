var form;
var player;

function setup() {
  createCanvas(800,400);
  
}

function draw() {
  background(255,255,255);  

  form = new Form();
  form.display();

  drawSprites();
}