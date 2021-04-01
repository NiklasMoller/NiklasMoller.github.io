window.addEventListener("resize", onResize);

function onResize(){

  $(document).ready(function(){
    
    unityInstance.SendMessage("WindowResizeHandler", "SetWidth", window.innerWidth);
    unityInstance.SendMessage("WindowResizeHandler", "SetHeight", window.innerHeight);
    unityInstance.SendMessage("WindowResizeHandler", "OnResize");
  
  });


}
