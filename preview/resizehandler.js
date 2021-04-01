window.addEventListener("resize", onResize);

function onResize(){

if(window.gameIsReady){

  unityInstance.SendMessage("WindowResizeHandler", "SetWidth", window.innerWidth);
  unityInstance.SendMessage("WindowResizeHandler", "SetHeight", window.innerHeight);
  unityInstance.SendMessage("WindowResizeHandler", "OnResize");

}

}
