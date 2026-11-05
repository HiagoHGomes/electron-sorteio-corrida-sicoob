const { app, BrowserWindow } = require('electron');
const path = require('path');

// Recarrega sozinho ao salvar, só em desenvolvimento
if (!app.isPackaged) {
  require('electron-reload')(__dirname);
}

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 820,
    title: 'Sorteio Corrida Sicoob',
    icon: path.join(__dirname, 'assets', 'images', 'icon.ico'),
    autoHideMenuBar: true,
    webPreferences: {
      contextIsolation: true
    }
  });
  win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});