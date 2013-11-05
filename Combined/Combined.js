var canvas, stage, whichStage;
var ga = 1.0;
var context = 0;
var timerId = 0;

function init()
{
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	pInit();
}

function fadeIn()
            {
                //context.clearRect(0,0, canvas.width,canvas.height);
                context.globalAlpha = ga;
				context.fillStyle = "rgba(0,0,0,ga)";
				context.fillRect(0,0,canvas.width,canvas.height);
                ga = ga - 0.01;
                if (ga < 0.0)
                {
					//createjs.Ticker.removeEventListener("tick", dTick);
                    clearInterval(timerId);
                }
            }

/*
*
* Party Phase
*
*/

var pStage;
var timesJumped = 0;

var partyBackground;

var partyJumpSheet;
var partyJump;

var partyJumpSheet02;
var partyJump02;

var partyJumpSheet03;
var partyJump03;

var partyJumpSheet04;
var partyJump04;

var partyJumpSheet05;
var partyJump05;

var partyJumpSheet06;
var partyJump06;


var pGroundHeight = 350;
var pJumping = false;
var partyVelocity = 0;
var pJumpSpeed = -13;
var partyGravity = 10;
var playerGravity = 10;

function pInit()
{
	whichStage = 0;
	document.onkeydown = keyDown;
    document.onkeyup = keyUp;
	
	if(!(!!document.createElement('canvas').getContext))
    {
        var wrapper = document.getElementById("canvasWrapper");
        wrapper.innerHTML = "Your browser does not appear to support " +
            "the HTML5 Canvas element";
        return;
    }
    pStage = new createjs.Stage(canvas);
	
	partyBackground = new createjs.Bitmap("Party_Background.png");
    partyBackground.y = 0;
	partyBackground.x = 0;
    pStage.addChild(partyBackground);
	
	partyJumpSheet = new createjs.SpriteSheet({images: ["Jumping_SpriteSheet.png"], frames: [[0,0,720,481,0,360,239.55],[720,0,720,481,0,360,239.55],[1440,0,720,481,0,360,239.55],[2160,0,720,481,0,360,239.55],[2880,0,720,481,0,360,239.55],[0,481,720,481,0,360,239.55],[720,481,720,481,0,360,239.55],[1440,481,720,481,0,360,239.55],[2160,481,720,481,0,360,239.55],[2880,481,720,481,0,360,239.55],[0,962,720,481,0,360,239.55],[720,962,720,481,0,360,239.55],[1440,962,720,481,0,360,239.55],[2160,962,720,481,0,360,239.55],[2880,962,720,481,0,360,239.55],[0,1443,720,481,0,360,239.55],[720,1443,720,481,0,360,239.55],[1440,1443,720,481,0,360,239.55],[2160,1443,720,481,0,360,239.55],[2880,1443,720,481,0,360,239.55],[0,1924,720,481,0,360,239.55],[720,1924,720,481,0,360,239.55],[1440,1924,720,481,0,360,239.55],[2160,1924,720,481,0,360,239.55],[2880,1924,720,481,0,360,239.55],[0,2405,720,481,0,360,239.55],[720,2405,720,481,0,360,239.55],[1440,2405,720,481,0,360,239.55],[2160,2405,720,481,0,360,239.55],[2880,2405,720,481,0,360,239.55],[0,2886,720,481,0,360,239.55],[720,2886,720,481,0,360,239.55],[1440,2886,720,481,0,360,239.55],[2160,2886,720,481,0,360,239.55],[2880,2886,720,481,0,360,239.55],[0,3367,720,481,0,360,239.55],[720,3367,720,481,0,360,239.55],[1440,3367,720,481,0,360,239.55],[2160,3367,720,481,0,360,239.55]]});
	partyJump = new createjs.Sprite(partyJumpSheet);
	partyJump.x = 350;
	partyJump.y = 350;
	partyJump.scaleX = 0.7;
	partyJump.scaleY = 0.7;
    pStage.addChild(partyJump);
	
	partyJumpSheet06 = new createjs.SpriteSheet({images: ["P01 Jumping.png"], frames: [[0,0,496,331,0,266.45,159.45],[496,0,496,331,0,266.45,159.45],[992,0,496,331,0,266.45,159.45],[1488,0,496,331,0,266.45,159.45],[1984,0,496,331,0,266.45,159.45],[2480,0,496,331,0,266.45,159.45],[2976,0,496,331,0,266.45,159.45],[3472,0,496,331,0,266.45,159.45],[0,331,496,331,0,266.45,159.45],[496,331,496,331,0,266.45,159.45],[992,331,496,331,0,266.45,159.45],[1488,331,496,331,0,266.45,159.45],[1984,331,496,331,0,266.45,159.45],[2480,331,496,331,0,266.45,159.45],[2976,331,496,331,0,266.45,159.45],[3472,331,496,331,0,266.45,159.45],[0,662,496,331,0,266.45,159.45],[496,662,496,331,0,266.45,159.45],[992,662,496,331,0,266.45,159.45],[1488,662,496,331,0,266.45,159.45],[1984,662,496,331,0,266.45,159.45],[2480,662,496,331,0,266.45,159.45],[2976,662,496,331,0,266.45,159.45],[3472,662,496,331,0,266.45,159.45],[0,993,496,331,0,266.45,159.45],[496,993,496,331,0,266.45,159.45],[992,993,496,331,0,266.45,159.45],[1488,993,496,331,0,266.45,159.45],[1984,993,496,331,0,266.45,159.45],[2480,993,496,331,0,266.45,159.45],[2976,993,496,331,0,266.45,159.45],[3472,993,496,331,0,266.45,159.45],[0,1324,496,331,0,266.45,159.45],[496,1324,496,331,0,266.45,159.45],[992,1324,496,331,0,266.45,159.45],[1488,1324,496,331,0,266.45,159.45],[1984,1324,496,331,0,266.45,159.45]]});
	partyJump06 = new createjs.Sprite(partyJumpSheet06);
	partyJump06.x = 550;
	partyJump06.y = 350;
	partyJump06.scaleX = -1;
    pStage.addChild(partyJump06);
	
	partyJumpSheet02 = new createjs.SpriteSheet({images: ["P02 Jump.png"], frames: [[0,0,457,305,0,256.9,147.95],[457,0,457,305,0,256.9,147.95],[914,0,457,305,0,256.9,147.95],[1371,0,457,305,0,256.9,147.95],[1828,0,457,305,0,256.9,147.95],[2285,0,457,305,0,256.9,147.95],[2742,0,457,305,0,256.9,147.95],[3199,0,457,305,0,256.9,147.95],[0,305,457,305,0,256.9,147.95],[457,305,457,305,0,256.9,147.95],[914,305,457,305,0,256.9,147.95],[1371,305,457,305,0,256.9,147.95],[1828,305,457,305,0,256.9,147.95],[2285,305,457,305,0,256.9,147.95],[2742,305,457,305,0,256.9,147.95],[3199,305,457,305,0,256.9,147.95],[0,610,457,305,0,256.9,147.95],[457,610,457,305,0,256.9,147.95],[914,610,457,305,0,256.9,147.95],[1371,610,457,305,0,256.9,147.95],[1828,610,457,305,0,256.9,147.95],[2285,610,457,305,0,256.9,147.95],[2742,610,457,305,0,256.9,147.95],[3199,610,457,305,0,256.9,147.95],[0,915,457,305,0,256.9,147.95],[457,915,457,305,0,256.9,147.95],[914,915,457,305,0,256.9,147.95],[1371,915,457,305,0,256.9,147.95],[1828,915,457,305,0,256.9,147.95],[2285,915,457,305,0,256.9,147.95],[2742,915,457,305,0,256.9,147.95],[3199,915,457,305,0,256.9,147.95],[0,1220,457,305,0,256.9,147.95]]});
	partyJump02 = new createjs.Sprite(partyJumpSheet02);
	partyJump02.x = 100;
	partyJump02.y = 350;
    pStage.addChild(partyJump02);
	
	partyJumpSheet03 = new createjs.SpriteSheet({images: ["P03 Jump.png"], frames: [[0,0,454,303,0,248,141],[454,0,454,303,0,248,141],[908,0,454,303,0,248,141],[1362,0,454,303,0,248,141],[1816,0,454,303,0,248,141],[2270,0,454,303,0,248,141],[2724,0,454,303,0,248,141],[3178,0,454,303,0,248,141],[3632,0,454,303,0,248,141],[0,303,454,303,0,248,141],[454,303,454,303,0,248,141],[908,303,454,303,0,248,141],[1362,303,454,303,0,248,141],[1816,303,454,303,0,248,141],[2270,303,454,303,0,248,141],[2724,303,454,303,0,248,141],[3178,303,454,303,0,248,141],[3632,303,454,303,0,248,141],[0,606,454,303,0,248,141],[454,606,454,303,0,248,141],[908,606,454,303,0,248,141],[1362,606,454,303,0,248,141],[1816,606,454,303,0,248,141],[2270,606,454,303,0,248,141],[2724,606,454,303,0,248,141],[3178,606,454,303,0,248,141],[3632,606,454,303,0,248,141],[0,909,454,303,0,248,141],[454,909,454,303,0,248,141],[908,909,454,303,0,248,141],[1362,909,454,303,0,248,141],[1816,909,454,303,0,248,141],[2270,909,454,303,0,248,141],[2724,909,454,303,0,248,141],[3178,909,454,303,0,248,141]]});
	partyJump03 = new createjs.Sprite(partyJumpSheet03);
	partyJump03.x = 200;
	partyJump03.y = 350;
    pStage.addChild(partyJump03);
	
	partyJumpSheet04 = new createjs.SpriteSheet({images: ["P04 Jump.png"], frames: [[0,0,403,269,0,184,127.45],[403,0,403,269,0,184,127.45],[806,0,403,269,0,184,127.45],[1209,0,403,269,0,184,127.45],[1612,0,403,269,0,184,127.45],[2015,0,403,269,0,184,127.45],[2418,0,403,269,0,184,127.45],[2821,0,403,269,0,184,127.45],[3224,0,403,269,0,184,127.45],[3627,0,403,269,0,184,127.45],[0,269,403,269,0,184,127.45],[403,269,403,269,0,184,127.45],[806,269,403,269,0,184,127.45],[1209,269,403,269,0,184,127.45],[1612,269,403,269,0,184,127.45],[2015,269,403,269,0,184,127.45],[2418,269,403,269,0,184,127.45],[2821,269,403,269,0,184,127.45],[3224,269,403,269,0,184,127.45],[3627,269,403,269,0,184,127.45],[0,538,403,269,0,184,127.45],[403,538,403,269,0,184,127.45],[806,538,403,269,0,184,127.45],[1209,538,403,269,0,184,127.45],[1612,538,403,269,0,184,127.45],[2015,538,403,269,0,184,127.45],[2418,538,403,269,0,184,127.45],[2821,538,403,269,0,184,127.45],[3224,538,403,269,0,184,127.45],[3627,538,403,269,0,184,127.45],[0,807,403,269,0,184,127.45],[403,807,403,269,0,184,127.45],[806,807,403,269,0,184,127.45],[1209,807,403,269,0,184,127.45],[1612,807,403,269,0,184,127.45]]});
	partyJump04 = new createjs.Sprite(partyJumpSheet04);
	partyJump04.x = 600;
	partyJump04.y = 350;
    pStage.addChild(partyJump04);
	
	partyJumpSheet05 = new createjs.SpriteSheet({images: ["P05 Jumping.png"], frames: [[0,0,475,317,0,266.1,149.1],[475,0,475,317,0,266.1,149.1],[950,0,475,317,0,266.1,149.1],[1425,0,475,317,0,266.1,149.1],[1900,0,475,317,0,266.1,149.1],[2375,0,475,317,0,266.1,149.1],[2850,0,475,317,0,266.1,149.1],[3325,0,475,317,0,266.1,149.1],[0,317,475,317,0,266.1,149.1],[475,317,475,317,0,266.1,149.1],[950,317,475,317,0,266.1,149.1],[1425,317,475,317,0,266.1,149.1],[1900,317,475,317,0,266.1,149.1],[2375,317,475,317,0,266.1,149.1],[2850,317,475,317,0,266.1,149.1],[3325,317,475,317,0,266.1,149.1],[0,634,475,317,0,266.1,149.1],[475,634,475,317,0,266.1,149.1],[950,634,475,317,0,266.1,149.1],[1425,634,475,317,0,266.1,149.1],[1900,634,475,317,0,266.1,149.1],[2375,634,475,317,0,266.1,149.1],[2850,634,475,317,0,266.1,149.1],[3325,634,475,317,0,266.1,149.1],[0,951,475,317,0,266.1,149.1],[475,951,475,317,0,266.1,149.1],[950,951,475,317,0,266.1,149.1],[1425,951,475,317,0,266.1,149.1],[1900,951,475,317,0,266.1,149.1],[2375,951,475,317,0,266.1,149.1],[2850,951,475,317,0,266.1,149.1],[3325,951,475,317,0,266.1,149.1],[0,1268,475,317,0,266.1,149.1],[475,1268,475,317,0,266.1,149.1]]});
	partyJump05 = new createjs.Sprite(partyJumpSheet05);
	partyJump05.x = 150;
	partyJump05.y = 350;
    pStage.addChild(partyJump05);
	
	//Update loop
	createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", partyTick);
}

