/**
 * Created with JetBrains WebStorm.
 * User: Kappy
 * Date: 9/17/13
 * Time: 9:28 PM
 * To change this template use File | Settings | File Templates.
 */

//Setting up variables for the canvas, stage, and
//other elements for the game to run
var canvas, stage, bounds;
var g;

//Radius for drawing player circle **PROTOYPE ONLY**
var radius = 10;

//Useful keycode variables
var KEYCODE_ENTER = 13;
var KEYCODE_SPACE = 32;
var KEYCODE_UP = 38;
var KEYCODE_LEFT = 37;
var KEYCODE_RIGHT = 39;

//Keyboard event variables
var leftHeld, upHeld, rightHeld;

//Initialize game variables
var player, enemy;
var glass, glassInst, glassArr;
var glass1, glass2, glass3, glass4, glass5;
var orbs, orbInst, orbAni, numOrbs = 0;
var timerMsg;
var depthMeter, randDepth, depthAni;
var SEEK = true;  //CHANGE THIS TO TURN SEEKING ON AND OFF

var gravity = 0.3;
var playerAccel = 0;
var accelSide = 0.05;
var colBoxSizeY = 60;
var colBoxSizeX = 10;

var glassNumber = 8;  //CHANGE THIS TO CHANGE THE AMOUNT OF GLASS
var glassSpawnInterval = 300; //CHANGE THIS TO CHANGE HOW OFTEN GLASS SPAWNS
var orbSpawnInterval = 600;  //CHANGE THIS TO CHANGE HOW OFTEN ORBS SPAWN

//Key event initialization
document.onkeydown = handleKeyDown;
document.onkeyup = handleKeyUp;

