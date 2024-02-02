document.addEventListener("DOMContentLoaded", function(event) {
  const loadingScreen = document.createElement('div');
  loadingScreen.style.position = 'fixed';
  loadingScreen.style.top = '0';
  loadingScreen.style.left = '0';
  loadingScreen.style.width = '100%';
  loadingScreen.style.height = '100%';
  loadingScreen.style.background = '#81C784';
  loadingScreen.style.zIndex = '9999';
loadingScreen.innerHTML = '<img src="Images/Bean Eater-1s-200px.gif" style="display: block; margin: 0 auto; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">';
  document.body.appendChild(loadingScreen);
  setTimeout(function(){
      loadingScreen.style.display = 'none';
  }, 2200);
});