function partyTick()
{
	//Update
	
	//Jump
	if(upKeyDown)
	{
		if(!pJumping)
		{
			timesJumped++;
			pJumping = true;
			partyJump.gotoAndPlay(0);
			partyJump02.gotoAndPlay(0);
			partyJump03.gotoAndPlay(0);
			partyJump04.gotoAndPlay(0);
			partyJump05.gotoAndPlay(0);
			partyJump06.gotoAndPlay(0);
			partyVelocity = pJumpSpeed;
		}
		if(partyJump.currentFrame >= 33)
		{
			partyJump.stop();
			partyJump02.stop();
			partyJump03.stop();
			partyJump04.stop();
			partyJump05.stop();
			partyJump06.stop();
			//jumping = false;
			partyVelocity = 0;
		}
	}
	else
	{
		if(partyJump.currentFrame >= 33)
		{
			partyJump.stop();
			partyJump02.stop();
			partyJump03.stop();
			partyJump04.stop();
			partyJump05.stop();
			partyJump06.stop();
	//		jumping = false;
			partyVelocity = 0;
		}
	}
	
	if(timesJumped >= 3)
	{
		//End party phase, transition to manic.
		playerGravity = 0;
		partyJump.y += -1;
		//Start fade out to manic here...
		if(partyJump.y <= -200)
		{
			createjs.Ticker.removeEventListener("tick", partyTick);
			mInit();
		}
	//	velocity = -5;
	}
	
	partyJump.y += partyVelocity;
	partyJump02.y += partyVelocity;
	partyJump03.y += partyVelocity;
	partyJump04.y += partyVelocity;
	partyJump05.y += partyVelocity;
	partyJump06.y += partyVelocity;
	
	if(partyJump.y < pGroundHeight)
	{
		partyJump.y += playerGravity;
	}
	
	if(partyJump02.y < pGroundHeight)
	{
		partyJump02.y += partyGravity;
		partyJump03.y += partyGravity;
		partyJump04.y += partyGravity;
		partyJump05.y += partyGravity;
		partyJump06.y += partyGravity;
	}
	else
	{
		pJumping = false;
	}
	
	//Draw
	
	pStage.update();
}

function keyDown(e)
{
    //w and up
    if(e.keyCode == 87 || e.keyCode == 38)
    {
        upKeyDown = true;
    }
	
    //d and right
    if((e.keyCode == 68 || e.keyCode == 39))
    {
        rightKeyDown = true;
    }
    //a and left
    else if((e.keyCode == 65 || e.keyCode == 37))
    {
		leftKeyDown = true;
    }
}

function keyUp(e)
{
    //w and up
    if(e.keyCode == 87 || 38)
    {
        upKeyDown = false;
    }
    //d and right
    if((e.keyCode == 68 || e.keyCode == 39))
    {
       rightKeyDown = false;
    }
    //a and left
    else if((e.keyCode == 65 || e.keyCode == 37))
    {
       leftKeyDown = false;
    }
}

/*
***************************************************************************************************************************************************************************************
* Depressive
***************************************************************************************************************************************************************************************
*/


/**
 * Created with JetBrains WebStorm.
 * User: Kappy
 * Date: 9/17/13
 * Time: 9:28 PM
 * To change this template use File | Settings | File Templates.
 */

//Setting up variables for the canvas, stage, and
//other elements for the game to run
var dstage;

//Useful keycode variables
var KEYCODE_ENTER = 13;
var KEYCODE_SPACE = 32;
var KEYCODE_UP = 38;
var KEYCODE_LEFT = 37;
var KEYCODE_RIGHT = 39;

