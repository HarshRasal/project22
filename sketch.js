var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    // load sound here
     music=loadsound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,800);

    block1 = createSprite(0,580,360,30);
   

    block2 = createSprite(295,580,200,30);
    

    block3 = createSprite(590,580,200,30);
    
    block4 = createSprite(885,580,200,30);
   

    //create two more blocks i.e. block3 and block4 here

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = rgb(255,255,255);
    //write code to add velocityX and velocityY
    ball.velocityX=3;
    ball.velocityY=4;

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    ball.bounceOff(edges);
    block1.shapeColor = "blue";
    block2.shapeColor = "orange";
    block3.shapeColor = "green";
    block4.shapeColor = "red";

    
    //write code to bounce off ball from the block1 
    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = "blue";
        music.play();
    }



    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "orange";
        //write code to set velocityX and velocityY of ball as 0
        ball.velocityX=0;
        ball.velocityY=0;
        //write code to stop music
        music.stop();
    }

    //write code to bounce off ball from the block3
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "green";
    }    

    //write code to bounce off ball from the block4
    if(block2.isTouching(ball) && ball.bounceOff(block2)){
        ball.shapeColor = "red";
    }
    drawSprites();
}
