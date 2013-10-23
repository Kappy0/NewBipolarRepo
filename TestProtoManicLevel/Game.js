/**
 * Created with JetBrains WebStorm.
 * User: JBECKE15
 * Date: 9/19/13
 * Time: 5:41 PM
 * To change this template use File | Settings | File Templates.
 */

//ctx.fillStyle="#FF0000";
//ctx.fillRect(0,0,150,75);

/////////////
//Variables//
/////////////////////////////////////////////////////////////////////

var c, stage;

//Fractal Background & Reveal
//var backgroundImg = new Image();
//var pixelArray = createArray(720,480);
//var bgAnimationFrame = 0;
//backgroundImg.src = "Fractal Animation/Fractal_SpriteSheet.png";

//createjs stuff, incase we decide to do this.. personally I could not get it working
/*var bgAnimation = new createjs.SpriteSheet({images: ["Fractal Animation/Fractal_SpriteSheet.png"], frames: [[0,0,720,481,0,360,239.55],[720,0,720,481,0,360,239.55],[1440,0,720,481,0,360,239.55],[2160,0,720,481,0,360,239.55],[2880,0,720,481,0,360,239.55],[0,481,720,481,0,360,239.55],[720,481,720,481,0,360,239.55],[1440,481,720,481,0,360,239.55],[2160,481,720,481,0,360,239.55],[2880,481,720,481,0,360,239.55],[0,962,720,481,0,360,239.55],[720,962,720,481,0,360,239.55],[1440,962,720,481,0,360,239.55],[2160,962,720,481,0,360,239.55],[2880,962,720,481,0,360,239.55],[0,1443,720,481,0,360,239.55],[720,1443,720,481,0,360,239.55],[1440,1443,720,481,0,360,239.55],[2160,1443,720,481,0,360,239.55],[2880,1443,720,481,0,360,239.55],[0,1924,720,481,0,360,239.55],[720,1924,720,481,0,360,239.55],[1440,1924,720,481,0,360,239.55],[2160,1924,720,481,0,360,239.55],[2880,1924,720,481,0,360,239.55],[0,2405,720,481,0,360,239.55],[720,2405,720,481,0,360,239.55],[1440,2405,720,481,0,360,239.55],[2160,2405,720,481,0,360,239.55],[2880,2405,720,481,0,360,239.55],[0,2886,720,481,0,360,239.55]]});
var bgSprite = new createjs.Sprite(bgAnimation,1);
*/

//Timer/Phase Ending
var endManic = false;
var startTime = 60;
var cTime = startTime;
//var lastTime;

//Player
//var playerImg = new Image();
//playerImg.src = "Manic_Fly/ManicFly_SpriteSheet.png";
var playerImgFrame = 0;
//398-329 = width
//335-94 = height
var playerWidth = 69 * (144/720);//(329*(144/720));
var playerHeight = 241 * (96/480);//(94*(96/480));

var playerwidth = 69;// playerImg.clientWidth;
var playerheight = 241;//playerImg.clientHeight;

var rightKeyDown = false;
var leftKeyDown = false;
var upKeyDown = false;
var playerSpeed = 0;
var maxPlayerSpeed = 6;
var upSpeed = 0;
var gravity = 5;
var velocity = 0;
var tempVel = 0;
var tempPos = 0;
var standstill = false;
var acceleration = gravity/27;
var jumpStrength = 7.25;
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
var offset = 80;
var gravcheck = 0;

//Person
//var personImg = new Image();
//personImg.src = "New Smaller Person.png";
//var personframe = 1;
var personCounter = 6;

//stuff
var bpNewSprite, bpSprite;
var platformSheet, platformAni01, platformAni02, platformAni03, platformAni04, platformAni05;
var bplatformAni01, bplatformAni02;
var playerImg, flyingplayer;
var childsheet, person1s;
var p1, p2, p3, p4, p5, bp1, bp2;
var person1;

