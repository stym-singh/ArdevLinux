var ipcRenderer = require('electron').ipcRenderer
const nextWindow = document.getElementById('nextbutton')

nextWindow.addEventListener('click', () => {
  console.log('clicked')
  ipcRenderer.send('go-terminal', 'terminal')
})
