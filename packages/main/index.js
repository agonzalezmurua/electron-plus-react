const { app, BrowserWindow } = require("electron");
const { installExtensions } = require("./extensions");
const config = require("config");
try {
  require("electron-reloader")(module, { ignore: "packages/renderer" });
} catch (_) {}

let window = null;

function createWindow() {
  window = new BrowserWindow({
    height: 800,
    width: 1200,
    transparent: false,
    webPreferences: {
      nodeIntegration: false,
      preload: __dirname + "/preload.js", // (1) <- preload script
    },
  });

  window.setMenuBarVisibility(null);
  window.loadURL(`http://localhost:${config.get("renderer.dev.port")}`); // (2) <- load react
  window.webContents.openDevTools();
  window.on("closed", () => {
    window = null; // (3) <- deference when window is closed
  });
}

app.on("ready", () => {
  installExtensions(); // (4) <- install dev tools when on dev environment
  createWindow();
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (window === null) {
    createWindow();
  }
});
