var ipcRenderer = require('electron').ipcRenderer
const nextWindow = document.getElementById('nextbutton')

nextWindow.addEventListener('click', () => {
    data = {};
    data.font_name = document.getElementById("font-name").value;
    data.theme = document.getElementById("theme").value;
    data.emulator = document.getElementById("terminal-emulator").value;
    data.font_size = Number.parseInt(document.getElementById("font-size").value);
    console.log(data);
    ipcRenderer.send('save-terminal', data);
})
