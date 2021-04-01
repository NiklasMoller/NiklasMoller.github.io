window.addEventListener("resize", onResize);

function onResize(){

  $(document).ready(function(){
    
    unityInstance.SendMessage("WindowSizeHandler", "SetWidth", window.innerWidth);
    unityInstance.SendMessage("WindowSizeHandler", "SetHeight", window.innerHeight);
    unityInstance.SendMessage("WindowSizeHandler", "OnResize");
  
  });


}
