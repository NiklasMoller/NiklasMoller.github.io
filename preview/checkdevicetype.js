function getDeviceType(){

  return new Promise(function(resolve, reject) {

    const ua = navigator.userAgent;

    if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      reject(Error("No desktop"));
    }if (
      /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
        reject(Error("No desktop"));
  }else{
    resolve('Desktop');
  }

  })};


function checkWebGL2(){

return new Promise(function(resolve, reject) {
  
  var mycanvas = document.createElement("canvas");
  // Get WebGLRenderingContext from canvas element.
  var gl = mycanvas.getContext("webgl2")

  if(gl){
    resolve('WEBGL 2.0 context')
  }else{
    reject(Error("WEBGL2 Failed"));
  }

})}