function init()
{
    if(!(!!document.createElement('canvas').getContext))
    {
        var wrapper = document.getElementById("canvasWrapper");
        wrapper.innerHTML = "Your browser does not appear to support " +
            "the HTML5 Canvas element";
        return;
    }

    canvas = document.getElementById("canvas");
    stage = new createjs.Stage(canvas);

    var playerAni = new createjs.SpriteSheet({images: ["Swimming.png"], frames: [[0,0,208,139,0,108.65,69.6],[208,0,208,139,0,108.65,69.6],[416,0,208,139,0,108.65,69.6],[624,0,208,139,0,108.65,69.6],[0,139,208,139,0,108.65,69.6],[208,139,208,139,0,108.65,69.6],[416,139,208,139,0,108.65,69.6],[624,139,208,139,0,108.65,69.6],[0,278,208,139,0,108.65,69.6],[208,278,208,139,0,108.65,69.6],[416,278,208,139,0,108.65,69.6],[624,278,208,139,0,108.65,69.6],[0,417,208,139,0,108.65,69.6],[208,417,208,139,0,108.65,69.6],[416,417,208,139,0,108.65,69.6],[624,417,208,139,0,108.65,69.6],[0,556,208,139,0,108.65,69.6],[208,556,208,139,0,108.65,69.6],[416,556,208,139,0,108.65,69.6],[624,556,208,139,0,108.65,69.6],[0,695,208,139,0,108.65,69.6],[208,695,208,139,0,108.65,69.6]]});
    player = new createjs.Sprite(playerAni);
    player.x = canvas.width / 2;
    player.y = canvas.height / 2;
//    player.scaleX = 0.3;
//    player.scaleY = 0.3;
	stage.addChild(player);

    orbAni = new createjs.SpriteSheet({images: ["orbAni.png"], frames: [[0,0,841,807,0,419.65,411.9],[841,0,841,807,0,419.65,411.9],[1682,0,841,807,0,419.65,411.9],[2523,0,841,807,0,419.65,411.9],[3364,0,841,807,0,419.65,411.9],[4205,0,841,807,0,419.65,411.9],[5046,0,841,807,0,419.65,411.9],[5887,0,841,807,0,419.65,411.9],[6728,0,841,807,0,419.65,411.9],[0,807,841,807,0,419.65,411.9],[841,807,841,807,0,419.65,411.9],[1682,807,841,807,0,419.65,411.9],[2523,807,841,807,0,419.65,411.9],[3364,807,841,807,0,419.65,411.9],[4205,807,841,807,0,419.65,411.9],[5046,807,841,807,0,419.65,411.9],[5887,807,841,807,0,419.65,411.9],[6728,807,841,807,0,419.65,411.9],[0,1614,841,807,0,419.65,411.9],[841,1614,841,807,0,419.65,411.9],[1682,1614,841,807,0,419.65,411.9],[2523,1614,841,807,0,419.65,411.9],[3364,1614,841,807,0,419.65,411.9],[4205,1614,841,807,0,419.65,411.9],[5046,1614,841,807,0,419.65,411.9],[5887,1614,841,807,0,419.65,411.9],[6728,1614,841,807,0,419.65,411.9],[0,2421,841,807,0,419.65,411.9],[841,2421,841,807,0,419.65,411.9],[1682,2421,841,807,0,419.65,411.9],[2523,2421,841,807,0,419.65,411.9],[3364,2421,841,807,0,419.65,411.9],[4205,2421,841,807,0,419.65,411.9],[5046,2421,841,807,0,419.65,411.9],[5887,2421,841,807,0,419.65,411.9],[6728,2421,841,807,0,419.65,411.9],[0,3228,841,807,0,419.65,411.9],[841,3228,841,807,0,419.65,411.9],[1682,3228,841,807,0,419.65,411.9],[2523,3228,841,807,0,419.65,411.9],[3364,3228,841,807,0,419.65,411.9],[4205,3228,841,807,0,419.65,411.9],[5046,3228,841,807,0,419.65,411.9],[5887,3228,841,807,0,419.65,411.9],[6728,3228,841,807,0,419.65,411.9],[0,4035,841,807,0,419.65,411.9],[841,4035,841,807,0,419.65,411.9],[1682,4035,841,807,0,419.65,411.9]]});
    depthAni = new createjs.SpriteSheet({images: ["depthAni.png"], frames: [[0,0,355,237,0,177.45,114.5],[355,0,355,237,0,177.45,114.5],[710,0,355,237,0,177.45,114.5],[1065,0,355,237,0,177.45,114.5],[1420,0,355,237,0,177.45,114.5],[0,237,355,237,0,177.45,114.5],[355,237,355,237,0,177.45,114.5],[710,237,355,237,0,177.45,114.5],[1065,237,355,237,0,177.45,114.5],[1420,237,355,237,0,177.45,114.5],[0,474,355,237,0,177.45,114.5],[355,474,355,237,0,177.45,114.5],[710,474,355,237,0,177.45,114.5],[1065,474,355,237,0,177.45,114.5],[1420,474,355,237,0,177.45,114.5],[0,711,355,237,0,177.45,114.5],[355,711,355,237,0,177.45,114.5],[710,711,355,237,0,177.45,114.5],[1065,711,355,237,0,177.45,114.5],[1420,711,355,237,0,177.45,114.5]]});

    //Create the timer
    timerMsg = new createjs.Text('30', 'Bold 25px Arial', 'black');
    timerMsg.x = 20;
    timerMsg.y = 20;
    stage.addChild(timerMsg);

    //This is for the event listener added to the Ticker for the timer.
    //Thus, it is put in the init() function as part of initializing the timer.
    var delay = 60;
    var timer = function()
    {
        if(delay <= 0)
        {
            timerMsg.text = parseInt(timerMsg.text - 1);
            delay = 60;
        }
        delay--;
    }

    //Initialize the Depth Meter
    //depthMeter = new createjs.Shape();
    //depthMeter.graphics.beginFill("black").drawRect(650, 20, 25, 150);
    depthMeter = new createjs.Sprite(depthAni);
    depthMeter.x = 700;
    depthMeter.y = 100;
//    depthMeter.scaleX = 0.5;
//    depthMeter.scaleY = 0.5;
    stage.addChild(depthMeter);

    var randDelay = 60;
    randDepth = 0;

    randTimerMsg = new createjs.Text(randDepth, 'Bold 25px Arial', 'black');
    randTimerMsg.x = 50;
    randTimerMsg.y = 20;
    stage.addChild(randTimerMsg);

    var randTimer = function()
    {
        if(randDelay <= 0)
        {
            randDepth = Math.floor(Math.random() * 5);
            randTimerMsg.text = randDepth;
            randDelay = Math.floor(Math.random() * 601);
        }
        randDelay--;
    }

	//Create the glass
	glass = new Array();
	createGlassWave();

	orbs = new Array();
	createOrb();

    //Set the update loop
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", tick);
    createjs.Ticker.addEventListener("tick", timer);
    createjs.Ticker.addEventListener("tick", randTimer);
}

