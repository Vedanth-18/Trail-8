const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var hero;
var block1, block2, block3, block4, block5,block6, block7, block8, block9, block10;
var bgImg;
var ground;
var chain;
var monsterBody;
var laserButton, buttonImg;
var laserImg;

function preload(){
    bgImg = loadImage("assets/bgImg.jpg");
    buttonImg = loadImage("assets/trashImg4.gif");
    laserImg = loadImage("assets/laser.png");
}

function setup(){
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  laserButton = createSprite(600, 300, 30,30);
  
  ground = new Ground(600, 565, 2400, 50);
  // block1= new Triangle(800, 500, 100,100);
  // block2 = new Triangle(1000, 500, 100,100);
  // block3 = new rectBox(900, 300,400, 30);
  // block4 = new squareBox(850,150);
  // block5 = new squareBox(950,150);
  // block6 = new rectBox(900, 50,400, 30);
  // block7= new Triangle(900, 0, 100,100);
  //block8 = new squareBox(850, 500, 40, 40);
  //block8 = new squareBox(950, 500, 40, 40);
  hero=new Hero(600, 100, PI/1);
  chain=new Chain(hero.body, {x:200, y:265});
  monsterBody = new Monster(1020, 295, PI/1);
}

function draw(){
    background(bgImg);
    drawSprites();
    mousePressed(laserButton);
    if(laserButton.visible=true){
         imageMode(CENTER);
        image(laserImg,850, 300, 5, 1200);
        image(laserImg, 800, 300, 5, 1200);
    }
    laserButton.addImage("laserButtonImg", buttonImg);
    //image(bgImg, 600, 300, 1200, 600);
    // block1.display();
    // block2.display();
    // block4.display();
    // block5.display();
    // block3.display();
    // block6.display();
    // block7.display();
    hero.display();
    chain.display();
    monsterBody.display();
    text(mouseX+","+mouseY,mouseX,mouseY);
    Engine.update(engine);
    
    //detectCollision(hero, monsterBody);
  }
 function mouseDragged(){
    Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
 }
 function mouseReleased(){
   chain.fly();
 }
 function keyPressed(){
   if(keyCode===32){
     chain.attach(hero.body);
   }
 }
 

 function detectCollision(body1, body2){
     var pos1 = body1.body.position;
     var pos2 = body2.body.position;
     var distance = dist(pos1.x, pos1.y, pos2.x, pos2.y);
     if(distance<=pos1.x/2+pos2.x/2){
        Matter.Body.setStatic(monsterBody.body, false);
     }
 }
 function mousePressed(object){
    object.visible=false;
 }