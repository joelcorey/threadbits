const { contextBridge, ipcRenderer } = require("electron");

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  "api", {
    send: (channel, args) => {
      // whitelist channels
      let validChannels = [
        'ping',

        /* cloud database send layer */
        // ...

        /* sqlite3 database send layer */
        'sqlite-send-svg-create',
        'sqlite-send-svg-insert',
        'sqlite-send-svg-all',
        'sqlite-send-svg-update',
        'sqlite-send-svg-delete',

        /* application specific send layer */
        'application-close-send',
        'application-minimize-send',
        'application-maximize-send',
        'application-version-send',
        'application-update-check-send',
        'application-update-available-send',
        'application-update-downloaded-send'
      ];
      if (validChannels.includes(channel)) {
        ipcRenderer.send(channel, args);
      }
    },
    receive: (channel, func) => {
      let validChannels = [
        'pong',

        /* cloud database reply layer */
        // ...

        /* sqlite3 database replay layer */
        'sqlite-reply-svg-create',
        'sqlite-reply-svg-insert',
        'sqlite-reply-svg-all',
        'sqlite-reply-svg-update',
        'sqlite-reply-svg-delete',

        /* application specific receive layer */
        'application-close-reply',
        'application-minimize-reply',
        'application-maximize-reply',
        'application-version-reply',
        'application-update-check-reply',
        'application-update-available-reply',
        'application-update-downloaded-reply'

      ];
      if (validChannels.includes(channel)) {
        // Deliberately strip event as it includes `sender`
        ipcRenderer.on(channel, (event, ...args) => func(...args));
      }
    },
  }
);