//Game Loop
function tick()
{
	var ticks = createjs.Ticker.getTicks(true);
	
	if(ticks % glassSpawnInterval == 0)
	{
		createGlassWave();
	}
	
	if(ticks % orbSpawnInterval == 0 && numOrbs < 3)
	{
		createOrb();
	}
	

	// PLAYER FUNCTIONS
    if(leftHeld)
    {
		//If player is not fully accelerated
		if(playerAccel > -0.3)
		{
			//Set player acceleration more left
			playerAccel -= accelSide;
		}
        console.log("leftKey is held!");
    }
	else //If not moving left
	{
		//Slowly come to a halt
		playerAccel -= (playerAccel/60);
	}
    
	if(rightHeld)
	{
		//If player is not fully accelerated
		if(playerAccel < 0.3)
		{
			//Set player acceleration more right
			playerAccel += accelSide;
		}
	}
	else //If not moving right
	{
	    //Slowly come to a halt
		playerAccel -= (playerAccel/60);
	}
	
	//ORBS
	
	//SEEK
	if(SEEK)
	{
		for(var i = 0; i < orbs.length; i++)
		{
			//If player is not moving, orbs stop
			orbs[i].velx = (player.x - orbs[i].x)/(Math.sqrt(distSq(orbs[i],player))) / 2;
			if(upHeld)
			{
				orbs[i].velx *= Math.abs(playerAccel)+0.5;
			}
			else
			{
				orbs[i].velx *= Math.abs(playerAccel);
			}
			orbs[i].vely = (player.y - orbs[i].y)/(Math.sqrt(distSq(orbs[i],player))) / 2;
			if(upHeld)
			{
				orbs[i].velx *= Math.abs(playerAccel)+0.5 ;
			}
			else
			{
				orbs[i].vely *= Math.abs(playerAccel);
			}
			
			orbs[i].x += orbs[i].velx;
			orbs[i].y += orbs[i].vely;
		}
	}
	
	//GLASS
	
	//SEEK
	if(SEEK)
	{
		for(var i = 0; i < glass.length; i++)
		{
			if(!glass[i].frozen)
			{
				glass[i].velx = (glass[i].target.x - glass[i].x)/400;
				glass[i].vely = (glass[i].target.y - glass[i].y)/400;
	
				glass[i].x += glass[i].velx;
				glass[i].y += glass[i].vely;
			}
		}
	}
	
	//COLLISIONS
	//If glass is inside collision box

	for(var i = 0; i < glass.length; i++)
	{
		if(player.x - colBoxSizeX < glass[i].x + 10
			&& player.x + colBoxSizeX > glass[i].x + 10
			&& player.y - colBoxSizeY < glass[i].y
			&& player.y + colBoxSizeY > glass[i].y)
		{
			knockBack();
		}
	}
	
	for(var i = 0; i < glass.length-1; i++)
	{
		for(var j = i+1; j < glass.length; j++)
		{
			if((!glass[i].frozen || !glass[j].frozen)
				&& glass[i].x - colBoxSizeX < glass[j].x + 10
				&& glass[i].x + colBoxSizeX > glass[j].x + 10
				&& glass[i].y - colBoxSizeY < glass[j].y
				&& glass[i].y + colBoxSizeY > glass[j].y)
			{
				glass[i].frozen = true;
				glass[j].frozen = true;
			}
		}
	}
	
	for(var i = 0; i < orbs.length; i++)
	{
		if(player.x - colBoxSizeX < orbs[i].x
			&& player.x + colBoxSizeX > orbs[i].x
			&& player.y - colBoxSizeY < orbs[i].y
			&& player.y + colBoxSizeY > orbs[i].y)
		{
			knockBack();
			orbs.splice(i, 1);
		}
	}
	
	//Exert acceleration on player
	player.x += playerAccel;
	
    if(upHeld)
    {
        player.y -= 0.5;
        player.play();
    }
    else
    {
        player.stop();
    }

	//Gravitate down
	gravitate(player);
	
	for(var i = 0; i < glass.length; i++)
	{
		gravitate(glass[i]);
	}

    //For the depth meter simulation
    switch(randDepth)
    {
        case 0:
            //depthMeter.graphics.clear().beginFill("black").drawRect(650, 20, 25, 150);
            depthMeter.gotoAndStop(0);
            break;
        case 1:
            //depthMeter.graphics.clear().beginFill("black").drawRect(650, 20, 25, 125);
            depthMeter.gotoAndStop(4);
            break;
        case 2:
            //depthMeter.graphics.clear().beginFill("black").drawRect(650, 20, 25, 100);
            depthMeter.gotoAndStop(8);
            break;
        case 3:
            //depthMeter.graphics.clear().beginFill("black").drawRect(650, 20, 25, 75);
            depthMeter.gotoAndStop(12);
            break;
        case 4:
            //depthMeter.graphics.clear().beginFill("black").drawRect(650, 20, 25, 50);
            depthMeter.gotoAndStop(17);
            break;
    }

    //depthMeter.play();
    orbInst.play();
    stage.update();
}

