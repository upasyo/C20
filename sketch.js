var garden;
var cat ,cat_steady__Img,cat_running_Img,cat_collided_Img;
var mouse,mouse_steady_Img,mouse_enjoying_Img,mouse_collided_Img;

function preload() {
    garden=loadImage("images/garden.png");
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
 
    cat=createSprite(840, 600);
    cat.addAnimation("cat_steady",cat_steady_Img);
    cat.scale=0.1;
 

    mouse=createSprite(200, 600);
    mouse.addAnimation("mouse_steady",mouse_steady_Img);
    mouse.scale=0.1;
}

function draw() {
    background(garden);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){ 
      mouse.addAnimation("mouse_collided",mouse_collided_Img);
      mouse.changeAnimation("mouse_collided");
      cat.velocityX = 0; 
      cat.addAnimation("cat_collided", cat_collided_Img);
      cat.x=300;
      cat.scale=0.1;
      mouse.scale=0.1;
      cat.changeAnimation("cat_collided"); 
    }
   
    drawSprites();
}


function keyPressed(){
if(keyCode ===LEFT_ARROW){
    mouse.addAnimation("mouse_running",mouse_enjoying_Img);
    mouse.changeAnimation("mouse_running");
    mouse.frameDelay=25;

    cat.addAnimation("cat_running",cat_running_Img);
    cat.changeAnimation("cat_running");
    cat.velocityX=-2;
}

}
