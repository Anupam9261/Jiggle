const {BrowserWindow, Menu} = require('electron').remote;
const path = require('path');
const url = require('url');
let previewSDR;
function checkSDR(){
    previewSDR = new BrowserWindow({
        width:800, 
        height:400,
        webPreferences: {
            nodeIntegration: true
        }
    });
    previewSDR.loadURL(url.format({
        pathname: path.join(__dirname, 'previewSDR.html'),
        protocol: 'file',
        slashes: true
    }));
    const mainMenu = Menu.buildFromTemplate([
        {
            label:'DevTools',
            click(){
                previewSDR.webContents.openDevTools();
            }
        }
    ]);
    previewSDR.setMenu(mainMenu);
    previewSDR.on('closed', () => {
        previewSDR = null;
    });
};