function createGlassWave()
{
	for(var i = 0; i < glassNumber; i++)
	{
        var a = Math.floor(Math.random() * 4);
         if(a == 0)
         {
             glassInst = new createjs.Bitmap("Shard01.png");
         }
        else if(a == 1)
         {
             glassInst = new createjs.Bitmap("Shard02.png");
         }
        else if(a == 2)
         {
             glassInst = new createjs.Bitmap("Shard03.png");
         }
        else if(a == 3)
         {
             glassInst = new createjs.Bitmap("Shard04.png");
         }
        else if(a == 4)
         {
             glassInst = new createjs.Bitmap("Shard05.png");
         }
        glassInst.scaleX = 0.3;
        glassInst.scaleY = 0.3;
		glassInst.x = (canvas.width / 2) + (Math.floor(Math.random()*4.5) *(canvas.width / 8) * ((Math.floor(Math.random()*2)*2)-1));
		glassInst.y = canvas.height / 2 - 255;
		glassInst.targetFound = false;
		glassInst.frozen = false;
		stage.addChild(glassInst);
		glass.push(glassInst);
		findNewTarget(glassInst);
	}
}

function createOrb()
{
//	orbInst = new createjs.Shape();
//	orbInst.graphics.beginFill("blue").drawCircle(0,0, radius);
    orbInst = new createjs.Sprite(orbAni);
	orbInst.x = (canvas.width / 2) + 350 * ((Math.floor(Math.random()*2)*2)-1);
	orbInst.y = (canvas.height / 2) + (Math.floor(Math.random()*3) *(canvas.height / 8) * ((Math.floor(Math.random()*2)*2)-1));
	stage.addChild(orbInst);
	orbs.push(orbInst);
    numOrbs++;
}

function distSq(a,b)
{
	var distance = ((b.x - a.x) * (b.x - a.x)) + ((b.y - a.y) * (b.y - a.y));
	return distance;
}

function findNewTarget(a)
{
	var shortest = 1000000;
	var curDist;
	var curTarget;
	for(var i = 0; i < glass.length; i++)
	{
		//if a and glass[i] are not the same
		if(a != glass[i])
		{
			curDist = distSq(a,glass[i]);
			//current distance is less than the shortest
			if(curDist < shortest)
			{
				shortest = curDist;
				curTarget = glass[i];
			}
		}
	}
	if(curTarget)
	{
		a.target = curTarget;
		curTarget.target = a;
		a.targetFound = true;
		curTarget.targetFound = true;
	}
}

function gravitate(p)
{
	p.y += gravity;
}

function handleKeyDown(e)
{
    if(!e)
    {
        var e = window.event;
    }

    if(e.keyCode == KEYCODE_LEFT)
    {
        leftHeld = true;
    }

    if(e.keyCode == KEYCODE_RIGHT)
    {
        rightHeld = true;
    }

    if(e.keyCode == KEYCODE_UP)
    {
        upHeld = true;
    }
}

function handleKeyUp(e)
{
    if(!e)
    {
        var e = window.event;
    }

    if(e.keyCode == KEYCODE_LEFT)
    {
        leftHeld = false;
    }

    if(e.keyCode == KEYCODE_RIGHT)
    {
        rightHeld = false;
    }

    if(e.keyCode == KEYCODE_UP)
    {
        upHeld = false;
    }
}

function knockBack()
{
    var playerY = player.y;
    console.log("Mouse clicked!");
    createjs.Tween.get(player).to({y:playerY + 90}, 1000, createjs.Ease.getPowOut(2.2));

}