//Keyboard event variables
var leftHeld, upHeld, rightHeld;

//Initialize game variables
var player;
var glass, glassInst;
var orbs, orbInst, orbAni;
var time = 30;
var dBackgroundScroll1, dBackgroundScroll2, scrollSpeed = 0.5;
var depthMeter, randDepth, depthAni;
var SEEK = true;  //CHANGE THIS TO TURN SEEKING ON AND OFF

var dGravity = 0.3;
var playerAccel = 0;
var accelSide = 0.02;
var colBoxSizeY = 25;
var colBoxSizeX = 10;

var glassNumber = 8;  //CHANGE THIS TO CHANGE THE AMOUNT OF GLASS
var glassSpawnInterval = 300; //CHANGE THIS TO CHANGE HOW OFTEN GLASS SPAWNS
var glassSpawnHeight = 275;
var orbSpawnInterval = 600;  //CHANGE THIS TO CHANGE HOW OFTEN ORBS SPAWN
var dBackgroundMusic, instance;

function dInit()
{
	whichStage = 2;
    //Key event initialization
    document.onkeydown = handleKeyDown;
    document.onkeyup = handleKeyUp;

    if(!(!!document.createElement('canvas').getContext))
    {
        var wrapper = document.getElementById("canvasWrapper");
        wrapper.innerHTML = "Your browser does not appear to support " +
            "the HTML5 Canvas element";
        return;
    }

    dstage = new createjs.Stage(canvas);

    dBackgroundScroll1 = new createjs.Bitmap("scrollDepressionBackground.png");
    dBackgroundScroll1.y = 0;
    dstage.addChild(dBackgroundScroll1);

    dBackgroundScroll2 = new createjs.Bitmap("scrollDepressionBackground.png");
    dBackgroundScroll2.y = -479;
    dstage.addChild(dBackgroundScroll2);

    var playerAni = new createjs.SpriteSheet({images: ["Swimming.png"], frames: [[0,0,208,139,0,108.65,69.6],[208,0,208,139,0,108.65,69.6],[416,0,208,139,0,108.65,69.6],[624,0,208,139,0,108.65,69.6],[0,139,208,139,0,108.65,69.6],[208,139,208,139,0,108.65,69.6],[416,139,208,139,0,108.65,69.6],[624,139,208,139,0,108.65,69.6],[0,278,208,139,0,108.65,69.6],[208,278,208,139,0,108.65,69.6],[416,278,208,139,0,108.65,69.6],[624,278,208,139,0,108.65,69.6],[0,417,208,139,0,108.65,69.6],[208,417,208,139,0,108.65,69.6],[416,417,208,139,0,108.65,69.6],[624,417,208,139,0,108.65,69.6],[0,556,208,139,0,108.65,69.6],[208,556,208,139,0,108.65,69.6],[416,556,208,139,0,108.65,69.6],[624,556,208,139,0,108.65,69.6],[0,695,208,139,0,108.65,69.6],[208,695,208,139,0,108.65,69.6]]});
    player = new createjs.Sprite(playerAni);
    player.x = canvas.width / 2;
    player.y = (canvas.height / 2) + 150;
    dstage.addChild(player);

    orbAni = new createjs.SpriteSheet({images: ["orbAni.png"], frames: [[0,0,721,481,0,355.5,230.5],[721,0,721,481,0,355.5,230.5],[1442,0,721,481,0,355.5,230.5],[2163,0,721,481,0,355.5,230.5],[2884,0,721,481,0,355.5,230.5],[3605,0,721,481,0,355.5,230.5],[4326,0,721,481,0,355.5,230.5],[5047,0,721,481,0,355.5,230.5],[5768,0,721,481,0,355.5,230.5],[6489,0,721,481,0,355.5,230.5],[7210,0,721,481,0,355.5,230.5],[0,481,721,481,0,355.5,230.5],[721,481,721,481,0,355.5,230.5],[1442,481,721,481,0,355.5,230.5],[2163,481,721,481,0,355.5,230.5],[2884,481,721,481,0,355.5,230.5],[3605,481,721,481,0,355.5,230.5],[4326,481,721,481,0,355.5,230.5],[5047,481,721,481,0,355.5,230.5],[5768,481,721,481,0,355.5,230.5],[6489,481,721,481,0,355.5,230.5],[7210,481,721,481,0,355.5,230.5],[0,962,721,481,0,355.5,230.5],[721,962,721,481,0,355.5,230.5],[1442,962,721,481,0,355.5,230.5],[2163,962,721,481,0,355.5,230.5],[2884,962,721,481,0,355.5,230.5],[3605,962,721,481,0,355.5,230.5],[4326,962,721,481,0,355.5,230.5],[5047,962,721,481,0,355.5,230.5],[5768,962,721,481,0,355.5,230.5],[6489,962,721,481,0,355.5,230.5],[7210,962,721,481,0,355.5,230.5],[0,1443,721,481,0,355.5,230.5],[721,1443,721,481,0,355.5,230.5],[1442,1443,721,481,0,355.5,230.5],[2163,1443,721,481,0,355.5,230.5],[2884,1443,721,481,0,355.5,230.5],[3605,1443,721,481,0,355.5,230.5],[4326,1443,721,481,0,355.5,230.5],[5047,1443,721,481,0,355.5,230.5],[5768,1443,721,481,0,355.5,230.5],[6489,1443,721,481,0,355.5,230.5],[7210,1443,721,481,0,355.5,230.5],[0,1924,721,481,0,355.5,230.5],[721,1924,721,481,0,355.5,230.5],[1442,1924,721,481,0,355.5,230.5],[2163,1924,721,481,0,355.5,230.5]]});
    depthAni = new createjs.SpriteSheet({images: ["depthAni.png"], frames: [[0,0,355,237,0,177.45,114.5],[355,0,355,237,0,177.45,114.5],[710,0,355,237,0,177.45,114.5],[1065,0,355,237,0,177.45,114.5],[1420,0,355,237,0,177.45,114.5],[0,237,355,237,0,177.45,114.5],[355,237,355,237,0,177.45,114.5],[710,237,355,237,0,177.45,114.5],[1065,237,355,237,0,177.45,114.5],[1420,237,355,237,0,177.45,114.5],[0,474,355,237,0,177.45,114.5],[355,474,355,237,0,177.45,114.5],[710,474,355,237,0,177.45,114.5],[1065,474,355,237,0,177.45,114.5],[1420,474,355,237,0,177.45,114.5],[0,711,355,237,0,177.45,114.5],[355,711,355,237,0,177.45,114.5],[710,711,355,237,0,177.45,114.5],[1065,711,355,237,0,177.45,114.5],[1420,711,355,237,0,177.45,114.5]]});

    //Create the timer
    //This is for the event listener added to the Ticker for the timer.
    //Thus, it is put in the init() function as part of initializing the timer.
    var delay = 60;
    var timer = function()
    {
        if(delay <= 0)
        {
            time--;
            delay = 60;
        }
        delay--;
    }

    //Initialize the Depth Meter
    depthMeter = new createjs.Sprite(depthAni);
    depthMeter.x = 700;
    depthMeter.y = 100;
    depthMeter.rotation = 180;
    dstage.addChild(depthMeter);

    var randDelay = 60;
    randDepth = 0;

    var randTimer = function()
    {
        if(randDelay <= 0)
        {
            randDepth = Math.floor(Math.random() * 5);
            randDelay = Math.floor(Math.random() * 601);
        }
        randDelay--;
    }

    //Create the glass
    glass = new Array();
    createGlassWave();

    orbs = new Array();
    createOrb();

    createjs.Sound.registerSound("depressionBGMusic", "bgMusicDepression");
    dBackgroundMusic = createjs.Sound.createInstance("bgMusicDepression");
    instance = createjs.Sound.play(dBackgroundMusic);

    //Set the update loop
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", dTick);
    createjs.Ticker.addEventListener("tick", timer);
    createjs.Ticker.addEventListener("tick", randTimer);
}

