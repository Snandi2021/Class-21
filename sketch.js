var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
function setup(){
  createCanvas(1200, 800);
  fixedRect = createSprite(600,400,50,80);
  fixedRect.shapeColor = "orange";
  fixedRect.debug=true;
  movingRect = createSprite(200,400,80,30);
  movingRect.shapeColor = "orange";
  movingRect.debug = true;
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "orange";
  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "orange";
  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor = "orange";
  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "orange";
}
function draw(){
  background(0);
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if(isTouching(movingRect, fixedRect)){
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
  }
  else
  {
    movingRect.shapeColor = "orange";
    fixedRect.shapeColor = "orange";
  }
  drawSprites();
}

function isTouching(object1, object2){


  if(object1.x-object2.x<object2.width/2+object1.width/2
  && object2.x-object1.x<object2.width/2+object1.width/2 
  && object1.y-object2.y<object2.height/2+object1.height/2
  && object2.y-object1.y<object2.height/2+object1.height/2 ){
  return true;
  }
  else{
    return false;
  }

}