function init()
{
    if(!(!!document.createElement('canvas').getContext))
    {
        var wrapper = document.getElementById("canvasWrapper");
        wrapper.innerHTML = "Your browser does not appear to support " +
            "the HTML5 Canvas element";
        return;
    }

    c = document.getElementById("canvas");
    //var ctx=c.getContext("2d");

    stage = new createjs.Stage(c);

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
    flyingplayer = new createjs.Sprite(playerImg);
    flyingplayer.x = 328;
	flyingplayer.y = 240;
    stage.addChild(flyingplayer);

    childsheet =  new createjs.SpriteSheet({images: ["Platforms/Small Person 01 Animation.png"], frames: [[0,0,124,83,0,66,38.1],[124,0,124,83,0,66,38.1],[248,0,124,83,0,66,38.1],[372,0,124,83,0,66,38.1],[0,83,124,83,0,66,38.1],[124,83,124,83,0,66,38.1],[248,83,124,83,0,66,38.1],[372,83,124,83,0,66,38.1],[0,166,124,83,0,66,38.1],[124,166,124,83,0,66,38.1],[248,166,124,83,0,66,38.1],[372,166,124,83,0,66,38.1],[0,249,124,83,0,66,38.1],[124,249,124,83,0,66,38.1],[248,249,124,83,0,66,38.1],[372,249,124,83,0,66,38.1],[0,332,124,83,0,66,38.1],[124,332,124,83,0,66,38.1],[248,332,124,83,0,66,38.1],[372,332,124,83,0,66,38.1],[0,415,124,83,0,66,38.1],[124,415,124,83,0,66,38.1]]});
    person1s = new createjs.Sprite(childsheet);
	person1s.x = -200;
	person1s.y = 500;
    stage.addChild(person1s);
	
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
				this.setpos((360 * Math.random()), -offset);
			}
			else if(this.ani.x < 360)
			{
	
				this.setpos(((360 * (1 + Math.random())) -96), -offset);          //96= width
			}
			offset += 80;
			personCounter--;
        }
        else
        {
            this.setpos(-200, -200);
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
                person1.sprite.x = this.ani.x;
                person1.sprite.y = this.ani.y;
                this.personCheck = true;
                person1.broken = 1;
                personCounter = 6;
            }
        }

    }
    this.collision = function()
    {
        //check for collision between player and platform


        if(((flyingplayer.x < (this.ani.x +96)) && (flyingplayer.x > this.ani.x)) || (((flyingplayer.x+32) < (this.ani.x +96)) && ((flyingplayer.x +32) > this.ani.x)))
        {

            if(((flyingplayer.y+32) < (this.ani.y + 32)) && ((flyingplayer.y+32) > (this.ani.y)))
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

        if(this.sprite.y <=480)
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


//Debug


//Setup
var Game = {};
Game.fps = 60;

document.onkeydown = keyDownListener;
document.onkeyup = keyUpListener;

//End Variables
////////////////////////////////////////////////////////////////

//Runs once per second.
Game.timerTick = function()
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

//Runs once per frame
function tick()
{
    Game.update();
    //Game.draw();
    flyingplayer.play();
    person1s.play();
    stage.update();
}

Game.draw = function()
{
    if(endManic)
    {
        //setTimeout( ctx.clearRect(0,0,720,480), 1000);
    }
    else
    {
        //ctx.clearRect(0,0,720,480);
		//This is cheating
        //ctx.drawImage(backgroundImg,(bgAnimationFrame%5)*-720,Math.floor(bgAnimationFrame/5)*-481);
		/*
        ctx.drawImage(brokenPlatformImg,0, 0, 190.6, 376, p1.plx, platformAni01.y, 130,150); // draw platform 1
        ctx.drawImage(brokenPlatformImg,0, 0, 190.6, 376, p2.plx, platformAni02.y, 130,150); // draw platform 2
        ctx.drawImage(brokenPlatformImg,0, 0, 190.6, 376, p3.plx, platformAni03.y, 130,150); // draw platform 3
        ctx.drawImage(brokenPlatformImg,0, 0, 190.6, 376, p4.plx, platformAni04.y, 130,150); // draw platform 4
        ctx.drawImage(brokenPlatformImg,0, 0, 190.6, 376, p5.plx, platformAni05.y, 130,150); // draw platform 5

        ctx.drawImage(brokenPlatformImg,(bp1.frame %10)*107.2, Math.floor(bp1.frame / 10)*212,107.2,212, bp1.bpx, bp1.bpy, 100,100);
        ctx.drawImage(brokenPlatformImg,(bp2.frame % 10)*190.6, Math.floor(bp2.frame / 10)*212,107.2,212, bp2.bpx, bp2.bpy, 100, 100);
        ctx.drawImage(personImg, (person1.frame % 6)*277.833, Math.floor(person1.frame / 4)*185.5, person1.persx, person1.persy); // draw person1
        //ctx.drawImage(personImg, person1.persx, person1.persy);
        bp1.frame ++;
        bp2.frame ++;


        person1.frame =1;
        if(person1.frame > 21)
        {
            person1.frame = 1;
        }
           */
        //MODIFY PERSON USED DEPENDING ON PERSON.NUMBER

	//	ctx.drawImage(playerImg,0,0,720,480,flyingPlayer.x-(329*(144/720)),flyingPlayer.y-(94*(96/480)),144,96);
		//ctx.drawImage(playerImg,(playerImgFrame%5) * 720,Math.floor(playerImgFrame/5)*480,720,480,flyingPlayer.x-(329*(144/720)),flyingPlayer.y-(94*(96/480)),144,96);
     //   ctx.drawImage(playerImg,flyingPlayer.x,flyingPlayer.y);
//329,94
        //ctx.fillText((cTime).toString(),360 - 15,50);
    }
}


Game.update = function()
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
    if(flyingplayer.x + playerSpeed * friction < 720 - playerWidth)
    {
        if(flyingplayer.x + playerSpeed * friction > 0)
        {
            flyingplayer.x += playerSpeed * friction;
        }
        else
        {
            flyingplayer.x = 0;
        }
    }
    else
    {
        flyingplayer.x = 720 - playerWidth;
    }
	
    if(flyingplayer.y >= 480)
    {
        if(gameOver == false)
        {
            upSpeed += jumpStrength * 1.25;
            velocity = -upSpeed;
            //platformGravity = 4;
            gravcheck = 30;
        }
        else
        {
            endManic = true;
        }
    }

    if(flyingplayer.y <= 120)
    {
        //gravity = 6;

            if(standstill == false)
            {
                tempVel = velocity;
                tempPos = flyingplayer.y;
                standstill = true;
            }
            velocity = 0;
            flyingplayer.y = 120;
            tempVel = tempVel + acceleration;
            tempPos = tempPos + tempVel - upSpeed;
        upSpeed --;
            if(tempVel > 0)
            {
                velocity = tempVel;
                //flyingPlayer.y = tempPos;
                flyingplayer.y += velocity - upSpeed;
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
        flyingplayer.y += velocity - upSpeed;
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
    p1.collision(flyingplayer.x, flyingplayer.y);
    p2.collision(flyingplayer.x, flyingplayer.y);
    p3.collision(flyingplayer.x, flyingplayer.y);
    p4.collision(flyingplayer.x, flyingplayer.y);
    p5.collision(flyingplayer.x, flyingplayer.y);
    if(platformAni01.y > 480)
    {
        p1.smash(false);
    }
    if(platformAni02.y > 480)
    {
        p2.smash(false);
    }
    if(platformAni03.y > 480)
    {
        p3.smash(false);
    }
    if(platformAni04.y > 480)
    {
        p4.smash(false);
    }
    if(platformAni05.y > 480)
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

        if( offset > 80)
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

    }

}




function keyDownListener(e)
{
    //w and up
    if(e.keyCode == 87 || e.keyCode == 38)
    {
        //this is solely for testing jumping since we lack platforms currently.
        upSpeed += jumpStrength;
        velocity = -upSpeed;
        upKeyDown = true;
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
            	playerSpeed = 0;
			}
			else if(cTime > 30)
			{
				playerSpeed += 2;
			}
			else if(cTime > 10)
			{
				playerSpeed++;
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
				if(playerSpeed >= 3)
				{
					playerSpeed++;
				}
				else
				{
					playerSpeed = 3;
				}
			}
			else if(cTime >= 20)
			{
				if(playerSpeed >= 4)
				{
					playerSpeed++;
				}
				else
				{
					playerSpeed = 4;
				}
			}
			else if(cTime >= 10)
			{
				if(playerSpeed >= 5)
				{
					playerSpeed++;
				}
				else
				{
					playerSpeed = 5;
				}
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
            	playerSpeed = 0;
			}
			else if(cTime > 30)
			{
				playerSpeed -= 2;
			}
			else if(cTime > 10)
			{
				playerSpeed --;
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
				if(playerSpeed <= 3)
				{
					playerSpeed--;
				}
				else
				{
					playerSpeed = -3;
				}
			}
			else if(cTime >= 20)
			{
				if(playerSpeed <= 4)
				{
					playerSpeed--;
				}
				else
				{
					playerSpeed = -4;
				}
			}
			else if(cTime >= 10)
			{
				if(playerSpeed <= 5)
				{
					playerSpeed--;
				}
				else
				{
					playerSpeed = -5;
				}
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

function keyUpListener(e)
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

//easy multidimensional array creation for pixelArray
function createArray(length)
{
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1)
    {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = createArray.apply(this, args);
    }

    return arr;
}

function frame()
{

    playerImgFrame ++;
    if(playerImgFrame >= 14)
    {
        playerImgFrame = 1;
    }
}


Game._timerIntervalId = setInterval(Game.timerTick, 1000);


