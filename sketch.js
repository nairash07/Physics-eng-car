const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var car1 =[];
var car2 =[];
var maxCar1=5;
var maxCar2=5;
var car3; 
var backgroundImg,platform;
var invisibleGround;
var score=0;

var gameState = "onSling";
var bkgImage="bg.png"
function preload() {
    backgroundImg = loadImage("track1.jpg");
   
}

function setup(){
    var canvas = createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 300, 170);
    ground.x=ground.width/7;
    ground.velocityX=0;
   

   // car1 = new Car1(1200,110,110,50);
   // car2 = new Car2(1200,490,110,50);
    car3 = new Car3(100,310,110,50);
    

    if(frameCount%200===0){
        for(var i=0;i<maxCar1;i++){
    car1.push(new Car1(random(1200,0),110,110,50))
        }
    
    }
    if(frameCount%200===0){
        for(var i=0;i<maxCar2;i++){
    car2.push(new Car2(random(1200,0),490,110,50))
        }
    
    }
}

function draw(){
    
    Engine.update(engine);
    background(backgroundImg);

   /* if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
   */

   // getTime();
    //strokeWeight(4);
    textSize(20);
    fill("red");
    text("Score = "+score,width-200,30);
    //car1.display();
   // car2.display();
    car3.display();
    ground.display();
       
    for(var i=0;i<maxCar1;i++){
        car1[i].display();
        
    }
    for(var i=0;i<maxCar2;i++){
        car2[i].display();
        
    }
       //drawSprites(); 
}

function keyPressed(){
    if(keyCode===RIGHT_ARROW){
     car3.x=car3.x+20
    }
      //  var a=y-5
      //  Matter.Body.setPosition(car3.body,{x:mouseX,y:mouseY})
     
}

