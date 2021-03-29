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
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}

document.documentElement.addEventListener('fullscreenchange', (event) => {

  if(buttonIsPressed){
    unityInstance.SendMessage("FullscreenButton", "updateImageOnExternalFullscreen");
  }

  });