//Game Loop
function dTick()
{
    var ticks = createjs.Ticker.getTicks(true);

    if(ticks % glassSpawnInterval == 0)
    {
        createGlassWave();
    }

    if(ticks % orbSpawnInterval == 0 && orbs.length < 3)
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
        if(player.x - colBoxSizeX > glass[i].x - 10
            && player.x + colBoxSizeX < glass[i].x + 60
            && player.y - colBoxSizeY < glass[i].y + 35
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
                && glass[i].x - colBoxSizeX < glass[j].x - 10
                && glass[i].x + colBoxSizeX > glass[j].x + 10
                && glass[i].y - colBoxSizeY < glass[j].y
                && glass[i].y + colBoxSizeY > glass[j].y)
            {
                glass[i].frozen = true;
                glass[j].frozen = true;
            }
        }
    }

    for(var i = orbs.length - 1; i >= 0; i--)
    {
        if(player.x - colBoxSizeX < orbs[i].x
            && player.x + colBoxSizeX > orbs[i].x
            && player.y - colBoxSizeY < orbs[i].y
            && player.y + colBoxSizeY > orbs[i].y)
        {
            knockBack();
            orbs[i].visible = false;
            orbs.splice(i, 1);
        }
    }

    //Exert acceleration on player
    player.x += playerAccel;

    if(upHeld)
    {
        player.y -= 0.4;
        player.play();
    }
    else
    {
        player.stop();
    }

    //Gravitate down
    gravitate(player);

	if(player.x > canvas.width - 11)
	{
		player.x = canvas.width - 11;
	}
	
	if(player.x < 12)
	{
		player.x = 12;
	}
	
	if(player.y > canvas.height - 20)
	{
		player.y = canvas.height - 20;
	}
	
	if(player.y < 30)
	{
		player.y = 30;
	}
	
    for(var i = 0; i < glass.length; i++)
    {
        gravitate(glass[i]);
    }

    //For the depth meter simulation
    switch(randDepth)
    {
        case 0:
            depthMeter.gotoAndStop(0);
            break;
        case 1:
            depthMeter.gotoAndStop(4);
            break;
        case 2:
            depthMeter.gotoAndStop(8);
            break;
        case 3:
            depthMeter.gotoAndStop(12);
            break;
        case 4:
            depthMeter.gotoAndStop(17);
            break;
    }

    instance.play({loop:-1});
    scrollBackground();
    orbInst.play();
	if(time < 0)
    {
		timerId = setInterval("fadeIn()", 1000);
    }
    dstage.update();
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
        glassInst.x = (canvas.width / 2) + (Math.floor(Math.random()*4.5) *(canvas.width / 8) * ((Math.floor(Math.random()*2)*2)-1));
        glassInst.y = canvas.height / 2 - glassSpawnHeight;
        glassInst.targetFound = false;
        glassInst.frozen = false;
        dstage.addChild(glassInst);
        glass.push(glassInst);
        findNewTarget(glassInst);
    }
}

