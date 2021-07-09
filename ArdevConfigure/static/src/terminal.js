var ipcRenderer = require("electron").ipcRenderer;

var choice = document.getElementById("tec");
var alac = document.getElementById("aconfig");
var nextButton = document.getElementById("nextbutton");
var krit = document.getElementById("kconfig");

alac.style.display = "none";
krit.style.display = "none";
nextButton.style.display = "none";
choice.addEventListener("change", () => {
  if (choice.value == "none") {
    alac.style.display = "none";
    krit.style.display = "none";
    nextButton.style.display = "none";
  } else {
    nextButton.style.display = "block";
    if (choice.value == "alacritty") {
      krit.style.display = "none";
      alac.style.display = "block";
    } else {
      alac.style.display = "none";
      krit.style.display = "block";
    }
  }
});

nextButton.addEventListener("click", () => {
  if (choice.value != "none") {
    var ret = {};
    if (choice.value == "alacritty") {
      ret.terminal_name = "alacritty";
    } else {
      ret.terminal_name = "kritty";
    }

    ipcRenderer.send("save-terminal", ret);
  }
});
