window.addEventListener("resize", onResize);

function onResize(){
  unityInstance.SendMessage("WindowSizeHandler", "SetWidth", window.innerWidth);
  unityInstance.SendMessage("WindowSizeHandler", "SetHeight", window.innerHeight);
  unityInstance.SendMessage("WindowSizeHandler", "OnResize");
}
