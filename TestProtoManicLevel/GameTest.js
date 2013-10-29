
var canvas, stage;
var circle;

var bpNewSprite;// = new createjs.SpriteSheet({animations: {brokenplatform: [1,35]}, images: ["Fixed_Platform_Break.png"], frames: [[0,0,192,380,0,96,189.05],[192,0,192,380,0,96,189.05],[384,0,192,380,0,96,189.05],[576,0,192,380,0,96,189.05],[768,0,192,380,0,96,189.05],[960,0,192,380,0,96,189.05],[1152,0,192,380,0,96,189.05],[1344,0,192,380,0,96,189.05],[1536,0,192,380,0,96,189.05],[1728,0,192,380,0,96,189.05],[0,380,192,380,0,96,189.05],[192,380,192,380,0,96,189.05],[384,380,192,380,0,96,189.05],[576,380,192,380,0,96,189.05],[768,380,192,380,0,96,189.05],[960,380,192,380,0,96,189.05],[1152,380,192,380,0,96,189.05],[1344,380,192,380,0,96,189.05],[1536,380,192,380,0,96,189.05],[1728,380,192,380,0,96,189.05],[0,760,192,380,0,96,189.05],[192,760,192,380,0,96,189.05],[384,760,192,380,0,96,189.05],[576,760,192,380,0,96,189.05],[768,760,192,380,0,96,189.05],[960,760,192,380,0,96,189.05],[1152,760,192,380,0,96,189.05],[1344,760,192,380,0,96,189.05],[1536,760,192,380,0,96,189.05],[1728,760,192,380,0,96,189.05],[0,1140,192,380,0,96,189.05],[192,1140,192,380,0,96,189.05],[384,1140,192,380,0,96,189.05],[576,1140,192,380,0,96,189.05],[768,1140,192,380,0,96,189.05],[960,1140,192,380,0,96,189.05]]});
var bpSprite;// = new createjs.Sprite(bpNewSprite);
//stage.addChild(bpSprite);

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
var gravity = 10.5;
var velocity = 0;
var tempVel = 0;
var tempPos = 0;
var standstill = false;
var acceleration = gravity/27;
var jumpStrength = 12//7.25;
var friction = 1;
var gameOver = false;
var goSpring;
var springAcceleration = 20/27;
var lockControls = false;
var xVelocity = 0;
var xDist;

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
var platformArray = new Array();
var closestPlatform;

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

document.onkeydown = keyDownListener;
document.onkeyup = keyUpListener;

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

tick = function()
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
	circle.x =/* platformAni01.x - 90;*/flyingPlayer.x - 52;
	circle.y = /*platformAni01.y - 135;*/flyingPlayer.y - 29;
	circle.graphics.beginFill("blue").drawCircle(50,50,2);
	bgSprite.gotoAndStop(bgAnimationFrame);
	stage.update();
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

        sparkle1.x = this.ani.x;
        sparkle1.y = this.ani.y;
        sparkle1.gotoAndPlay("1");

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
            stage.removeChild(this);
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
    this.broken = num;
    this.fall = function()
    {
        //this.broken = 0;

        if(this.sprite.y <=610)
        {
            this.speed ++;
            this.sprite.y += this.speed;
        }
        else
        {
            this.broken = 2;
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
            if(goSpring == false)
            {
                flyingPlayer.x += playerSpeed * friction;
            }

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
    if(flyingPlayer.y >= 450)
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

        }  //////////////////////////////////////////////End of new controls///////////////////////////////////////
        else
        {
            endManic = true;
        }
    }

    if(goSpring == true)
    {

        lockControls = true;
        velocity-= springAcceleration;
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
            flyingPlayer.x += 10;
        }
        if(flyingPlayer.x > closestPlatform.ani.x)
        {
            flyingPlayer.x -= 10;
        }
        //Collide with platform for further propelling
        if((flyingPlayer.x - 52 < (closestPlatform.ani.x - 6)) && (flyingPlayer.x - 52 > closestPlatform.ani.x - 90))// || (((flyingPlayer.x+71) < (this.ani.x + 50)) && ((flyingPlayer.x + 71) > this.ani.x + 10)))
        {
            if(((flyingPlayer.y-125) < (closestPlatform.ani.y -171)) && ((flyingPlayer.y-29) > (closestPlatform.ani.y-135)))
            {

                upSpeed+= jumpStrength * 1.1;
                velocity = -upSpeed;
                xVelocity = 0;
                goSpring = false;
                lockControls = false;
                closestPlatform.smash(false);

            }
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
        stage.removeAllChildren();

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
				playerSpeed = -6;
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