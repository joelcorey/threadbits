const { app, BrowserWindow, ipcMain } = require('electron');
const { autoUpdater } = require('electron-updater');

ipcMain.on('application-close-send', (event, args) => {
  BrowserWindow.getAllWindows().forEach(window => {
    window.close()
  })
  //event.reply('application-minimize-reply', 'Close all the windows event!');
});

ipcMain.on('application-minimize-send', (event, args) => {

  event.reply('application-minimize-reply', '');

});

ipcMain.on('application-maximize-send', (event, args) => {

  event.reply('application-maximize-reply', '');

});

ipcMain.on('application-version-send', (event, args) => {

  event.reply('application-version-reply', app.getVersion());

});

ipcMain.on('application-update-check-send', (event, args) => {

  autoUpdater.checkForUpdatesAndNotify()

  autoUpdater.on('error', (err) => {
    event.reply('application-update-check-reply', { message: 'error', data: err} );
  });
  autoUpdater.on('checking-for-update', (info) => {
    event.reply('application-update-check-reply', { message: 'checking-for-update', data: info} );
  });
  autoUpdater.on('update-available', (info) => {
    event.reply('application-update-check-reply', { message: 'update-available', data: info} );
  });
  autoUpdater.on('update-not-available', (info) => {
    event.reply('application-update-check-reply', { message: 'update-not-available', data: info} );
  });
  autoUpdater.on('update-downloaded', (info) => {
    event.reply('application-update-check-reply', { message: 'update-downloaded', data: info} );
  });

});

ipcMain.on('application-update-available-send', (event, args) => {

  autoUpdater.quitAndInstall();

  event.reply('application-update-available-reply', 'update-quit-and-install');

});

ipcMain.on('application-update-downloaded-send', (event, args) => {

  event.reply('application-update-downloaded-reply', statement);

});
