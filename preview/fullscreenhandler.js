function toggleFullscreen(){
  if (document.fullscreenElement) {
    // exitFullscreen is only available on the Document object.
    document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen();
  }
}

document.documentElement.addEventListener('fullscreenchange', (event) => {
      unityInstance.SendMessage("FullscreenButton", "updateImageOnExternalFullscreen");
  });
