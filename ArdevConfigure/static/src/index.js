var ipcRenderer = require("electron").ipcRenderer;
const nextButton = document.getElementById("nextbutton");
var done = false;

nextButton.addEventListener("click", () => {
  // Save the info here
  console.log("clicked");
  ipcRenderer.send("go-terminal", "terminal");
});
var has = false;
console.log("hello")
var blinkBanner = document.getElementById("logo_blink");
console.log(blinkBanner.style.opacity);
setInterval(()=>{
  if(blinkBanner.style.opacity == 1){
    blinkBanner.style.opacity = 0;
  }
  else{
    blinkBanner.style.opacity = 1;
  }
}, 400)