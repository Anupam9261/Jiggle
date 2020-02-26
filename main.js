const {app, BrowserWindow, Menu} = require('electron');
const path = require('path');
const url = require('url');
let win;
function createWindow(){
    win = new BrowserWindow({
        width:800, 
        height:400,
        webPreferences: {
            nodeIntegration: true
        }
    });
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
    createMenu();
    win.on('closed', () => {
        win = null;
    });
}

function createMenu(){
    const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
    Menu.setApplicationMenu(mainMenu);
}

const mainMenuTemplate = [
    {
        label:'File',
        submenu:[
            {
                label: 'New Tab',
                click(){
                    createNewTab();
                }
            },
            {
                label: 'Quit',
                click(){
                    win = null;
                    app.quit();
                }
            }
        ]
    },
    {
        label:'Reload',
        role: 'reload'
    },
    {
        label:'DevTools',
        click(){
            win.webContents.openDevTools();
        }
    }
];

function createNewTab(){
    newTab = new BrowserWindow({
        height: 400,
        width: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });
    newTab.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
    }));
}

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin'){
        app.quit();
    }
});