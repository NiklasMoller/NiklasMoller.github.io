//Default when game starts running
var fullscreen = true;

var elem = document.documentElement;

function toggleFullscreen(){

if(fullscreen){
  unityInstance.SetFullscreen(0);
  fullscreen = false;
}else{
  unityInstance.SetFullscreen(1);
    fullscreen = true;
}

}

function openFullscreen() {

//This tells if fullscreen is supported
if(document.fullscreenEnabled){

/*
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if(elem.mozRequestFullScreen){
*/

//https://developers.google.com/web/fundamentals/native-hardware/fullscreen

  var doc = window.document;
  var docEl = doc.documentElement;

  var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
  var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

  if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
    requestFullScreen.call(docEl);
  }
  else {
    cancelFullScreen.call(doc);
  }


  }


}



let openFullscreenPromise = new Promise(function(resolve){

  //This tells if fullscreen is supported
  if(document.fullscreenEnabled){
  
      //https://developers.google.com/web/fundamentals/native-hardware/fullscreen
      
        var doc = window.document;
        var docEl = doc.documentElement;
      
        var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
        var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;
      
        if(!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
          requestFullScreen.call(docEl);
          resolve('Fullscreen opened');   
        }
        else {
          cancelFullScreen.call(doc);
        }
      
      
        }else{
          resolve('Fullscreen not opened');   
        }

  })



document.documentElement.addEventListener('fullscreenchange', (event) => {

  if(buttonIsPressed){
    unityInstance.SendMessage("FullscreenButton", "updateImageOnExternalFullscreen");
  }

  });
