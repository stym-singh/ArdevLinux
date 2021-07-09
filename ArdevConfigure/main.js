const { app, BrowserWindow } = require("electron");
const path = require("path");
const ipc = require("electron").ipcMain;
var mainWindow;
var userchoice;
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
    },
    minHeight : 800,
    minWidth : 800,
  });

  mainWindow.loadFile("static/index.html");
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

ipc.on("go-terminal", (e) => {
  userchoice = {};
  mainWindow.loadFile("static/terminal.html");
});
ipc.on("save-terminal", (e, arg) => {
  userchoice.terminal = arg;
  console.log(userchoice);
});
