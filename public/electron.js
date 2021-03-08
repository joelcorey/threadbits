const path = require("path");
const url = require('url');

require('dotenv').config()

const { app, BrowserWindow, shell } = require("electron");
// const { autoUpdater } = require('electron-updater');
require('../src/message-control/application');
require('../src/message-control/database-local-sqlite3');

const isDev = require("electron-is-dev");
// Conditionally include the dev tools installer to load React Dev Tools
let installExtension, REACT_DEVELOPER_TOOLS;

// if (isDev) {
//   const devTools = require("electron-devtools-installer");
//   installExtension = devTools.default;
//   REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS;
// }

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    icon: __dirname + '/asset/icon/android-chrome-512x512.png',
    frame: false,
    webPreferences: {
      preload: `${__dirname}/preload.js`,
      webSecurity: true,
      contextIsolation: true,
      nodeIntegration: false,
      nativeWindowOpen: true,
      enableRemoteModule: false,
      sandbox: true,
    }
  });

  // and load the index.html of the app.
  // mainWindow.loadFile("index.html");
  mainWindow.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${__dirname}/../build/index.html`
  );

  // Open the DevTools.
  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  mainWindow.webContents.on('new-window', function(e, url) {
    // make sure local urls stay in electron perimeter
    if('file://' === url.substr(0, 'file://'.length)) {
      return;
    }
    // and open every other protocols on the browser      
    e.preventDefault();
    shell.openExternal(url);
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(async () => {
  await createWindow();

  if (isDev) {
    await installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(error => console.log(`An error occurred: , ${error}`));
  }
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0 && process.platform === "darwin") {
    createWindow();
  }
});