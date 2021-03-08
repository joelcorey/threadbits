function channelsForApplicationEvents(channel, data = null) {

  /*  */
  if (channel === 'appClose') {
    return new Promise((resolve) => {
      window.api.receive('application-close-reply', (data) => {
        resolve(data);
      });

      window.api.send('application-close-send');
    });
  }

  /*  */
  if (channel === 'appMinimize') {
    return new Promise((resolve) => {
      window.api.receive('application-minimize-reply', (data) => {
        resolve(data);
      });

      window.api.send('application-minimize-send', data);
    });
  }

  /*  */
  if (channel === 'appMaximize') {
    return new Promise((resolve) => {
      window.api.receive('application-maximize-reply', (data) => {
        resolve(data);
      });

      window.api.send('application-maximize-send', data);
    });
  }

  /*  */
  if (channel === 'appVersion') {
    return new Promise((resolve) => {
      window.api.receive('application-version-reply', (data) => {
        resolve(data);
      });

      window.api.send('application-version-send', data);
    });
  }

  /*  */
  if (channel === 'appUpdateCheck') {
    return new Promise((resolve) => {
      window.api.receive('application-update-check-reply', (data) => {
        console.log(data)
        resolve(data);
      });

      window.api.send('application-update-check-send', data);
    });
  }

  /*  */
  if (channel === 'appUpdateAvailable') {
    return new Promise((resolve) => {
      window.api.receive('application-update-available-reply', (data) => {
        console.log(data)
        resolve(data);
      });

      window.api.send('application-update-available-send', data);
    });
  }

  /*  */
  if (channel === 'appUpdateDownloaded') {
    return new Promise((resolve) => {
      window.api.receive('application-update-downloaded-reply', (data) => {
        console.log(data)
        resolve(data);
      });

      window.api.send('application-update-available-send', data);
    });
  }

}

export default channelsForApplicationEvents;
