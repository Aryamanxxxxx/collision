var frect;
var mrect;
function setup() {
  createCanvas(1200,800);
  frect=createSprite(400,200,50,70);
  mrect=createSprite(600,300,70,50);
  frect.shapeColor="green";
  mrect.shapeColor="green";
  frect.debug=true;
  mrect.debug=true;
}

function draw() {
  background(255,255,255);
  if(mrect.x - frect.x <= mrect.width/2 + frect.width/2 
    && frect.x - mrect.x <= mrect.width/2 + frect.width/2 
    &&frect.y - mrect.y <= mrect.height/2 + frect.height/2
    && mrect.y - frect.y <= mrect.height/2 + frect.height/2 
  )
  {
    frect.shapeColor="red";
    mrect.shapeColor="red";
  }
  else
  {
    frect.shapeColor="green";
  mrect.shapeColor="green"; 
  }
  mrect.x=World.mouseX;
  mrect.y=World.mouseY;
  drawSprites();
}