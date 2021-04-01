var cat ,cat_steady__Img,cat_running_Img,cat_collided_Img;
var garden,garden_Img;
var mouse,mouse_steady_Img,mouse_enjoying_Img,mouse_collided_Img;

function preload() {
    garden_Img=loadImage("images/garden.png");
    cat_steady_Img=loadAnimation("images/cat1.png");
    cat_running_Img=loadAnimation("images/cat2.png","images/cat3.png");
    cat_collided_Img=loadAnimation("images/cat4.png");

    mouse_steady_Img=loadAnimation("images/mouse1.png");
    mouse_enjoying_Img=loadAnimation("images/mouse2.png","images/mouse3.png");
    mouse_collided_Img=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,650);
    //create tom and jerry sprites here
    garden=createSprite(300,300);
    garden.addImage(garden_Img);

    cat=createSprite(650,470);
    cat.addAnimation("cat_steady",cat_steady_Img);
    cat.addAnimation("cat_running",cat_running_Img);
    cat.addAnimation("cat_collided", cat_collided_Img);
    cat.scale=0.1;
 

    mouse=createSprite(200,470);
    mouse.addAnimation("mouse_steady",mouse_steady_Img);
    mouse.addAnimation("mouse_running",mouse_enjoying_Img);
    mouse.addAnimation("mouse_collided",mouse_collided_Img);
    mouse.scale=0.1;
}

function draw() {
    background(255);
    edges=createEdgeSprites();
    cat.collide(edges);
    mouse.collide(edges);
    //Write condition here to evalute if tom and jerry collide
  if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    mouse.changeAnimation("mouse_collided",mouse_collided_Img);
    cat.changeAnimation("cat_collided", cat_collided_Img);              
  }
   keyPressed();
    drawSprites();
}


function keyPressed(){
if(keyCode ===RIGHT_ARROW){
    mouse.changeAnimation("mouse_running",mouse_enjoying_Img);
    mouse.frameDelay=25;
}
  //For moving and changing animation write code here
  if(keyCode ===LEFT_ARROW){
    cat.changeAnimation("cat_running",cat_running_Img);
    cat.frameDelay=25;
    cat.velocityX=-2;
}

}