function createOrb()
{
    orbInst = new createjs.Sprite(orbAni);
    orbInst.x = (canvas.width / 2) + 350 * ((Math.floor(Math.random()*2)*2)-1);
    orbInst.y = (canvas.height / 2) + (Math.floor(Math.random()*3) *(canvas.height / 8) * ((Math.floor(Math.random()*2)*2)-1));
    dstage.addChild(orbInst);
    orbs.push(orbInst);
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
    p.y += dGravity;
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

function scrollBackground()
{
    dBackgroundScroll1.y += scrollSpeed;
    dBackgroundScroll2.y += scrollSpeed;

    if(dBackgroundScroll1.y > 479)
    {
        dBackgroundScroll1.y = -479;
    }
    else if(dBackgroundScroll2.y > 479)
    {
        dBackgroundScroll2.y = -479;
    }
}

/*
***************************************************************************************************************************************************************************************
* Manic
***************************************************************************************************************************************************************************************
*/


var mstage;
var circle;

var bpNewSprite;// = new createjs.SpriteSheet({animations: {brokenplatform: [1,35]}, images: ["Fixed_Platform_Break.png"], frames: [[0,0,192,380,0,96,189.05],[192,0,192,380,0,96,189.05],[384,0,192,380,0,96,189.05],[576,0,192,380,0,96,189.05],[768,0,192,380,0,96,189.05],[960,0,192,380,0,96,189.05],[1152,0,192,380,0,96,189.05],[1344,0,192,380,0,96,189.05],[1536,0,192,380,0,96,189.05],[1728,0,192,380,0,96,189.05],[0,380,192,380,0,96,189.05],[192,380,192,380,0,96,189.05],[384,380,192,380,0,96,189.05],[576,380,192,380,0,96,189.05],[768,380,192,380,0,96,189.05],[960,380,192,380,0,96,189.05],[1152,380,192,380,0,96,189.05],[1344,380,192,380,0,96,189.05],[1536,380,192,380,0,96,189.05],[1728,380,192,380,0,96,189.05],[0,760,192,380,0,96,189.05],[192,760,192,380,0,96,189.05],[384,760,192,380,0,96,189.05],[576,760,192,380,0,96,189.05],[768,760,192,380,0,96,189.05],[960,760,192,380,0,96,189.05],[1152,760,192,380,0,96,189.05],[1344,760,192,380,0,96,189.05],[1536,760,192,380,0,96,189.05],[1728,760,192,380,0,96,189.05],[0,1140,192,380,0,96,189.05],[192,1140,192,380,0,96,189.05],[384,1140,192,380,0,96,189.05],[576,1140,192,380,0,96,189.05],[768,1140,192,380,0,96,189.05],[960,1140,192,380,0,96,189.05]]});
var bpSprite;// = new createjs.Sprite(bpNewSprite);
//mstage.addChild(bpSprite);

//Fractal Background & Reveal
//var backgroundImg = new Image();
//var pixelArray = createArray(720,480);
var bgAnimationFrame = 0;
//backgroundImg.src = "Fractal Animation/Fractal_SpriteSheet.png";

//createjs stuff, incase we decide to do this.. personally I could not get it working
var bgAnimation;// = new createjs.SpriteSheet({images: ["Fractal Animation/Fractal_SpriteSheet.png"], frames: [[0,0,720,481,0,360,239.55],[720,0,720,481,0,360,239.55],[1440,0,720,481,0,360,239.55],[2160,0,720,481,0,360,239.55],[2880,0,720,481,0,360,239.55],[0,481,720,481,0,360,239.55],[720,481,720,481,0,360,239.55],[1440,481,720,481,0,360,239.55],[2160,481,720,481,0,360,239.55],[2880,481,720,481,0,360,239.55],[0,962,720,481,0,360,239.55],[720,962,720,481,0,360,239.55],[1440,962,720,481,0,360,239.55],[2160,962,720,481,0,360,239.55],[2880,962,720,481,0,360,239.55],[0,1443,720,481,0,360,239.55],[720,1443,720,481,0,360,239.55],[1440,1443,720,481,0,360,239.55],[2160,1443,720,481,0,360,239.55],[2880,1443,720,481,0,360,239.55],[0,1924,720,481,0,360,239.55],[720,1924,720,481,0,360,239.55],[1440,1924,720,481,0,360,239.55],[2160,1924,720,481,0,360,239.55],[2880,1924,720,481,0,360,239.55],[0,2405,720,481,0,360,239.55],[720,2405,720,481,0,360,239.55],[1440,2405,720,481,0,360,239.55],[2160,2405,720,481,0,360,239.55],[2880,2405,720,481,0,360,239.55],[0,2886,720,481,0,360,239.55]]});
var bgSprite;// = new createjs.Sprite(bgAnimation,1);


//Timer/Phase Ending
var endManic = false;
var startTime = 60;
var cTime = startTime;
//var lastTime;

//Player
//var playerImg = new Image();
//playerImg.src = "Manic_Fly/ManicFly_SpriteSheet.png";
//var playerImgFrame = 0;
//398-329 = width
//335-94 = height
var playerWidth = 15;//69 * (144/720);//(329*(144/720));
var playerHeight = 46;//241 * (96/480);//(94*(96/480));

var playerwidth = 69;// playerImg.clientWidth;
var playerheight = 241;//playerImg.clientHeight;

var rightKeyDown = false;
var leftKeyDown = false;
var upKeyDown = false;
var playerSpeed = 0;
var maxPlayerSpeed = 10;
var upSpeed = 0;
var gravity = 10;
var velocity = 0;
var tempVel = 0;
var tempPos = 0;
var standstill = false;
var acceleration = gravity/27;
var jumpStrength = 13//7.25;
var friction = 1;
var gameOver = false;

//Broken Platforms
//var brokenPlatformImg = new Image();
//brokenPlatformImg.src = "Platforms/Fixed_Platform_Break_02.png"  ;
//Platforms
var platformGravity = 0;
//var platformImg = new Image();
//platformImg.src = "platform.png";
var plX = 720 - 64;
var plY = 360;
var platwidth = 96;
var platheight = 32;
var offset = 40;
var gravcheck = 0;

//Person
//var personImg = new Image();
//personImg.src = "New Smaller Person.png";
//var personframe = 1;
var personCounter = 6;

var platformSheet;

var platformAni01;
var platformAni02;
var platformAni03;
var platformAni04;
var platformAni05;

var bplatformAni01;
var bplatformAni02;

var playerImg;
var flyingPlayer;
var childSheet;

var p1;
var p2;
var p3;
var p4;
var p5;

var bp1;
var bp2;

var sparkleSheet;
var sparkle1;

var testAni;

function mInit()
{
	whichStage = 1;
	if(!(!!document.createElement('canvas').getContext))
	{
		var wrapper = document.getElementById("canvasWrapper");
		wrapper.innerHTML = "Your browser does not appear to support " +
			"the HTML5 Canvas element";
		return;
	}
	
	document.onkeydown = keyDownListener;
	document.onkeyup = keyUpListener;

	//canvas = document.getElementById("canvas");
	mstage = new createjs.Stage(canvas);
	
	cTime = startTime;
	
	//Sprites
	bgAnimation = new createjs.SpriteSheet({images: ["Fractal Animation/Fractal_SpriteSheet.png"], frames: [[0,0,720,481,0,360,239.55],[720,0,720,481,0,360,239.55],[1440,0,720,481,0,360,239.55],[2160,0,720,481,0,360,239.55],[2880,0,720,481,0,360,239.55],[0,481,720,481,0,360,239.55],[720,481,720,481,0,360,239.55],[1440,481,720,481,0,360,239.55],[2160,481,720,481,0,360,239.55],[2880,481,720,481,0,360,239.55],[0,962,720,481,0,360,239.55],[720,962,720,481,0,360,239.55],[1440,962,720,481,0,360,239.55],[2160,962,720,481,0,360,239.55],[2880,962,720,481,0,360,239.55],[0,1443,720,481,0,360,239.55],[720,1443,720,481,0,360,239.55],[1440,1443,720,481,0,360,239.55],[2160,1443,720,481,0,360,239.55],[2880,1443,720,481,0,360,239.55],[0,1924,720,481,0,360,239.55],[720,1924,720,481,0,360,239.55],[1440,1924,720,481,0,360,239.55],[2160,1924,720,481,0,360,239.55],[2880,1924,720,481,0,360,239.55],[0,2405,720,481,0,360,239.55],[720,2405,720,481,0,360,239.55],[1440,2405,720,481,0,360,239.55],[2160,2405,720,481,0,360,239.55],[2880,2405,720,481,0,360,239.55],[0,2886,720,481,0,360,239.55]]});
	bgSprite = new createjs.Sprite(bgAnimation,0);
	bgSprite.x = 360;
	bgSprite.y = 240;
	stage.addChild(bgSprite);

	bpNewSprite = new createjs.SpriteSheet({animations: {brokenplatform: [1,35]}, images: ["Fixed_Platform_Break.png"], frames: [[0,0,192,380,0,96,189.05],[192,0,192,380,0,96,189.05],[384,0,192,380,0,96,189.05],[576,0,192,380,0,96,189.05],[768,0,192,380,0,96,189.05],[960,0,192,380,0,96,189.05],[1152,0,192,380,0,96,189.05],[1344,0,192,380,0,96,189.05],[1536,0,192,380,0,96,189.05],[1728,0,192,380,0,96,189.05],[0,380,192,380,0,96,189.05],[192,380,192,380,0,96,189.05],[384,380,192,380,0,96,189.05],[576,380,192,380,0,96,189.05],[768,380,192,380,0,96,189.05],[960,380,192,380,0,96,189.05],[1152,380,192,380,0,96,189.05],[1344,380,192,380,0,96,189.05],[1536,380,192,380,0,96,189.05],[1728,380,192,380,0,96,189.05],[0,760,192,380,0,96,189.05],[192,760,192,380,0,96,189.05],[384,760,192,380,0,96,189.05],[576,760,192,380,0,96,189.05],[768,760,192,380,0,96,189.05],[960,760,192,380,0,96,189.05],[1152,760,192,380,0,96,189.05],[1344,760,192,380,0,96,189.05],[1536,760,192,380,0,96,189.05],[1728,760,192,380,0,96,189.05],[0,1140,192,380,0,96,189.05],[192,1140,192,380,0,96,189.05],[384,1140,192,380,0,96,189.05],[576,1140,192,380,0,96,189.05],[768,1140,192,380,0,96,189.05],[960,1140,192,380,0,96,189.05]]});
	bpSprite = new createjs.Sprite(bpNewSprite);
	stage.addChild(bpSprite);
	
	platformSheet = new createjs.SpriteSheet({images: ["Platforms/Small Platform Break Animation.png"], frames: [[0,0,132,191,0,65,94.5],[132,0,132,191,0,65,94.5],[264,0,132,191,0,65,94.5],[396,0,132,191,0,65,94.5],[528,0,132,191,0,65,94.5],[660,0,132,191,0,65,94.5],[792,0,132,191,0,65,94.5],[924,0,132,191,0,65,94.5],[1056,0,132,191,0,65,94.5],[1188,0,132,191,0,65,94.5],[1320,0,132,191,0,65,94.5],[1452,0,132,191,0,65,94.5],[1584,0,132,191,0,65,94.5],[1716,0,132,191,0,65,94.5],[1848,0,132,191,0,65,94.5],[0,191,132,191,0,65,94.5],[132,191,132,191,0,65,94.5],[264,191,132,191,0,65,94.5],[396,191,132,191,0,65,94.5],[528,191,132,191,0,65,94.5],[660,191,132,191,0,65,94.5],[792,191,132,191,0,65,94.5],[924,191,132,191,0,65,94.5],[1056,191,132,191,0,65,94.5],[1188,191,132,191,0,65,94.5],[1320,191,132,191,0,65,94.5],[1452,191,132,191,0,65,94.5],[1584,191,132,191,0,65,94.5],[1716,191,132,191,0,65,94.5],[1848,191,132,191,0,65,94.5],[0,382,132,191,0,65,94.5],[132,382,132,191,0,65,94.5],[264,382,132,191,0,65,94.5],[396,382,132,191,0,65,94.5],[528,382,132,191,0,65,94.5],[660,382,132,191,0,65,94.5]]});
    platformAni01 = new createjs.Sprite(platformSheet);
	platformAni01.x = 400;
	platformAni01.y = 270;
    stage.addChild(platformAni01);
	
    platformAni02 = new createjs.Sprite(platformSheet);
	platformAni02.x = 100;
	platformAni02.y = 100;
    stage.addChild(platformAni02);
	
    platformAni03 = new createjs.Sprite(platformSheet);
	platformAni03.x = 600;
	platformAni03.y = 410;
    stage.addChild(platformAni03);
	
    platformAni04 = new createjs.Sprite(platformSheet);
	platformAni04.x = 3;
	platformAni04.y = 350;
    stage.addChild(platformAni04);
	
    platformAni05 = new createjs.Sprite(platformSheet);
	platformAni05.x = 500;
	platformAni05.y = 50;
    stage.addChild(platformAni05);
	
    bplatformAni01 = new createjs.Sprite(platformSheet);
	bplatformAni01.x = -100;
	bplatformAni01.y = -100;
    stage.addChild(bplatformAni01);
	
    bplatformAni02 = new createjs.Sprite(platformSheet);
	bplatformAni02.x = -100;
	bplatformAni02.y = -100;
    stage.addChild(bplatformAni02);

    playerImg = new createjs.SpriteSheet({images: ["Manic_Fly/Small ManicFly Animation.png"], frames: [[0,0,141,94,0,72.95,41.55],[141,0,141,94,0,72.95,41.55],[282,0,141,94,0,72.95,41.55],[423,0,141,94,0,72.95,41.55],[564,0,141,94,0,72.95,41.55],[705,0,141,94,0,72.95,41.55],[846,0,141,94,0,72.95,41.55],[0,94,141,94,0,72.95,41.55],[141,94,141,94,0,72.95,41.55],[282,94,141,94,0,72.95,41.55],[423,94,141,94,0,72.95,41.55],[564,94,141,94,0,72.95,41.55],[705,94,141,94,0,72.95,41.55],[846,94,141,94,0,72.95,41.55],[0,188,141,94,0,72.95,41.55],[141,188,141,94,0,72.95,41.55],[282,188,141,94,0,72.95,41.55],[423,188,141,94,0,72.95,41.55],[564,188,141,94,0,72.95,41.55],[705,188,141,94,0,72.95,41.55]]});
    flyingPlayer = new createjs.Sprite(playerImg);
	flyingPlayer.x = 360-32;
	flyingPlayer.y = 240;
    stage.addChild(flyingPlayer);

    childsheet =  new createjs.SpriteSheet({images: ["Platforms/Small Person 01 Animation.png"], frames: [[0,0,124,83,0,66,38.1],[124,0,124,83,0,66,38.1],[248,0,124,83,0,66,38.1],[372,0,124,83,0,66,38.1],[0,83,124,83,0,66,38.1],[124,83,124,83,0,66,38.1],[248,83,124,83,0,66,38.1],[372,83,124,83,0,66,38.1],[0,166,124,83,0,66,38.1],[124,166,124,83,0,66,38.1],[248,166,124,83,0,66,38.1],[372,166,124,83,0,66,38.1],[0,249,124,83,0,66,38.1],[124,249,124,83,0,66,38.1],[248,249,124,83,0,66,38.1],[372,249,124,83,0,66,38.1],[0,332,124,83,0,66,38.1],[124,332,124,83,0,66,38.1],[248,332,124,83,0,66,38.1],[372,332,124,83,0,66,38.1],[0,415,124,83,0,66,38.1],[124,415,124,83,0,66,38.1]]});
    person1s = new createjs.Sprite(childsheet);
	person1s.x = -200;
	person1s.y = 500;
    stage.addChild(person1s);

    childSheet2 = new createjs.SpriteSheet({images: ["Platforms/Person 02.png"], frames: [[0,0,283,189,0,153.5,79.55],[283,0,283,189,0,153.5,79.55],[566,0,283,189,0,153.5,79.55],[849,0,283,189,0,153.5,79.55],[1132,0,283,189,0,153.5,79.55],[1415,0,283,189,0,153.5,79.55],[1698,0,283,189,0,153.5,79.55],[0,189,283,189,0,153.5,79.55],[283,189,283,189,0,153.5,79.55],[566,189,283,189,0,153.5,79.55],[849,189,283,189,0,153.5,79.55],[1132,189,283,189,0,153.5,79.55],[1415,189,283,189,0,153.5,79.55],[1698,189,283,189,0,153.5,79.55],[0,378,283,189,0,153.5,79.55],[283,378,283,189,0,153.5,79.55]]});
    childSheet3 = new createjs.SpriteSheet({images: ["Platforms/Person 03.png"], frames: [[0,0,295,197,0,153,94.6],[295,0,295,197,0,153,94.6],[590,0,295,197,0,153,94.6],[885,0,295,197,0,153,94.6],[1180,0,295,197,0,153,94.6],[1475,0,295,197,0,153,94.6],[0,197,295,197,0,153,94.6],[295,197,295,197,0,153,94.6],[590,197,295,197,0,153,94.6],[885,197,295,197,0,153,94.6],[1180,197,295,197,0,153,94.6],[1475,197,295,197,0,153,94.6],[0,394,295,197,0,153,94.6],[295,394,295,197,0,153,94.6],[590,394,295,197,0,153,94.6],[885,394,295,197,0,153,94.6],[1180,394,295,197,0,153,94.6],[1475,394,295,197,0,153,94.6],[0,591,295,197,0,153,94.6],[295,591,295,197,0,153,94.6],[590,591,295,197,0,153,94.6],[885,591,295,197,0,153,94.6],[1180,591,295,197,0,153,94.6],[1475,591,295,197,0,153,94.6],[0,788,295,197,0,153,94.6],[295,788,295,197,0,153,94.6]]});
    childSheet4 = new createjs.SpriteSheet({images: ["Platforms/Person 04.png"], frames: [[0,0,267,178,0,131.5,88.75],[267,0,267,178,0,131.5,88.75],[534,0,267,178,0,131.5,88.75],[801,0,267,178,0,131.5,88.75],[1068,0,267,178,0,131.5,88.75],[1335,0,267,178,0,131.5,88.75],[1602,0,267,178,0,131.5,88.75],[0,178,267,178,0,131.5,88.75],[267,178,267,178,0,131.5,88.75],[534,178,267,178,0,131.5,88.75],[801,178,267,178,0,131.5,88.75],[1068,178,267,178,0,131.5,88.75],[1335,178,267,178,0,131.5,88.75],[1602,178,267,178,0,131.5,88.75],[0,356,267,178,0,131.5,88.75],[267,356,267,178,0,131.5,88.75],[534,356,267,178,0,131.5,88.75],[801,356,267,178,0,131.5,88.75],[1068,356,267,178,0,131.5,88.75],[1335,356,267,178,0,131.5,88.75],[1602,356,267,178,0,131.5,88.75],[0,534,267,178,0,131.5,88.75],[267,534,267,178,0,131.5,88.75],[534,534,267,178,0,131.5,88.75]]});
    childSheet5 = new createjs.SpriteSheet({images: ["Platforms/Person 05.png"], frames: [[0,0,265,177,0,132,88.6],[265,0,265,177,0,132,88.6],[530,0,265,177,0,132,88.6],[795,0,265,177,0,132,88.6],[1060,0,265,177,0,132,88.6],[1325,0,265,177,0,132,88.6],[1590,0,265,177,0,132,88.6],[0,177,265,177,0,132,88.6],[265,177,265,177,0,132,88.6],[530,177,265,177,0,132,88.6],[795,177,265,177,0,132,88.6],[1060,177,265,177,0,132,88.6],[1325,177,265,177,0,132,88.6],[1590,177,265,177,0,132,88.6],[0,354,265,177,0,132,88.6],[265,354,265,177,0,132,88.6],[530,354,265,177,0,132,88.6],[795,354,265,177,0,132,88.6],[1060,354,265,177,0,132,88.6],[1325,354,265,177,0,132,88.6],[1590,354,265,177,0,132,88.6],[0,531,265,177,0,132,88.6],[265,531,265,177,0,132,88.6]]});
    cArray[1] = childsheet;
    cArray[2] = childSheet2;
    cArray[3] = childSheet3;
    cArray[4] = childSheet4;
    cArray[5] = childSheet5;

    sparkleSheet = new createjs.SpriteSheet({images: ["VFX_Sparkle/Sparkle Animation.png"], frames: [[0,0,720,481,0,360,239.55],[720,0,720,481,0,360,239.55],[1440,0,720,481,0,360,239.55],[2160,0,720,481,0,360,239.55],[2880,0,720,481,0,360,239.55],[0,481,720,481,0,360,239.55],[720,481,720,481,0,360,239.55],[1440,481,720,481,0,360,239.55],[2160,481,720,481,0,360,239.55],[2880,481,720,481,0,360,239.55],[0,962,720,481,0,360,239.55],[720,962,720,481,0,360,239.55],[1440,962,720,481,0,360,239.55],[2160,962,720,481,0,360,239.55],[2880,962,720,481,0,360,239.55],[0,1443,720,481,0,360,239.55]]});
    sparkle1 = new createjs.Sprite(sparkleSheet);
    sparkle1.x = -100;
    sparkle1.y = -100;
    stage.addChild(sparkle1);

	
	//Create all the platforms
	p1 = new platform(platformAni01, 1);
	p2 = new platform(platformAni02, 2);
	p3 = new platform(platformAni03, 3);
	p4 = new platform(platformAni04, 4);
	p5 = new platform(platformAni05, 5);
	
	bp1 = new brokenPlatform(bplatformAni01);
	bp2 = new brokenPlatform(bplatformAni02);
	
	//Create the person
	person1 = new person(person1s, 2);
		
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", tick);
	
	circle = new createjs.Shape();
	stage.addChild(circle);
    platformArray[0] = p1;
    platformArray[1] = p2;
    platformArray[2] = p3;
    platformArray[3] = p4;
    platformArray[4] = p5;
    goSpring = false;
}

//Runs once per second.
timerTick = function()
{
	cTime--;

	if(cTime < 0)
	{
		//Transition to depression phase.
		gameOver = true;
		//When transition is done set the following variables below.
		//cTime = startTime;
	}
}

mTick = function()
{
	update();
	flyingPlayer.play();
	person1s.play();
    bp1.bplatform.play();
    bp2.bplatform.play();
    sparkle1.play();
    if(sparkle1.currentAnimationFrame == 11)
    {
        sparkle1.x = -100;
        sparkle1.y = -100;
    }
//	circle.x =/* platformAni01.x - 90;*/flyingPlayer.x - 52;
//	circle.y = /*platformAni01.y - 135;*/flyingPlayer.y - 29;
//	circle.graphics.beginFill("blue").drawCircle(50,50,2);
	bgSprite.gotoAndStop(bgAnimationFrame);
	mstage.update();
}

function brokenPlatform(bplat)
{
	this.bplatform = bplat;
    this.frame = 1;
    this.used = false;
    this.vel = 0;
	
    this.resetVals = function()
    {
        this.frame = 1;

        this.bplatform.gotoAndStop("1");
        this.vel = 0;
    }
    this.updateFall = function()
    {
        //fall if in place
        if(this.used == true)
        {
            this.vel ++;
            this.bplatform.y += this.vel + platformGravity;
        }

        if(this.bplatform.y > 480)
        {
            this.used = false;
            this.bplatform.x = -100;
            this.bplatform.y = -100;

        }
    }
}


function platform(platAni, num)
{
	this.ani = platAni;
    this.personCheck = false;
    this.numba =   num;
    this.nullify = false;

    this.setpos = function(a, b)
    {
        this.ani.x = a;
        this.ani.y = b;
    }
    this.sety = function(l)
    {
        this.ani.y = l;
    }
    this.smash = function(byPlayer)
    {
        if(bp1.used == false)
        {
            bp1.bplatform.x = this.ani.x;
            bp1.bplatform.y = this.ani.y;
            bp1.used = true;
            bp1.resetVals();
        }
        else if(bp2.used == false)
        {
            bp2.bplatform.x = this.ani.x;
            bp2.bplatform.y = this.ani.y;
            bp2.used = true;
            bp2.resetVals();
        }

 //       sparkle1.x = this.ani.x;
  //      sparkle1.y = this.ani.y;
  //      sparkle1.gotoAndPlay("1");

		if(byPlayer)
		{
			bgAnimationFrame++;
			if(bgAnimationFrame > 30)
			{
				bgAnimationFrame = 30;
			}
		}
		
        if(this.nullify == false)
        {
			if(this.ani.x > 360)
			{
				this.setpos(((360 * Math.random() + 104)), -offset);
			}
			else if(this.ani.x < 360)
			{
	
				this.setpos(((360 * (1 + Math.random()))-96), -offset);          //96= width
			}
			offset += 40;
			personCounter--;
        }
        else
        {
            mstage.removeChild(this);
        }
        if(person1.broken == 1)
        {

            if(this.personCheck == true)
            {
                person1.broken = 0;
                this.personCheck = false;

                //alert("HIT");
            }
        }
        if(personCounter <= 0)
        {

             if(person1.broken == 2)
            {
                person1.sprite.x = this.ani.x+37;
                person1.sprite.y = this.ani.y-97;
                this.personCheck = true;
                person1.broken = 1;
                personCounter = 6;
            }
        }

    }
    this.collision = function()
    {
        //check for collision between player and platform
        if((flyingPlayer.x - 52 < (this.ani.x - 6)) && (flyingPlayer.x - 52 > this.ani.x - 90))// || (((flyingPlayer.x+71) < (this.ani.x + 50)) && ((flyingPlayer.x + 71) > this.ani.x + 10)))
        {
            if(((flyingPlayer.y-125) < (this.ani.y -171)) && ((flyingPlayer.y-29) > (this.ani.y-135)))
            {
                if(velocity >= 0)
                {
                    if(standstill == false)
                    {
                        upSpeed+= jumpStrength * 1.1;
                        velocity = -upSpeed;
                        this.smash(true);
                    }
                }
            }
        }

    }
}

//Establishes the person "class"
function person(sparite, num)
{
	this.sprite = sparite;
    this.speed = 3;
    this.number = 1;
    this.frame = 1;
    this.change = false;
    this.i = 1;
    this.broken = num;
	
    this.fall = function()
    {
        //this.broken = 0;

        if(this.sprite.y <=610)
        {
                this.speed ++;
            this.sprite.y += this.speed;
            this.change = false;
        }
        else
        {
            this.broken = 2;
            if(this.change == false)
            {
                this.change = true;
                this.i ++;
                if(this.i > 5)
                {
                    this.i = 1;
                }
                this.sprite.spriteSheet = cArray[this.i];
                if(this.i > 1)
                {
                    this.sprite.scaleX = .5;
                    this.sprite.scaleY = .5;
                }
                else
                {
                    this.sprite.scaleX = 1;
                    this.sprite.scaleY = 1;
                }
            }
            this.speed = 3;
		}

    }
}

update = function()
{
    //Fractal Background Image Reveal
 //   var backgroundImageData = backgroundImg.getImageData(0, 0, backgroundImg.width, backgroundImg.height);
  //  for(var i = 0, n = backgroundImageData.length; i < n; i += 4)
  //  {
  //      backgroundImageData[i + 3] = 255;//Alpha
  //  }
 //   backgroundImg.putImageData(backgroundImageData,0,0,backgroundImg.width, backgroundImg.height);

    //Player movement stuff
//	flyingPlayer.x += playerSpeed * friction;
	//398-329 = width
	//335-94 = height
	//420 = end of player..
	//720-420
    bp1.updateFall();
    bp2.updateFall();
	platformArray[0] = p1;
    platformArray[1] = p2;
    platformArray[2] = p3;
    platformArray[3] = p4;
    platformArray[4] = p5;
    if(flyingPlayer.x - 9 + playerSpeed * friction < 720 - playerWidth)
    {
        if(flyingPlayer.x - 9 + playerSpeed * friction > 0)
        {
            flyingPlayer.x += playerSpeed * friction;
        }
        else
        {
            flyingPlayer.x = 9;
        }
    }
    else
    {
        flyingPlayer.x = 720-9;//playerWidth;
    }
	
	var i = 0;
    if(flyingPlayer.y >= 420)
    {
        if(gameOver == false)
        {
            /////////////////////////////////Old Controls for offscreen///////////////////////Re-engage if spring effect is not working///////////////////////////////
            /*upSpeed += jumpStrength * 0.8;
            velocity = -upSpeed;
            //platformGravity = 4;
            gravcheck = 30;  */
            ////////////////////////////////New Controls. Comment out if not working////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////////////////////Note: The platform grab controls seem strange now, it's because the player reacts strangely when the old left/right controls kick in.
            ////////////////////////////////////////////// I will adjust this when I have time, as I am currently needing to work on other projects
            ////////////////////////////////////////////// ---Mitch
            if(goSpring == false)
            {
            for(i; i<5; i++)
            {
                if(platformArray[i].ani.y < 270)
                {
                    if(i != 4)
                    {
                        if(Math.sqrt((flyingPlayer.y - platformArray[i].ani.y)^2 + (flyingPlayer.x - platformArray[i].ani.x)^2) < Math.sqrt((flyingPlayer.y - platformArray[i+1].ani.y)^2 + (flyingPlayer.x - platformArray[i+1].ani.x)^2))
                        {
                            closestPlatform = platformArray[i];
                        }
                        else
                        {
                            closestPlatform = platformArray[i+1];
                        }
                    }
                    else
                    {
                        if(Math.sqrt((flyingPlayer.y - platformArray[4].ani.y)^2 + (flyingPlayer.x - platformArray[4].ani.x)^2) < Math.sqrt((flyingPlayer.y - closestPlatform.ani.y)^2 + (flyingPlayer.x - closestPlatform.ani.x)^2))
                        {
                            closestPlatform = platformArray[4];
                        }
                    }
                }
            }
                goSpring = true;

            }
        }
        else
        {
            endManic = true;
			//Should fade out before this, but for now instant transfer...
		//	dInit();
	//		createjs.Ticker.removeEventListener("tick", mTick);
        }
    }

    if(flyingPlayer.y <= 120)
    {
        //gravity = 6;

            if(standstill == false)
            {
                tempVel = velocity;
                tempPos = flyingPlayer.y;
                standstill = true;
            }
            velocity = 0;
            flyingPlayer.y = 120;
            tempVel = tempVel + acceleration;
            tempPos = tempPos + tempVel - upSpeed;
        upSpeed --;
            if(tempVel > 0)
            {
                velocity = tempVel;
                //flyingPlayer.y = tempPos;
                flyingPlayer.y += velocity - upSpeed;
                standstill = false;
            }
        if(standstill == true)
        {

                platformGravity = -tempVel * 2;


        }
    }
    else
    {
        velocity = velocity + acceleration;
        flyingPlayer.y += velocity - upSpeed;
        upSpeed--;
        //gravity = 2
		if(gravcheck > 0)
		{
			platformGravity = - velocity;
		}
        else
		{
			platformGravity = 0;
		}
        gravcheck --;

    }
    //Remove platforms as time ticks on
    if(cTime < 40)
    {
        if(p1.numba > 0)
        {
            /*if(p1.personCheck == true)
            {
                person1.broken = 0;
            }*/

            p1.numba = 0;
        }
        else
        {
            p1.nullify = true;
            //p1.setpos(-96, -32);
        }
        if(cTime < 20)
        {
            if(p2.numba > 0)
            {
               /* if(p2.personCheck == true)
                {
                    person1.broken = 0;
                } */

                p2.numba = 0;
            }
            else
            {
                //p2.setpos(-96, -32);
                p2.nullify = true;
            }

            if(cTime < 7)
            {
                if(p3.numba > 0)
                {
                    /*if(p3.personCheck == true)
                    {
                        person1.broken = 0;
                    } */

                    p3.numba = 0;
                }
                else
                {
                    //p3.setpos(-96, -32);
                    p3.nullify = true;
                }
                if(cTime < 2)
                {
                    if(p4.numba > 0)
                    {
                        /*if(p4.personCheck == true)
                        {
                            person1.broken = 0;
                        } */

                        p4.numba = 0;
                    }
                    else
                    {
                        //p4.setpos(-96, -32);
                        p4.nullify = true;
                    }
                }
            }
        }
    }
                      //Collision code for platforms, as well as code that removes them should they move offscreen

    if(upSpeed < 0)
    {
        upSpeed = 0;
    }
    if(goSpring == true)
    {

        lockControls = true;
       // velocity-= springAcceleration;
          velocity = -15;

        /* xDist = closestPlatform.ani.x - flyingPlayer.x;
         if(xDist != 0)
         {
         xDist = xDist / 10;

         }
         if(closestPlatform.ani.x > flyingPlayer.x)
         {
         xVelocity = xVelocity + (xDist *.5);
         flyingPlayer.x += xVelocity;
         }
         else if(closestPlatform.ani.x == flyingPlayer.x)
         {
         flyingPlayer.x = closestPlatform.ani.x;
         }
         else
         {
         xVelocity = xVelocity + (xDist *.5);
         flyingPlayer.x += xVelocity;
         }*/
        if(flyingPlayer.x < closestPlatform.ani.x)
        {
            flyingPlayer.x += 8;
        }
        if(flyingPlayer.x > closestPlatform.ani.x)
        {
            flyingPlayer.x -= 8;
        }
        /*if(flyingPlayer.y < closestPlatform.ani.y)
         {

         xVelocity = 0;

         goSpring = false;
         lockControls = false;

         //closestPlatform.smash(false);
         }    */
        /*   if(closestPlatform.ani.y > 300)
         {
         alert(closestPlatform.ani.x + "," + closestPlatform.ani.y + "  |Num: " + i);
         }*/
        //Collide with platform for further propelling
        if((flyingPlayer.x - 52 < (closestPlatform.ani.x - 6)) && (flyingPlayer.x - 52 > closestPlatform.ani.x - 90))// || (((flyingPlayer.x+71) < (this.ani.x + 50)) && ((flyingPlayer.x + 71) > this.ani.x + 10)))
        {

            if(((flyingPlayer.y-125) < (closestPlatform.ani.y -171)))// && ((flyingPlayer.y-29) > (closestPlatform.ani.y-135)))
            {

                upSpeed = jumpStrength ;
                //velocity = 0;
                velocity = -upSpeed;
               // upSpeed = 0;
                xVelocity = 0;
                goSpring = false;


                lockControls = false;
                closestPlatform.smash(true);

            }
        }


    }
    
    p1.collision(flyingPlayer.x, flyingPlayer.y);
    p2.collision(flyingPlayer.x, flyingPlayer.y);
    p3.collision(flyingPlayer.x, flyingPlayer.y);
    p4.collision(flyingPlayer.x, flyingPlayer.y);
    p5.collision(flyingPlayer.x, flyingPlayer.y);
    if(p1.ani.y > 615)
    {
        p1.smash(false);
    }
    if(p2.ani.y > 615)
    {
        p2.smash(false);
    }
    if(p3.ani.y > 615)
    {
        p3.smash(false);
    }
    if(p4.ani.y > 615)
    {
        p4.smash(false);
    }
    if(p5.ani.y > 615)
    {
        p5.smash(false);
    }
    //Gravity adjusters for platforms, as well as offset adjusters
    if(platformGravity > 0)
    {
        p1.sety(platformAni01.y + platformGravity);
        p2.sety(platformAni02.y + platformGravity);
        p3.sety(platformAni03.y + platformGravity);
        p4.sety(platformAni04.y + platformGravity);
        p5.sety(platformAni05.y + platformGravity);
        if(person1.broken == 1)
        {
            person1.sprite.y += platformGravity;

        }

        if( offset > 40)
        {
            offset -= platformGravity;
        }
    }

    if(person1.broken == 0)
    {
        person1.fall();
    }

    /*bp1.frame += .25;
    bp2.frame += .25;*/
    if(endManic)
    {
        //ends game loop so that depressive phase can take over.
        //Be sure to play transition before doing this.
	//	if(whichStage != 1)
	//	{
		dInit();
	//	}
		createjs.Ticker.removeEventListener("tick", mTick);
		mstage.removeAllChildren();
    }

}

function keyDownListener(e)
{
    if(lockControls == false)
    {
    //w and up
    if(e.keyCode == 87 || e.keyCode == 38)
    {
        //this is solely for testing jumping since we lack platforms currently.
        //upSpeed += jumpStrength;
        //velocity = -upSpeed;
        //upKeyDown = true;
    }
    //d and right
    if((e.keyCode == 68 || e.keyCode == 39))
    {
        rightKeyDown = true;
        if(playerSpeed < 0)
        {
           // playerSpeed = maxPlayerSpeed
          //  playerSpeed ++;
			if(cTime > 40)
			{
            	playerSpeed = 4;
			}
			else if(cTime > 30)
			{
				playerSpeed = 6;
			}
			else if(cTime > 10)
			{
				playerSpeed = 8;
			}
			else
			{
				playerSpeed = maxPlayerSpeed;
			}


        }
        else
        {
		//	if(cTime >= 50)
		//	{
		//		playerSpeed = 1;
		//	}
		//	else if(cTime >= 40)
		//	{
		//		playerSpeed = 2;
		//	}
			if(cTime >= 30)
			{
				playerSpeed = 4;
			}
			else if(cTime >= 20)
			{
				playerSpeed = 6;
			}
			else if(cTime >= 10)
			{
				playerSpeed = 8;
			}
			else
			{
            	playerSpeed = maxPlayerSpeed;
			}

        }
        if(playerSpeed > maxPlayerSpeed)
        {
            playerSpeed = maxPlayerSpeed;
        }
        xVelocity += xAcceleration - xFriction;
        if(xVelocity > maxPlayerSpeed)
        {
            xVelocity = maxPlayerSpeed;
        }
    }
    //a and left
    else if((e.keyCode == 65 || e.keyCode == 37))
    {
        leftKeyDown = true;
       if(playerSpeed > 0)
        {
            //playerSpeed = -maxPlayerSpeed;
			if(cTime > 40)
			{
            	playerSpeed = -4;
			}
			else if(cTime > 30)
			{
				playerSpeed  -6;
			}
			else if(cTime > 10)
			{
				playerSpeed = -8;
			}
			else
			{
				playerSpeed = -maxPlayerSpeed;
			}
        }
        else
        {
		//	if(cTime >= 50)
		//	{
		//		playerSpeed = -1;
		//	}
		//	else if(cTime >= 40)
		//	{
		//		playerSpeed = -2;
		//	}
			if(cTime >= 30)
			{
				playerSpeed = -4;
			}
			else if(cTime >= 20)
			{
				playerSpeed = -6;
			}
			else if(cTime >= 10)
			{
				playerSpeed = -8;
			}
			else
			{
            	playerSpeed = -maxPlayerSpeed;
         }
        }
        if(playerSpeed < -maxPlayerSpeed)
        {
            playerSpeed = -maxPlayerSpeed;
        }
    }
    }
}

function keyUpListener(e)
{
    if(lockControls == false)
    {
		//w and up
		if(e.keyCode == 87 || 38)
		{
			upKeyDown = false;
		}
		//d and right
		if((e.keyCode == 68 || e.keyCode == 39))
		{
		   rightKeyDown = false;
		}
		//a and left
		else if((e.keyCode == 65 || e.keyCode == 37))
		{
		   leftKeyDown = false;
		}
    }
}

setInterval(timerTick,1000);