var bg, bgImg
var bottomGround
var topGround
var balloon, balloonImg

function preload(){
bgImg = loadImage("assets/bg.png")

balloonImg = loadAnimation("assets/balloon1.png","assets/balloon2.png","assets/balloon3.png")
}

function setup(){

createCanvas(600,400);
//background image
bg = createSprite(165,485,1,1);
bg.addImage(bgImg);
bg.scale = 1.3
bg.velocityX=-3;

//creating top and bottom grounds
bottomGround = createSprite(200,390,800,20);
bottomGround.visible = true;

topGround = createSprite(200,10,800,20);
topGround.shapeColor="red";
topGround.visible = false;
      
//creating balloon     
balloon = createSprite(100,200,20,50);
balloon.addAnimation("balloon",balloonImg);
balloon.scale = 0.2;



}

function draw() {
  
      background("black");
        
         if (bg.x < 10){
           bg.x = 400;
         }
         
         //making the hot air balloon jump
          if(keyDown("space")) {
            balloon.velocityY = -6 ;
          }

          //adding gravity
           balloon.velocityY = balloon.velocityY + 2;
   
           spawnGroundObs();
           // to stop it from falling
           balloon.collide(bottomGround);
        drawSprites();   
}
     function spawnGroundObs(){
       if(frameCount%60===0){
          var groundObs=createSprite(600,390,10,40)
          groundObs.velocityX=-3;
       }
     }
