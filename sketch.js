/*

The Game Project

Part 4

Side Scrolling

*/


var gameChar_x;
var gameChar_y;
var floorPos_y;

var isLeft;
var isRight;
var isPlummeting;
var isFalling;

var collectable;
var canyon;

var trees_x
var treePos_y;

var clouds;
var mountains;

function setup()
{
	createCanvas(1024, 576);
	floorPos_y = height * 3/4;
	gameChar_x = width/2;
	gameChar_y = floorPos_y;
    
    isLeft = false;
    isRight = false;
    isPlummeting = false;
    isFalling = false;
  
    collectable = {x_pos:100, y_pos: floorPos_y, size: 40, isFound: false};
  
    canyonPos_x = 247;
    canyonWidth = 100;
    
    trees_x = [400,600,800,1000];
    treePos_y = height/2;
    
    clouds = [
        {x_pos: 100, y_pos:100},
        {x_pos: 300, y_pos:100},
        {x_pos: 500, y_pos:100},
    ];
    
    mountains = [
        {x_pos: 400},
        {x_pos: 600},
        {x_pos: 900},
    ];
       
}

function draw()
{

	///////////DRAWING CODE//////////

	background(100,155,255); //fill the sky blue
   

	noStroke();
	fill(0,155,0);
	rect(0, floorPos_y, width, height - floorPos_y); //draw some green ground
    
    //draw the clouds
    for (var i = 0; i < clouds.length; i++){
    fill(255,255,255);
        
    ellipse(clouds[i].x_pos, clouds[i].y_pos+ 15, 80, 80);
   
    ellipse(clouds[i].x_pos-40,clouds[i].y_pos+15,60,60);
    
    ellipse(clouds[i].x_pos+40,clouds[i].y_pos+15,60,60);
    
    }
    //draw the mountains
    for (var i = 0; i < mountains.length; i++){
      fill(192,192,192);
        
      triangle
      (
          mountains[i].x_pos+112 , floorPos_y-162, mountains[i].x_pos-155, floorPos_y+10, mountains[i].x_pos+400, floorPos_y
      );
    }
    //draw the trees
    for(var i = 0; i< trees_x.length; i++)
  {
      console.log("trees loop" + i);
      //trees
    fill(120,100,40);
    rect(trees_x[i],treePos_y,60,150);
    
    //branches
    fill(0,155,0);
    
    triangle(trees_x[i] - 50, treePos_y + 50, trees_x[i]+30, treePos_y-50, trees_x[i] + 110, treePos_y+50);
   
    triangle(trees_x[i]-50, treePos_y, trees_x[i]+30, treePos_y-100, trees_x[i]+110, treePos_y);
  }
    
    
    
  //5. a collectable token 
	//... add your code here
  if(dist(gameChar_x, gameChar_y,collectable.x_pos, collectable.y_pos)<20)
    {
      collectable.isFound = true;
    }
  
  if(collectable.isFound == false)
    {
    ellipseMode(RADIUS);
    fill(255,215,0);
    ellipse(collectable.x_pos+20, collectable.y_pos-200, 30, 30); // Outer white ellipse
    ellipseMode(CENTER);
    fill(100);
    ellipse(collectable.x_pos+20,collectable.y_pos-200, 40, 40); // Inner gray ellipse
    }
  
	//draw the canyon
    if (
    gameChar_x > canyonPos_x &&
    gameChar_x < canyonPos_x + canyonWidth &&
    gameChar_y >= floorPos_y
  ) {
    isPlummeting = true;
    gameChar_y += 10;
   } 
  else 
  {
    isPlummeting = false;
  }
    fill(139,69,19);
    rect(canyonPos_x,429,canyonWidth,150);


	//the game character
	if(isLeft && isFalling)
	{
		// add your jumping-left code
    fill(200,150,150);
    ellipse(gameChar_x+1, gameChar_y-60,30);
    
    fill(255,0,0);
    rect(gameChar_x-2, gameChar_y-45,16,30);
    
    fill(0);
    rect(gameChar_x+5, gameChar_y-20,6,9);
    rect(gameChar_x-5, gameChar_y-20, 6,9);

	}
	else if(isRight && isFalling)
	{
		// add your jumping-right code
    fill(200,150,150);
    ellipse(gameChar_x-2, gameChar_y-60,30);
    
    fill(255,0,0);
    rect(gameChar_x-15, gameChar_y-45,16,30);
    
    fill(0);
    rect(gameChar_x, gameChar_y-20,6,9);
    rect(gameChar_x-10, gameChar_y-20, 6,9);

	}
	else if(isLeft)
	{
		// add your walking left code
    
    fill(200,150,150);
    ellipse(gameChar_x-2, gameChar_y-50,30);
    
    fill(255,0,0);
    rect(gameChar_x-15, gameChar_y-35,16,30);
    
    fill(0);
    rect(gameChar_x, gameChar_y-5,8,5);
    rect(gameChar_x-20, gameChar_y-8, 6,9);

	}
	else if(isRight)
	{
		// add your walking right code
    fill(200,150,150);
    ellipse(gameChar_x-2, gameChar_y-50,30);
    
    fill(255,0,0);
    rect(gameChar_x-15, gameChar_y-35,16,30);
    
    fill(0);
    rect(gameChar_x, gameChar_y-5,8,5);
    rect(gameChar_x-20, gameChar_y-8, 6,9);
    

	}
	else if(isFalling || isPlummeting)
	{
		// add your jumping facing forwards code
    fill(200,150,150);
    ellipse(gameChar_x, gameChar_y-60,27);
    
    fill(255,0,0);
    rect(gameChar_x - 10, gameChar_y-46,20,25);
    
    fill(0);
    rect(gameChar_x-10, gameChar_y-20,10,10);
    rect(gameChar_x-0,gameChar_y-20, 10,10);
    

	}
	else
	{
		// add your standing front facing code
    fill(200,150,150);
    ellipse(gameChar_x, gameChar_y-50,35);
    
    fill(255,0,0);
    rect(gameChar_x - 13, gameChar_y-35,26,30);
    
    fill(0);
    rect(gameChar_x-15, gameChar_y-5,10,10);
    rect(gameChar_x+5, gameChar_y-5, 10,10);
    
	}
    
    fill(0)
    text(mouseX + "," + mouseY, 20,20);
    
	///////////INTERACTION CODE//////////
	//Put conditional statements to move the game character below here
    if (isLeft == true)
        {
            gameChar_x -= 5;
            
        }
    if (isRight == true)
        {
            gameChar_x += 5 ;
        }
  
  if (gameChar_y < floorPos_y) {
    gameChar_y += 3;
    isFalling = true;
  } else isFalling = false;
    

}

if (isPlummeting){
    isLeft = false;
    isRight = false;
    gameChar_y += 3;
}

function keyPressed()
{
	// if statements to control the animation of the character when
	// keys are pressed.

	//open up the console to see how these work
	console.log("keyPressed: " + key);
	console.log("keyPressed: " + keyCode);
    
    if (keyCode == 37 )
        {
            console.log ("left arrow");
            isLeft = true;
        }
    else if (keyCode == 39)
        {
            console.log(" right arrow");
            isRight = true;
        }
  if (keyCode == 87 && gameChar_y == floorPos_y) {
    gameChar_y -= 200;
  }
}

function keyReleased()
{
	// if statements to control the animation of the character when
	// keys are released.

	console.log("keyReleased: " + key);
	console.log("keyReleased: " + keyCode);
    
    
    if (keyCode == 37)
    {
            console.log ("left arrow");
            isLeft = false;
    }
    else if (keyCode == 39)
    {
            console.log("right arrow");
            isRight = false;
    }
    
  
   
}