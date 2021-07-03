 const Engine=Matter.Engine
 const World=Matter.World
 const Bodies=Matter.Bodies
 var btn_red;
var btn_green;
var btn_blue;
var r=0;
var g=0;
var b=0;
 
 

 function setup() {
  createCanvas(1800,1400);
 // createSprite(400, 200, 50, 50);

engine=Engine.create()
world=engine.world
ball1=new Ball(200,200,30)
ball2=new Ball(300,300,30)
ground1= new Ground(500,900,900,40)
box1=new Box(400,300,40,40)
//console.log(ball)
btn_red=createButton("red")
   btn_red.position(30,10)
   btn_red.mousePressed(red_bg)

   btn_green=createButton("green")
   btn_green.position(60,10)
   btn_green.mousePressed(green_bg)

   btn_blue=createButton("blue")
   btn_blue.position(105,10)
   btn_blue.mousePressed(blue_bg)

   btn_text=createButton("CLICK ME")
   btn_text.position(500,200)
   btn_text.mousePressed(TextC)
}

function draw() {
  background(r,g,b);  
 // drawSprites();
 Engine.update(engine)
 ball1.display()
 ball2.display()
 box1.display()
 ground1.display()
 drawSprites()
 
}

 
 
 
 function red_bg(){
r=255;
g=0;
b=0;
btn_text.mousePressed(TextC)

 }
 function green_bg(){
   r=0;
   g=255;
   b=0;
   btn_text.mousePressed(TextC)
 }
 function blue_bg(){
   r=0;
   g=0;
   b=255;
   btn_text.mousePressed(TextC)
 }
 //function TextC(){
 
 //}
 function TextC(){
 
fill("white")
tree=createSprite(200,300,50,50)
 }