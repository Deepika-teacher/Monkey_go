
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var survival_time=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}


function setup() {
  createCanvas(500,400);
  
  //Create monkey
  monkey=createSprite(150,300,40,150);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  //Create ground
  ground=createSprite(250,360,1200,15);
  ground.velocityX=-5;
  ground.x=ground.width/2;
  //ground.scale=0.4;
  
  foodGroup=createGroup();
  obstacleGroup=createGroup();
}


function draw() {
  background("white");
  
  survival_time=Math.ceil(frameCount/getFrameRate());
  textSize(25);
  fill("red");
  stroke("blue");
  text("Survival time: "+survival_time,180,80);
  
  //To reset the ground
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  //To jump the monkey
  if(keyDown("space")){
    monkey.velocityY=-12;
  }
  
  //Gravity to monkey
  monkey.velocityY=monkey.velocityY +0.9;
  
  //To collide mokey with ground
  monkey.collide(ground);
  
  //to spawn the bananas and obstacles
  spawnBanana();
  spawnObstacles();
  
  drawSprites();
  
}

function spawnBanana()
{
  if(frameCount % 80==0){
    //Create banana
    banana=createSprite(500,150,40,20);
    banana.velocityX=-4;
    banana.y=Math.round(random(120,200));
    banana.addImage("banana",bananaImage);
    banana.scale=0.1;
    
    //To avaoid memory leakage
    banana.lifetime=125;
    foodGroup.add(banana);
    
  }
}


function spawnObstacles()
{
  if(frameCount % 300==0){
    //Create banana
    obstacle=createSprite(500,380,40,20);
    obstacle.velocityX=-4;
    obstacle.y=Math.round(random(120,200));
    obstacle.addAnimation(obstacleImage);
    obstacle.scale=0.1;
    
    //To avaoid memory leakage
    obstacle.lifetime=125;
    obstacleGroup.add(obstacle);
    
  }
}



