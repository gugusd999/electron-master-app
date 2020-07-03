'use strict';
require('electron-reload')(__dirname);
const electron = require('electron');
const {app, BrowserWindow, Menu} = electron;

// menghilangkan tab menu
// Menu.setApplicationMenu(false);

app.on('ready', () => {
  let win = new BrowserWindow({
    width:600
    , height:400
    , minWidth: 600
    , minHeight: 400 
    , maxWidth: 600
    , webPreferences:{
      nodeIntegration:true
    }
  })
  win.loadURL(`file://${__dirname}/index.html`)
})

exports.openWindow = (filename) => {
  let win = new BrowserWindow({
    width:800
    , height:600
    , webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(`file://${__dirname}/${filename}.html`)

}
