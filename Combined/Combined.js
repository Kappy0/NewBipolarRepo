var canvas, stage, whichStage;
var ga = 1.0;
var context = 0;
var timerId = 0;

function init()
{
	canvas = document.getElementById("canvas");
	context = canvas.getContext("2d");
	menuInit();
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
* Menus
*
 */
var menuStage;

var menuBackground;
var creditsBackground;
var helpBackground;

var beginBtnSheet;
var backBtnSheet;
var creditsBtnSheet;
var helpBtnSheet;

var beginButton;
var creditsButton;
var helpButton;
var backButton;

var menuState = 0;//main menu, help, credits
var optionSelected = 0;//Begin, Help, Credits

function menuInit()
{
    document.onkeydown = menuKeyDown;
    document.onkeyup = menuKeyUp;

    if(!(!!document.createElement('canvas').getContext))
    {
        var wrapper = document.getElementById("canvasWrapper");
        wrapper.innerHTML = "Your browser does not appear to support " +
            "the HTML5 Canvas element";
        return;
    }
    menuStage = new createjs.Stage(canvas);

    menuBackground = new createjs.Bitmap("MenuArt/New Title Screen.png");
    menuBackground.y = 0;
    menuBackground.x = 0;
    menuStage.addChild(menuBackground);

    creditsBackground = new createjs.Bitmap("MenuArt/Intro Screens/Credits Screen.png");
    creditsBackground.y = 0;
    creditsBackground.x = 0;
    menuStage.addChild(creditsBackground);

    helpBackground = new createjs.Bitmap("MenuArt/Intro Screens/Help Screen.png");
    helpBackground.x = 0;
    helpBackground.y = 0;
    menuStage.addChild(helpBackground);

    backBtnSheet = new createjs.SpriteSheet({images: ["MenuArt/BackButton/backbutton.png"], frames: [[0,0,720,481,0,78,387.45],[0,481,720,481,0,78,387.45]]});
    backButton = new createjs.Sprite(backBtnSheet);
    backButton.x = 78;
    backButton.y = 385;
    menuStage.addChild(backButton);
    backButton.addEventListener("click", back);

    beginBtnSheet =  new createjs.SpriteSheet({images: ["MenuArt/BeginButton/beginbutton.png"], frames: [[0,0,721,481,0,210.5,416.45],[0,481,721,481,0,210.5,416.45]]});
    beginButton = new createjs.Sprite(beginBtnSheet);
    beginButton.x = 210;
    beginButton.y = 415;
    beginButton.addEventListener("click", beginGame);
    menuStage.addChild(beginButton);

    creditsBtnSheet = new createjs.SpriteSheet({images: ["MenuArt/Title Screen Buttons/Credits.png"], frames: [[0,0,721,480,0,351.5,216],[0,480,721,480,0,351.5,216]]});
    creditsButton = new createjs.Sprite(creditsBtnSheet);
    creditsButton.x = 342;
    creditsButton.y = 186;
    creditsButton.addEventListener("click",credits);
    menuStage.addChild(creditsButton);

    helpBtnSheet = new createjs.SpriteSheet({images: ["MenuArt/Title Screen Buttons/help.png"], frames: [[0,0,720,481,0,349,217.5],[0,481,720,481,0,349,217.5]]});
    helpButton = new createjs.Sprite(helpBtnSheet);
    helpButton.x = 83;
    helpButton.y = 313;
 //   var hit = new Shape();
 //   hit.graphics.ss(2).s('#222222').dr(83,313,53,26);
  //  helpButton.hitArea = hit;
    menuStage.addChild(helpButton);
    helpButton.addEventListener("click", help);
    helpButton.addEventListener("mouseover", help);
    helpButton.addEventListener("mouseout", help);
    //322,202
    //375,228
                                                 //135,395

    //Test Circle
 //   var circle = new createjs.Shape();
 //   circle.graphics.beginFill("red").drawCircle(0, 0, 50);
 //   circle.x = circle.y = 100;
 //   circle.name = "circle";
 //   menuStage.addChild(circle);
 //   circle.addEventListener("click", help);
  // circle.addEventListener("dblclick", help);
  //  circle.addEventListener("mouseover", help);
  //  circle.addEventListener("mouseout", help);

    //Update loop
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", menuTick);
}

function menuTick()
{
    switch(menuState)
    {
        case 0://Main Menu
            creditsBackground.visible = false;
            helpBackground.visible = false;
            backButton.visible = false;
            menuBackground.visible = true;
            beginButton.visible = true;
            creditsButton.visible = true;
            helpButton.visible = true;
            break;
        case 1://Help
            menuBackground.visible = false;
            beginButton.visible = false;
            creditsButton.visible = false;
            helpButton.visible = false;
            creditsBackground.visible = false;

            helpBackground.visible = true;
            backButton.visible = true;
            break;
        case 2://Credits
            menuBackground.visible = false;
            beginButton.visible = false;
            creditsButton.visible = false;
            helpButton.visible = false;
            helpBackground.visible = false;

            creditsBackground.visible = true;
            backButton.visible = true;
            break;
    }
    menuStage.update();
}

function beginGame(e)
{
    if(e.type == "mouseover")
    {
        beginButton.gotoAndStop(1);
    }
    if(e.type == "mouseout")
    {
        beginButton.gotoAndStop(0);
    }
    if(e.type == "click")
    {
        menuStage.removeAllChildren();
        createjs.Ticker.removeEventListener("tick", menuTick);
        pInit();
    }
}

function credits(e)
{
    if(e.type == "mouseover")
    {
        creditsButton.gotoAndStop(1);
    }
    if(e.type == "mouseout")
    {
        creditsButton.gotoAndStop(0);
    }
    if(e.type == "click")
    {
        menuState = 2;
    }
}

function help(e)
{
    if(e.type == "mouseover")
    {
        helpButton.gotoAndStop(1);
    }
    if(e.type == "mouseout")
    {
        helpButton.gotoAndStop(0);
    }
    if(e.type == "click")
    {
        menuState = 1;
    }
}

function back(e)
{
    if(e.type == "mouseover")
    {
        backButton.gotoAndStop(1);
    }
    if(e.type == "mouseout")
    {
        backButton.gotoAndStop(0);
    }
    if(e.type == "click")
    {
        menuState = 0;
    }
}

function menuKeyDown(e)
{
    //w and up
    if(e.keyCode == 87 || e.keyCode == 38)
    {
    }

    //d and right
    if((e.keyCode == 68 || e.keyCode == 39))
    {
    }
    //a and left
    else if((e.keyCode == 65 || e.keyCode == 37))
    {
    }
}

function menuKeyUp(e)
{
    //w and up
    if(e.keyCode == 87 || e.keyCode == 38)
    {
    }

    //d and right
    if((e.keyCode == 68 || e.keyCode == 39))
    {
    }
    //a and left
    else if((e.keyCode == 65 || e.keyCode == 37))
    {
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
var partyGravity = 9;
var playerGravity = 9;

var breakingGlassSheet;
var breakingGlass;
var isBreaking = false;

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
	
	breakingGlassSheet = new createjs.SpriteSheet({images: ["Platforms/Small Platform Break Animation.png"], frames: [[0,0,132,191,0,65,94.5],[132,0,132,191,0,65,94.5],[264,0,132,191,0,65,94.5],[396,0,132,191,0,65,94.5],[528,0,132,191,0,65,94.5],[660,0,132,191,0,65,94.5],[792,0,132,191,0,65,94.5],[924,0,132,191,0,65,94.5],[1056,0,132,191,0,65,94.5],[1188,0,132,191,0,65,94.5],[1320,0,132,191,0,65,94.5],[1452,0,132,191,0,65,94.5],[1584,0,132,191,0,65,94.5],[1716,0,132,191,0,65,94.5],[1848,0,132,191,0,65,94.5],[0,191,132,191,0,65,94.5],[132,191,132,191,0,65,94.5],[264,191,132,191,0,65,94.5],[396,191,132,191,0,65,94.5],[528,191,132,191,0,65,94.5],[660,191,132,191,0,65,94.5],[792,191,132,191,0,65,94.5],[924,191,132,191,0,65,94.5],[1056,191,132,191,0,65,94.5],[1188,191,132,191,0,65,94.5],[1320,191,132,191,0,65,94.5],[1452,191,132,191,0,65,94.5],[1584,191,132,191,0,65,94.5],[1716,191,132,191,0,65,94.5],[1848,191,132,191,0,65,94.5],[0,382,132,191,0,65,94.5],[132,382,132,191,0,65,94.5],[264,382,132,191,0,65,94.5],[396,382,132,191,0,65,94.5],[528,382,132,191,0,65,94.5],[660,382,132,191,0,65,94.5]]});
	breakingGlass = new createjs.Sprite(breakingGlassSheet);
	breakingGlass.x = 375;
	breakingGlass.y = 0;
	breakingGlass.scaleX = 1.5;
	breakingGlass.scaleY = 1;
	pStage.addChild(breakingGlass);

	
	partyJumpSheet = new createjs.SpriteSheet({images: ["11_9_13 SLOW Party/Main Character/Jumping Animation.png"], frames: [[0,0,480,330,0,226.85,156.3],[480,0,480,330,0,226.85,156.3],[960,0,480,330,0,226.85,156.3],[1440,0,480,330,0,226.85,156.3],[1920,0,480,330,0,226.85,156.3],[2400,0,480,330,0,226.85,156.3],[2880,0,480,330,0,226.85,156.3],[3360,0,480,330,0,226.85,156.3],[0,330,480,330,0,226.85,156.3],[480,330,480,330,0,226.85,156.3],[960,330,480,330,0,226.85,156.3],[1440,330,480,330,0,226.85,156.3],[1920,330,480,330,0,226.85,156.3],[2400,330,480,330,0,226.85,156.3],[2880,330,480,330,0,226.85,156.3],[3360,330,480,330,0,226.85,156.3],[0,660,480,330,0,226.85,156.3],[480,660,480,330,0,226.85,156.3],[960,660,480,330,0,226.85,156.3],[1440,660,480,330,0,226.85,156.3],[1920,660,480,330,0,226.85,156.3],[2400,660,480,330,0,226.85,156.3],[2880,660,480,330,0,226.85,156.3],[3360,660,480,330,0,226.85,156.3],[0,990,480,330,0,226.85,156.3],[480,990,480,330,0,226.85,156.3],[960,990,480,330,0,226.85,156.3],[1440,990,480,330,0,226.85,156.3],[1920,990,480,330,0,226.85,156.3],[2400,990,480,330,0,226.85,156.3],[2880,990,480,330,0,226.85,156.3],[3360,990,480,330,0,226.85,156.3],[0,1320,480,330,0,226.85,156.3],[480,1320,480,330,0,226.85,156.3],[960,1320,480,330,0,226.85,156.3],[1440,1320,480,330,0,226.85,156.3],[1920,1320,480,330,0,226.85,156.3],[2400,1320,480,330,0,226.85,156.3],[2880,1320,480,330,0,226.85,156.3],[3360,1320,480,330,0,226.85,156.3],[0,1650,480,330,0,226.85,156.3],[480,1650,480,330,0,226.85,156.3],[960,1650,480,330,0,226.85,156.3],[1440,1650,480,330,0,226.85,156.3],[1920,1650,480,330,0,226.85,156.3],[2400,1650,480,330,0,226.85,156.3],[2880,1650,480,330,0,226.85,156.3],[3360,1650,480,330,0,226.85,156.3],[0,1980,480,330,0,226.85,156.3],[480,1980,480,330,0,226.85,156.3],[960,1980,480,330,0,226.85,156.3],[1440,1980,480,330,0,226.85,156.3],[1920,1980,480,330,0,226.85,156.3],[2400,1980,480,330,0,226.85,156.3],[2880,1980,480,330,0,226.85,156.3],[3360,1980,480,330,0,226.85,156.3],[0,2310,480,330,0,226.85,156.3],[480,2310,480,330,0,226.85,156.3],[960,2310,480,330,0,226.85,156.3],[1440,2310,480,330,0,226.85,156.3],[1920,2310,480,330,0,226.85,156.3],[2400,2310,480,330,0,226.85,156.3],[2880,2310,480,330,0,226.85,156.3],[3360,2310,480,330,0,226.85,156.3],[0,2640,480,330,0,226.85,156.3],[480,2640,480,330,0,226.85,156.3],[960,2640,480,330,0,226.85,156.3]]});
	partyJump = new createjs.Sprite(partyJumpSheet);
	partyJump.x = 350;
	partyJump.y = 350;
//	partyJump.scaleX = 0.7;
//	partyJump.scaleY = 0.7;
    pStage.addChild(partyJump);
	
	partyJumpSheet06 = new createjs.SpriteSheet({images: ["11_9_13 SLOW Party/P01/P01 Jump Animation.png"], frames: [[0,0,496,338,0,266.45,162.95],[496,0,496,338,0,266.45,162.95],[992,0,496,338,0,266.45,162.95],[1488,0,496,338,0,266.45,162.95],[1984,0,496,338,0,266.45,162.95],[2480,0,496,338,0,266.45,162.95],[2976,0,496,338,0,266.45,162.95],[3472,0,496,338,0,266.45,162.95],[0,338,496,338,0,266.45,162.95],[496,338,496,338,0,266.45,162.95],[992,338,496,338,0,266.45,162.95],[1488,338,496,338,0,266.45,162.95],[1984,338,496,338,0,266.45,162.95],[2480,338,496,338,0,266.45,162.95],[2976,338,496,338,0,266.45,162.95],[3472,338,496,338,0,266.45,162.95],[0,676,496,338,0,266.45,162.95],[496,676,496,338,0,266.45,162.95],[992,676,496,338,0,266.45,162.95],[1488,676,496,338,0,266.45,162.95],[1984,676,496,338,0,266.45,162.95],[2480,676,496,338,0,266.45,162.95],[2976,676,496,338,0,266.45,162.95],[3472,676,496,338,0,266.45,162.95],[0,1014,496,338,0,266.45,162.95],[496,1014,496,338,0,266.45,162.95],[992,1014,496,338,0,266.45,162.95],[1488,1014,496,338,0,266.45,162.95],[1984,1014,496,338,0,266.45,162.95],[2480,1014,496,338,0,266.45,162.95],[2976,1014,496,338,0,266.45,162.95],[3472,1014,496,338,0,266.45,162.95],[0,1352,496,338,0,266.45,162.95],[496,1352,496,338,0,266.45,162.95],[992,1352,496,338,0,266.45,162.95],[1488,1352,496,338,0,266.45,162.95],[1984,1352,496,338,0,266.45,162.95],[2480,1352,496,338,0,266.45,162.95],[2976,1352,496,338,0,266.45,162.95],[3472,1352,496,338,0,266.45,162.95],[0,1690,496,338,0,266.45,162.95],[496,1690,496,338,0,266.45,162.95],[992,1690,496,338,0,266.45,162.95],[1488,1690,496,338,0,266.45,162.95],[1984,1690,496,338,0,266.45,162.95],[2480,1690,496,338,0,266.45,162.95],[2976,1690,496,338,0,266.45,162.95],[3472,1690,496,338,0,266.45,162.95],[0,2028,496,338,0,266.45,162.95],[496,2028,496,338,0,266.45,162.95],[992,2028,496,338,0,266.45,162.95],[1488,2028,496,338,0,266.45,162.95],[1984,2028,496,338,0,266.45,162.95],[2480,2028,496,338,0,266.45,162.95],[2976,2028,496,338,0,266.45,162.95],[3472,2028,496,338,0,266.45,162.95],[0,2366,496,338,0,266.45,162.95],[496,2366,496,338,0,266.45,162.95],[992,2366,496,338,0,266.45,162.95],[1488,2366,496,338,0,266.45,162.95]]});
	partyJump06 = new createjs.Sprite(partyJumpSheet06);
	partyJump06.x = 550;
	partyJump06.y = 350;
	partyJump06.scaleX = -1;
    pStage.addChild(partyJump06);
	
	partyJumpSheet02 = new createjs.SpriteSheet({images: ["11_9_13 SLOW Party/P02/P02 Jumping Animation.png"], frames: [[0,0,457,317,0,256.9,150.45],[457,0,457,317,0,256.9,150.45],[914,0,457,317,0,256.9,150.45],[1371,0,457,317,0,256.9,150.45],[1828,0,457,317,0,256.9,150.45],[2285,0,457,317,0,256.9,150.45],[2742,0,457,317,0,256.9,150.45],[3199,0,457,317,0,256.9,150.45],[0,317,457,317,0,256.9,150.45],[457,317,457,317,0,256.9,150.45],[914,317,457,317,0,256.9,150.45],[1371,317,457,317,0,256.9,150.45],[1828,317,457,317,0,256.9,150.45],[2285,317,457,317,0,256.9,150.45],[2742,317,457,317,0,256.9,150.45],[3199,317,457,317,0,256.9,150.45],[0,634,457,317,0,256.9,150.45],[457,634,457,317,0,256.9,150.45],[914,634,457,317,0,256.9,150.45],[1371,634,457,317,0,256.9,150.45],[1828,634,457,317,0,256.9,150.45],[2285,634,457,317,0,256.9,150.45],[2742,634,457,317,0,256.9,150.45],[3199,634,457,317,0,256.9,150.45],[0,951,457,317,0,256.9,150.45],[457,951,457,317,0,256.9,150.45],[914,951,457,317,0,256.9,150.45],[1371,951,457,317,0,256.9,150.45],[1828,951,457,317,0,256.9,150.45],[2285,951,457,317,0,256.9,150.45],[2742,951,457,317,0,256.9,150.45],[3199,951,457,317,0,256.9,150.45],[0,1268,457,317,0,256.9,150.45],[457,1268,457,317,0,256.9,150.45],[914,1268,457,317,0,256.9,150.45],[1371,1268,457,317,0,256.9,150.45],[1828,1268,457,317,0,256.9,150.45],[2285,1268,457,317,0,256.9,150.45],[2742,1268,457,317,0,256.9,150.45],[3199,1268,457,317,0,256.9,150.45],[0,1585,457,317,0,256.9,150.45],[457,1585,457,317,0,256.9,150.45],[914,1585,457,317,0,256.9,150.45],[1371,1585,457,317,0,256.9,150.45],[1828,1585,457,317,0,256.9,150.45],[2285,1585,457,317,0,256.9,150.45],[2742,1585,457,317,0,256.9,150.45],[3199,1585,457,317,0,256.9,150.45],[0,1902,457,317,0,256.9,150.45],[457,1902,457,317,0,256.9,150.45],[914,1902,457,317,0,256.9,150.45],[1371,1902,457,317,0,256.9,150.45],[1828,1902,457,317,0,256.9,150.45],[2285,1902,457,317,0,256.9,150.45],[2742,1902,457,317,0,256.9,150.45],[3199,1902,457,317,0,256.9,150.45],[0,2219,457,317,0,256.9,150.45],[457,2219,457,317,0,256.9,150.45],[914,2219,457,317,0,256.9,150.45],[1371,2219,457,317,0,256.9,150.45]]});
	partyJump02 = new createjs.Sprite(partyJumpSheet02);
	partyJump02.x = 100;
	partyJump02.y = 350;
    pStage.addChild(partyJump02);
	
	partyJumpSheet03 = new createjs.SpriteSheet({images: ["11_9_13 SLOW Party/P03/P03 Jumping Animation.png"], frames: [[0,0,454,318,0,248,149],[454,0,454,318,0,248,149],[908,0,454,318,0,248,149],[1362,0,454,318,0,248,149],[1816,0,454,318,0,248,149],[2270,0,454,318,0,248,149],[2724,0,454,318,0,248,149],[3178,0,454,318,0,248,149],[3632,0,454,318,0,248,149],[0,318,454,318,0,248,149],[454,318,454,318,0,248,149],[908,318,454,318,0,248,149],[1362,318,454,318,0,248,149],[1816,318,454,318,0,248,149],[2270,318,454,318,0,248,149],[2724,318,454,318,0,248,149],[3178,318,454,318,0,248,149],[3632,318,454,318,0,248,149],[0,636,454,318,0,248,149],[454,636,454,318,0,248,149],[908,636,454,318,0,248,149],[1362,636,454,318,0,248,149],[1816,636,454,318,0,248,149],[2270,636,454,318,0,248,149],[2724,636,454,318,0,248,149],[3178,636,454,318,0,248,149],[3632,636,454,318,0,248,149],[0,954,454,318,0,248,149],[454,954,454,318,0,248,149],[908,954,454,318,0,248,149],[1362,954,454,318,0,248,149],[1816,954,454,318,0,248,149],[2270,954,454,318,0,248,149],[2724,954,454,318,0,248,149],[3178,954,454,318,0,248,149],[3632,954,454,318,0,248,149],[0,1272,454,318,0,248,149],[454,1272,454,318,0,248,149],[908,1272,454,318,0,248,149],[1362,1272,454,318,0,248,149],[1816,1272,454,318,0,248,149],[2270,1272,454,318,0,248,149],[2724,1272,454,318,0,248,149],[3178,1272,454,318,0,248,149],[3632,1272,454,318,0,248,149],[0,1590,454,318,0,248,149],[454,1590,454,318,0,248,149],[908,1590,454,318,0,248,149],[1362,1590,454,318,0,248,149],[1816,1590,454,318,0,248,149],[2270,1590,454,318,0,248,149],[2724,1590,454,318,0,248,149],[3178,1590,454,318,0,248,149],[3632,1590,454,318,0,248,149],[0,1908,454,318,0,248,149],[454,1908,454,318,0,248,149],[908,1908,454,318,0,248,149],[1362,1908,454,318,0,248,149],[1816,1908,454,318,0,248,149],[2270,1908,454,318,0,248,149],[2724,1908,454,318,0,248,149]]});
	partyJump03 = new createjs.Sprite(partyJumpSheet03);
	partyJump03.x = 200;
	partyJump03.y = 350;
    pStage.addChild(partyJump03);
	
	partyJumpSheet04 = new createjs.SpriteSheet({images: ["11_9_13 SLOW Party/P04/P04 Jumping Animation.png"], frames: [[0,0,403,283,0,184,132.45],[403,0,403,283,0,184,132.45],[806,0,403,283,0,184,132.45],[1209,0,403,283,0,184,132.45],[1612,0,403,283,0,184,132.45],[2015,0,403,283,0,184,132.45],[2418,0,403,283,0,184,132.45],[2821,0,403,283,0,184,132.45],[3224,0,403,283,0,184,132.45],[3627,0,403,283,0,184,132.45],[0,283,403,283,0,184,132.45],[403,283,403,283,0,184,132.45],[806,283,403,283,0,184,132.45],[1209,283,403,283,0,184,132.45],[1612,283,403,283,0,184,132.45],[2015,283,403,283,0,184,132.45],[2418,283,403,283,0,184,132.45],[2821,283,403,283,0,184,132.45],[3224,283,403,283,0,184,132.45],[3627,283,403,283,0,184,132.45],[0,566,403,283,0,184,132.45],[403,566,403,283,0,184,132.45],[806,566,403,283,0,184,132.45],[1209,566,403,283,0,184,132.45],[1612,566,403,283,0,184,132.45],[2015,566,403,283,0,184,132.45],[2418,566,403,283,0,184,132.45],[2821,566,403,283,0,184,132.45],[3224,566,403,283,0,184,132.45],[3627,566,403,283,0,184,132.45],[0,849,403,283,0,184,132.45],[403,849,403,283,0,184,132.45],[806,849,403,283,0,184,132.45],[1209,849,403,283,0,184,132.45],[1612,849,403,283,0,184,132.45],[2015,849,403,283,0,184,132.45],[2418,849,403,283,0,184,132.45],[2821,849,403,283,0,184,132.45],[3224,849,403,283,0,184,132.45],[3627,849,403,283,0,184,132.45],[0,1132,403,283,0,184,132.45],[403,1132,403,283,0,184,132.45],[806,1132,403,283,0,184,132.45],[1209,1132,403,283,0,184,132.45],[1612,1132,403,283,0,184,132.45],[2015,1132,403,283,0,184,132.45],[2418,1132,403,283,0,184,132.45],[2821,1132,403,283,0,184,132.45],[3224,1132,403,283,0,184,132.45],[3627,1132,403,283,0,184,132.45],[0,1415,403,283,0,184,132.45],[403,1415,403,283,0,184,132.45],[806,1415,403,283,0,184,132.45],[1209,1415,403,283,0,184,132.45],[1612,1415,403,283,0,184,132.45],[2015,1415,403,283,0,184,132.45],[2418,1415,403,283,0,184,132.45],[2821,1415,403,283,0,184,132.45],[3224,1415,403,283,0,184,132.45],[3627,1415,403,283,0,184,132.45],[0,1698,403,283,0,184,132.45]]});
	partyJump04 = new createjs.Sprite(partyJumpSheet04);
	partyJump04.x = 600;
	partyJump04.y = 350;
    pStage.addChild(partyJump04);
	
	partyJumpSheet05 = new createjs.SpriteSheet({images: ["11_9_13 SLOW Party/P05/P05 Jumping Animation.png"], frames: [[0,0,475,336,0,266.1,157.6],[475,0,475,336,0,266.1,157.6],[950,0,475,336,0,266.1,157.6],[1425,0,475,336,0,266.1,157.6],[1900,0,475,336,0,266.1,157.6],[2375,0,475,336,0,266.1,157.6],[2850,0,475,336,0,266.1,157.6],[3325,0,475,336,0,266.1,157.6],[0,336,475,336,0,266.1,157.6],[475,336,475,336,0,266.1,157.6],[950,336,475,336,0,266.1,157.6],[1425,336,475,336,0,266.1,157.6],[1900,336,475,336,0,266.1,157.6],[2375,336,475,336,0,266.1,157.6],[2850,336,475,336,0,266.1,157.6],[3325,336,475,336,0,266.1,157.6],[0,672,475,336,0,266.1,157.6],[475,672,475,336,0,266.1,157.6],[950,672,475,336,0,266.1,157.6],[1425,672,475,336,0,266.1,157.6],[1900,672,475,336,0,266.1,157.6],[2375,672,475,336,0,266.1,157.6],[2850,672,475,336,0,266.1,157.6],[3325,672,475,336,0,266.1,157.6],[0,1008,475,336,0,266.1,157.6],[475,1008,475,336,0,266.1,157.6],[950,1008,475,336,0,266.1,157.6],[1425,1008,475,336,0,266.1,157.6],[1900,1008,475,336,0,266.1,157.6],[2375,1008,475,336,0,266.1,157.6],[2850,1008,475,336,0,266.1,157.6],[3325,1008,475,336,0,266.1,157.6],[0,1344,475,336,0,266.1,157.6],[475,1344,475,336,0,266.1,157.6],[950,1344,475,336,0,266.1,157.6],[1425,1344,475,336,0,266.1,157.6],[1900,1344,475,336,0,266.1,157.6],[2375,1344,475,336,0,266.1,157.6],[2850,1344,475,336,0,266.1,157.6],[3325,1344,475,336,0,266.1,157.6],[0,1680,475,336,0,266.1,157.6],[475,1680,475,336,0,266.1,157.6],[950,1680,475,336,0,266.1,157.6],[1425,1680,475,336,0,266.1,157.6],[1900,1680,475,336,0,266.1,157.6],[2375,1680,475,336,0,266.1,157.6],[2850,1680,475,336,0,266.1,157.6],[3325,1680,475,336,0,266.1,157.6],[0,2016,475,336,0,266.1,157.6],[475,2016,475,336,0,266.1,157.6],[950,2016,475,336,0,266.1,157.6],[1425,2016,475,336,0,266.1,157.6],[1900,2016,475,336,0,266.1,157.6],[2375,2016,475,336,0,266.1,157.6],[2850,2016,475,336,0,266.1,157.6],[3325,2016,475,336,0,266.1,157.6],[0,2352,475,336,0,266.1,157.6],[475,2352,475,336,0,266.1,157.6],[950,2352,475,336,0,266.1,157.6],[1425,2352,475,336,0,266.1,157.6],[1900,2352,475,336,0,266.1,157.6],[2375,2352,475,336,0,266.1,157.6]]});
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
			partyJump.gotoAndPlay(24);
			partyJump02.gotoAndPlay(24);
			partyJump03.gotoAndPlay(24);
			partyJump04.gotoAndPlay(24);
			partyJump05.gotoAndPlay(24);
			partyJump06.gotoAndPlay(24);
			partyVelocity = pJumpSpeed;
		}
		if(partyJump.currentFrame >= 41)
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
		if(partyJump.currentFrame >= 41)
		{
			partyJump.gotoAndStop(0);//.stop();
			partyJump02.gotoAndStop(0);//.stop();
			partyJump03.gotoAndStop(0);//.stop();
			partyJump04.gotoAndStop(0);//.stop();
			partyJump05.gotoAndStop(0);//.stop();
			partyJump06.gotoAndStop(0);//.stop();
	//		jumping = false;
			partyVelocity = 0;
		}
	}
	
	if(timesJumped >= 3)
	{
		//End party phase, transition to manic.
		playerGravity = -10;
		partyJump.y += -1;
		//Start fade out to manic here...
		if(partyJump.y <= 200 && !isBreaking)
		{
			breakingGlass.gotoAndPlay(0);
			isBreaking = true;
		}
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
var player, personFlash1, personFlash2, personFlash3;
var glass, glassInst;
var orbs, orbInst, orbAni;
var time = 80;
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
var dQueue;

function dInit()
{
    dQueue = new createjs.LoadQueue(true);
    dQueue.installPlugin(createjs.Sound); // Plug in SoundJS to handle browser-specific paths
    dQueue.loadFile({id:"depressionMusic", src:"depressionBGMusic.mp3", type:createjs.LoadQueue.SOUND});
    dQueue.loadFile({id:"flashSound", src:"Flashlight Sound.mp3", type:createjs.LoadQueue.SOUND});

    createjs.Sound.play("depressionMusic", {loop:-1});

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

    var person1Ani = new createjs.SpriteSheet({images: ["P01 Swim.png"], frames: [[0,0,202,135,0,100.05,61.5],[202,0,202,135,0,100.05,61.5],[404,0,202,135,0,100.05,61.5],[606,0,202,135,0,100.05,61.5],[808,0,202,135,0,100.05,61.5],[0,135,202,135,0,100.05,61.5],[202,135,202,135,0,100.05,61.5],[404,135,202,135,0,100.05,61.5],[606,135,202,135,0,100.05,61.5],[808,135,202,135,0,100.05,61.5],[0,270,202,135,0,100.05,61.5],[202,270,202,135,0,100.05,61.5],[404,270,202,135,0,100.05,61.5],[606,270,202,135,0,100.05,61.5],[808,270,202,135,0,100.05,61.5],[0,405,202,135,0,100.05,61.5],[202,405,202,135,0,100.05,61.5],[404,405,202,135,0,100.05,61.5],[606,405,202,135,0,100.05,61.5],[808,405,202,135,0,100.05,61.5],[0,540,202,135,0,100.05,61.5],[202,540,202,135,0,100.05,61.5],[404,540,202,135,0,100.05,61.5],[606,540,202,135,0,100.05,61.5],[808,540,202,135,0,100.05,61.5],[0,675,202,135,0,100.05,61.5],[202,675,202,135,0,100.05,61.5],[404,675,202,135,0,100.05,61.5]]});
    personFlash1 = new createjs.Sprite(person1Ani);
    personFlash1.x = 20;
    personFlash1.y = 145;
    dstage.addChild(personFlash1);

    var person2Ani = new createjs.SpriteSheet({images: ["P02 Swimming.png"], frames: [[0,0,196,131,0,101,60.5],[196,0,196,131,0,101,60.5],[392,0,196,131,0,101,60.5],[588,0,196,131,0,101,60.5],[784,0,196,131,0,101,60.5],[0,131,196,131,0,101,60.5],[196,131,196,131,0,101,60.5],[392,131,196,131,0,101,60.5],[588,131,196,131,0,101,60.5],[784,131,196,131,0,101,60.5],[0,262,196,131,0,101,60.5],[196,262,196,131,0,101,60.5],[392,262,196,131,0,101,60.5],[588,262,196,131,0,101,60.5],[784,262,196,131,0,101,60.5],[0,393,196,131,0,101,60.5],[196,393,196,131,0,101,60.5],[392,393,196,131,0,101,60.5],[588,393,196,131,0,101,60.5],[784,393,196,131,0,101,60.5],[0,524,196,131,0,101,60.5],[196,524,196,131,0,101,60.5],[392,524,196,131,0,101,60.5],[588,524,196,131,0,101,60.5],[784,524,196,131,0,101,60.5]]});
    personFlash2 = new createjs.Sprite(person2Ani);
    personFlash2.x = 700;
    personFlash2.y = 240;
    dstage.addChild(personFlash2);

    var person3Ani = new createjs.SpriteSheet({images: ["P03 Swimming.png"], frames: [[0,0,197,132,0,100.5,57.25],[197,0,197,132,0,100.5,57.25],[394,0,197,132,0,100.5,57.25],[591,0,197,132,0,100.5,57.25],[788,0,197,132,0,100.5,57.25],[0,132,197,132,0,100.5,57.25],[197,132,197,132,0,100.5,57.25],[394,132,197,132,0,100.5,57.25],[591,132,197,132,0,100.5,57.25],[788,132,197,132,0,100.5,57.25],[0,264,197,132,0,100.5,57.25],[197,264,197,132,0,100.5,57.25],[394,264,197,132,0,100.5,57.25],[591,264,197,132,0,100.5,57.25],[788,264,197,132,0,100.5,57.25],[0,396,197,132,0,100.5,57.25],[197,396,197,132,0,100.5,57.25],[394,396,197,132,0,100.5,57.25],[591,396,197,132,0,100.5,57.25],[788,396,197,132,0,100.5,57.25],[0,528,197,132,0,100.5,57.25],[197,528,197,132,0,100.5,57.25],[394,528,197,132,0,100.5,57.25],[591,528,197,132,0,100.5,57.25],[788,528,197,132,0,100.5,57.25]]});
    personFlash3 = new createjs.Sprite(person3Ani);
    personFlash3.x = 20;
    personFlash3.y = 400;
    dstage.addChild(personFlash3);

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

//    createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashPlugin]);
//    createjs.Sound.registerSound("depressionBGMusic", "bgMusicDepression");
//    dBackgroundMusic = createjs.Sound.createInstance("bgMusicDepression");
//    instance = createjs.Sound.play(dBackgroundMusic);

//    createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.FlashPlugin]);
//    createjs.Sound.addEventListener("fileload", createjs.proxy(this.loadHandler, this));
//    createjs.Sound.registerSound("depressionBGMusic", "bgMusicDepression");
//    function loadHandler(event) {
//        // This is fired for each sound that is registered.
//        instance = createjs.Sound.play("bgMusicDepression");  // play using id.  Could also use full sourcepath or event.src.
//        instance.addEventListener("complete", createjs.proxy(this.handleComplete, this));
//        instance.volume = 1.0;
//    }

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

//    instance.play({loop:-1});
    scrollBackground();
    orbInst.play();
    personFlash1.play();
    personFlash2.play();
    personFlash3.play();

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
    createjs.Sound.play("flashSound");
    orbInst = new createjs.Sprite(orbAni);

    var personChoice = Math.floor(Math.random() * 3);

    switch(personChoice)
    {
        case 0:
            orbInst.x = personFlash1.x;
            orbInst.y = personFlash1.y;
            break;
        case 1:
            orbInst.x = personFlash2.x;
            orbInst.y = personFlash2.y;
            break;
        case 2:
            orbInst.x = personFlash3.x;
            orbInst.y = personFlash3.y;
            break;
    }

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
var jumpStrength = 12//7.25;
var friction = 1;
var gameOver = false;
var goSpring;
var springAcceleration = 25/27;
var lockControls = false;
var xVelocity = 0;
var xAcceleration = 0;
var xFriction = 0;
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

var bplatformAni01;
var bplatformAni02;

var closestPlatform;
var platformArray = new Array();

var playerImg;
var flyingPlayer;
var childSheet;
var childSheet2;
var childSheet3;
var childSheet4;
var childSheet5;
var cArray = new Array();

var p1;
var p2;
var p3;
var p4;
var p5;

var bp1;
var bp2;

var sparkleSheet;
var sparkle1;
var sparkleStop = true;

var testAni;
var targetDist;

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
	mstage.addChild(bgSprite);

	bpNewSprite = new createjs.SpriteSheet({animations: {brokenplatform: [1,35]}, images: ["Fixed_Platform_Break.png"], frames: [[0,0,192,380,0,96,189.05],[192,0,192,380,0,96,189.05],[384,0,192,380,0,96,189.05],[576,0,192,380,0,96,189.05],[768,0,192,380,0,96,189.05],[960,0,192,380,0,96,189.05],[1152,0,192,380,0,96,189.05],[1344,0,192,380,0,96,189.05],[1536,0,192,380,0,96,189.05],[1728,0,192,380,0,96,189.05],[0,380,192,380,0,96,189.05],[192,380,192,380,0,96,189.05],[384,380,192,380,0,96,189.05],[576,380,192,380,0,96,189.05],[768,380,192,380,0,96,189.05],[960,380,192,380,0,96,189.05],[1152,380,192,380,0,96,189.05],[1344,380,192,380,0,96,189.05],[1536,380,192,380,0,96,189.05],[1728,380,192,380,0,96,189.05],[0,760,192,380,0,96,189.05],[192,760,192,380,0,96,189.05],[384,760,192,380,0,96,189.05],[576,760,192,380,0,96,189.05],[768,760,192,380,0,96,189.05],[960,760,192,380,0,96,189.05],[1152,760,192,380,0,96,189.05],[1344,760,192,380,0,96,189.05],[1536,760,192,380,0,96,189.05],[1728,760,192,380,0,96,189.05],[0,1140,192,380,0,96,189.05],[192,1140,192,380,0,96,189.05],[384,1140,192,380,0,96,189.05],[576,1140,192,380,0,96,189.05],[768,1140,192,380,0,96,189.05],[960,1140,192,380,0,96,189.05]]});
	bpSprite = new createjs.Sprite(bpNewSprite);
	mstage.addChild(bpSprite);
	
	platformSheet = new createjs.SpriteSheet({images: ["Platforms/Small Platform Break Animation.png"], frames: [[0,0,132,191,0,65,94.5],[132,0,132,191,0,65,94.5],[264,0,132,191,0,65,94.5],[396,0,132,191,0,65,94.5],[528,0,132,191,0,65,94.5],[660,0,132,191,0,65,94.5],[792,0,132,191,0,65,94.5],[924,0,132,191,0,65,94.5],[1056,0,132,191,0,65,94.5],[1188,0,132,191,0,65,94.5],[1320,0,132,191,0,65,94.5],[1452,0,132,191,0,65,94.5],[1584,0,132,191,0,65,94.5],[1716,0,132,191,0,65,94.5],[1848,0,132,191,0,65,94.5],[0,191,132,191,0,65,94.5],[132,191,132,191,0,65,94.5],[264,191,132,191,0,65,94.5],[396,191,132,191,0,65,94.5],[528,191,132,191,0,65,94.5],[660,191,132,191,0,65,94.5],[792,191,132,191,0,65,94.5],[924,191,132,191,0,65,94.5],[1056,191,132,191,0,65,94.5],[1188,191,132,191,0,65,94.5],[1320,191,132,191,0,65,94.5],[1452,191,132,191,0,65,94.5],[1584,191,132,191,0,65,94.5],[1716,191,132,191,0,65,94.5],[1848,191,132,191,0,65,94.5],[0,382,132,191,0,65,94.5],[132,382,132,191,0,65,94.5],[264,382,132,191,0,65,94.5],[396,382,132,191,0,65,94.5],[528,382,132,191,0,65,94.5],[660,382,132,191,0,65,94.5]]});
    platformAni01 = new createjs.Sprite(platformSheet);
	platformAni01.x = 400;
	platformAni01.y = 270;
    mstage.addChild(platformAni01);
	
    platformAni02 = new createjs.Sprite(platformSheet);
	platformAni02.x = 100;
	platformAni02.y = 100;
    mstage.addChild(platformAni02);
	
    platformAni03 = new createjs.Sprite(platformSheet);
	platformAni03.x = 600;
	platformAni03.y = 410;
    mstage.addChild(platformAni03);
	
    platformAni04 = new createjs.Sprite(platformSheet);
	platformAni04.x = 3;
	platformAni04.y = 350;
    mstage.addChild(platformAni04);
	
    platformAni05 = new createjs.Sprite(platformSheet);
	platformAni05.x = 500;
	platformAni05.y = 50;
    mstage.addChild(platformAni05);
	
    bplatformAni01 = new createjs.Sprite(platformSheet);
	bplatformAni01.x = -100;
	bplatformAni01.y = -100;
    mstage.addChild(bplatformAni01);
	
    bplatformAni02 = new createjs.Sprite(platformSheet);
	bplatformAni02.x = -100;
	bplatformAni02.y = -100;
    mstage.addChild(bplatformAni02);

    playerImg = new createjs.SpriteSheet({images: ["Manic_Fly/Small ManicFly Animation.png"], frames: [[0,0,141,94,0,72.95,41.55],[141,0,141,94,0,72.95,41.55],[282,0,141,94,0,72.95,41.55],[423,0,141,94,0,72.95,41.55],[564,0,141,94,0,72.95,41.55],[705,0,141,94,0,72.95,41.55],[846,0,141,94,0,72.95,41.55],[0,94,141,94,0,72.95,41.55],[141,94,141,94,0,72.95,41.55],[282,94,141,94,0,72.95,41.55],[423,94,141,94,0,72.95,41.55],[564,94,141,94,0,72.95,41.55],[705,94,141,94,0,72.95,41.55],[846,94,141,94,0,72.95,41.55],[0,188,141,94,0,72.95,41.55],[141,188,141,94,0,72.95,41.55],[282,188,141,94,0,72.95,41.55],[423,188,141,94,0,72.95,41.55],[564,188,141,94,0,72.95,41.55],[705,188,141,94,0,72.95,41.55]]});
    flyingPlayer = new createjs.Sprite(playerImg);
	flyingPlayer.x = 360-32;
	flyingPlayer.y = 240;
    mstage.addChild(flyingPlayer);

    childsheet =  new createjs.SpriteSheet({images: ["Platforms/Small Person 01 Animation.png"], frames: [[0,0,124,83,0,66,38.1],[124,0,124,83,0,66,38.1],[248,0,124,83,0,66,38.1],[372,0,124,83,0,66,38.1],[0,83,124,83,0,66,38.1],[124,83,124,83,0,66,38.1],[248,83,124,83,0,66,38.1],[372,83,124,83,0,66,38.1],[0,166,124,83,0,66,38.1],[124,166,124,83,0,66,38.1],[248,166,124,83,0,66,38.1],[372,166,124,83,0,66,38.1],[0,249,124,83,0,66,38.1],[124,249,124,83,0,66,38.1],[248,249,124,83,0,66,38.1],[372,249,124,83,0,66,38.1],[0,332,124,83,0,66,38.1],[124,332,124,83,0,66,38.1],[248,332,124,83,0,66,38.1],[372,332,124,83,0,66,38.1],[0,415,124,83,0,66,38.1],[124,415,124,83,0,66,38.1]]});
    person1s = new createjs.Sprite(childsheet);
	person1s.x = -200;
	person1s.y = 500;
    mstage.addChild(person1s);

    childSheet2 = new createjs.SpriteSheet({images: ["Platforms/Person 02.png"], frames: [[0,0,283,189,0,153.5,79.55],[283,0,283,189,0,153.5,79.55],[566,0,283,189,0,153.5,79.55],[849,0,283,189,0,153.5,79.55],[1132,0,283,189,0,153.5,79.55],[1415,0,283,189,0,153.5,79.55],[1698,0,283,189,0,153.5,79.55],[0,189,283,189,0,153.5,79.55],[283,189,283,189,0,153.5,79.55],[566,189,283,189,0,153.5,79.55],[849,189,283,189,0,153.5,79.55],[1132,189,283,189,0,153.5,79.55],[1415,189,283,189,0,153.5,79.55],[1698,189,283,189,0,153.5,79.55],[0,378,283,189,0,153.5,79.55],[283,378,283,189,0,153.5,79.55]]});
    childSheet3 = new createjs.SpriteSheet({images: ["Platforms/Person 03.png"], frames: [[0,0,295,197,0,153,94.6],[295,0,295,197,0,153,94.6],[590,0,295,197,0,153,94.6],[885,0,295,197,0,153,94.6],[1180,0,295,197,0,153,94.6],[1475,0,295,197,0,153,94.6],[0,197,295,197,0,153,94.6],[295,197,295,197,0,153,94.6],[590,197,295,197,0,153,94.6],[885,197,295,197,0,153,94.6],[1180,197,295,197,0,153,94.6],[1475,197,295,197,0,153,94.6],[0,394,295,197,0,153,94.6],[295,394,295,197,0,153,94.6],[590,394,295,197,0,153,94.6],[885,394,295,197,0,153,94.6],[1180,394,295,197,0,153,94.6],[1475,394,295,197,0,153,94.6],[0,591,295,197,0,153,94.6],[295,591,295,197,0,153,94.6],[590,591,295,197,0,153,94.6],[885,591,295,197,0,153,94.6],[1180,591,295,197,0,153,94.6],[1475,591,295,197,0,153,94.6],[0,788,295,197,0,153,94.6],[295,788,295,197,0,153,94.6]]});
    childSheet4 = new createjs.SpriteSheet({images: ["Platforms/Person 04.png"], frames: [[0,0,267,178,0,131.5,88.75],[267,0,267,178,0,131.5,88.75],[534,0,267,178,0,131.5,88.75],[801,0,267,178,0,131.5,88.75],[1068,0,267,178,0,131.5,88.75],[1335,0,267,178,0,131.5,88.75],[1602,0,267,178,0,131.5,88.75],[0,178,267,178,0,131.5,88.75],[267,178,267,178,0,131.5,88.75],[534,178,267,178,0,131.5,88.75],[801,178,267,178,0,131.5,88.75],[1068,178,267,178,0,131.5,88.75],[1335,178,267,178,0,131.5,88.75],[1602,178,267,178,0,131.5,88.75],[0,356,267,178,0,131.5,88.75],[267,356,267,178,0,131.5,88.75],[534,356,267,178,0,131.5,88.75],[801,356,267,178,0,131.5,88.75],[1068,356,267,178,0,131.5,88.75],[1335,356,267,178,0,131.5,88.75],[1602,356,267,178,0,131.5,88.75],[0,534,267,178,0,131.5,88.75],[267,534,267,178,0,131.5,88.75],[534,534,267,178,0,131.5,88.75]]});
    childSheet5 = new createjs.SpriteSheet({images: ["Platforms/Person 05.png"], frames: [[0,0,265,177,0,132,88.6],[265,0,265,177,0,132,88.6],[530,0,265,177,0,132,88.6],[795,0,265,177,0,132,88.6],[1060,0,265,177,0,132,88.6],[1325,0,265,177,0,132,88.6],[1590,0,265,177,0,132,88.6],[0,177,265,177,0,132,88.6],[265,177,265,177,0,132,88.6],[530,177,265,177,0,132,88.6],[795,177,265,177,0,132,88.6],[1060,177,265,177,0,132,88.6],[1325,177,265,177,0,132,88.6],[1590,177,265,177,0,132,88.6],[0,354,265,177,0,132,88.6],[265,354,265,177,0,132,88.6],[530,354,265,177,0,132,88.6],[795,354,265,177,0,132,88.6],[1060,354,265,177,0,132,88.6],[1325,354,265,177,0,132,88.6],[1590,354,265,177,0,132,88.6],[0,531,265,177,0,132,88.6],[265,531,265,177,0,132,88.6]]});
    //alert("init has run");
	cArray[1] = childsheet;
    cArray[2] = childSheet2;
    cArray[3] = childSheet3;
    cArray[4] = childSheet4;
    cArray[5] = childSheet5;
    sparkleSheet = new createjs.SpriteSheet({images: ["VFX_Sparkle/Sparkle Animation.png"], frames: [[0,0,720,481,0,360,239.55],[720,0,720,481,0,360,239.55],[1440,0,720,481,0,360,239.55],[2160,0,720,481,0,360,239.55],[2880,0,720,481,0,360,239.55],[0,481,720,481,0,360,239.55],[720,481,720,481,0,360,239.55],[1440,481,720,481,0,360,239.55],[2160,481,720,481,0,360,239.55],[2880,481,720,481,0,360,239.55],[0,962,720,481,0,360,239.55],[720,962,720,481,0,360,239.55],[1440,962,720,481,0,360,239.55],[2160,962,720,481,0,360,239.55],[2880,962,720,481,0,360,239.55],[0,1443,720,481,0,360,239.55]]});
    sparkle1 = new createjs.Sprite(sparkleSheet);
    sparkle1.x = -100;
    sparkle1.y = -100;
    mstage.addChild(sparkle1);
	sparkle1.scaleX = .5;
    sparkle1.scaleY = .5;
    sparkle2 = new createjs.Sprite(sparkleSheet);
    sparkle2.x = -200;
    sparkle2.y = -200;
    mstage.addChild(sparkle2);
    sparkle2.scaleX = .5;
    sparkle2.scaleY = .5;
	
	//Create all the platforms
	p1 = new platform(platformAni01, 1);
	p2 = new platform(platformAni02, 2);
	p3 = new platform(platformAni03, 3);
	p4 = new platform(platformAni04, 4);
	p5 = new platform(platformAni05, 5);
	
	bp1 = new brokenPlatform(bplatformAni01);
	bp2 = new brokenPlatform(bplatformAni02);
	
	closestPlatform = p5;
	
	//Create the person
	person1 = new person(person1s, 2);
	
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addEventListener("tick", mTick);

	//circle = new createjs.Shape();
	//mstage.addChild(circle);
    platformArray[0] = p1;
    platformArray[1] = p2;
    platformArray[2] = p3;
    platformArray[3] = p4;
    platformArray[4] = p5;
  //  goSpring = false;
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
    if(flyingPlayer.y >= 620)
    {
        if(gameOver == false)
        {
            velocity = -20;
          //  var target = p1;
          //  if(distSq(flyingPlayer.y,p2.y) < distSq(flyingPlayer.y,p1.y))
          //  {
          //      target = p2;
          //  }
        /*    if(!goSpring)
            {
                targetDist = distSq(flyingPlayer,p1.ani);
                var target = p1;
                for(var i = 1; i < 5; i++)
                {
                    var dist = distSq(flyingPlayer,platformArray[i].ani);
                    if(dist < targetDist && platformArray[i].ani.y < flyingPlayer.y)
                    {
                        target = platformArray[i];
                        targetDist = dist;
                    }
                }

                if(target.ani.y < flyingPlayer.y)
                {
                    flyingPlayer.x += (flyingPlayer.x - target.ani.x);
                    upSpeed = jumpStrength;
                    velocity = -upSpeed;
                    lockControls = true;
                }
                else
                {
            //        upSpeed = jumpStrength;
              //      velocity = -upSpeed;
                //    lockControls = false;
                }
                goSpring = true;
            }



            if(goSpring)
            {
                if(flyingPlayer.x - 52 < target.ani.x - 6 && flyingPlayer.x - 52 > target.ani.x -90)
                {
                    if(flyingPlayer.y - 125 < target.ani.y - 171)
                    {
                        upSpeed = jumpStrength;
                        velocity = -upSpeed;
                        lockControls = false;
                        target.smash(true);
                    }
                }
            }
                                         */
            //upSpeed = 209;
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
    //James Safeguard
 /*   if(goSpring && ((flyingPlayer.y <= 120)))
    {
        goSpring = false;
        lockControls = false;
    }*/

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