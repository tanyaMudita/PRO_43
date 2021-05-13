var bg,bg2,bg3,form,system,code,security;
var score=0;
var trueImg,falseImg;
var t,f;
function preload() {
 
  
  bg= loadImage("aladdin_cave.jpg");
  //load image for the treasure background
  bg2=loadImage("aladdin_cave2.jpg")
  bg3=loadImage("treasure.jpg");
  trueImg=loadImage("true.png");
  falseImg=loadImage("false.png")
  
}

function setup() {
  createCanvas(1100,500);
  security = new Security();
  system = new System();
  
  
  t=createSprite(500,80,20,20);
  t.addImage(trueImg);
  t.scale=0.2;
  t.visible=false;

  f=createSprite(495,85,20,20);
  f.addImage(falseImg);
  f.scale=0.2;
  f.visible=false;

}

function draw() {
  background(bg);
  clues();
  clues2();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, 450, 50);

// add code for changing the background to the treasure background
  
  if(score === 2) {
    clear()
    background(bg2)
    clues2();
    security.display();
    t.visible=false;
    f.visible=false;
  }

  if(score === 3) {
    clear()
    t.visible=false;
    f.visible=false;
    background(bg3)
    fill("black")
    textSize(40);
    text("TREASURE UNLOCKED",240, 450);
  }
  drawSprites()
}

