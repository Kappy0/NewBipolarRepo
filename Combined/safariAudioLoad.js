/**
 * Created with JetBrains WebStorm.
 * User: Kappy
 * Date: 3/3/14
 * Time: 12:19 AM
 * To change this template use File | Settings | File Templates.
 */
var filesLoaded;

function loadAudio(uri)
{
    var audio = new Audio();
    audio.addEventListener('canplaythrough', audioComplete, false);
    audio.src = uri;
    return audio;
}

function audioComplete()
{
    console.log("File loaded");
    filesLoaded += 1;

    bar.scaleX = (filesLoaded / 10) * loaderWidth;

    if(filesLoaded >= 10)
    {
        console.log("Loading Complete! Click to Continue.");
        var text = new createjs.Text("Loading complete! Click to Continue.", "20px Arial", "#FFFFFF");
        text.x = 200;
        text.y = 200;
        preloadStage.addChild(text);
        loaded = true;
    }
}