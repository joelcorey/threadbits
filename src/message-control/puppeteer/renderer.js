export default async function channelsForPuppeteer(channel, data = null) {

  if (channel === 'ping') {
    return new Promise((resolve) => {
      window.api.receive('pong', (data) => {
        let response = data;
        resolve(response);
      });
      window.api.send('ping');
    });
  }


}

export default channelsForPuppeteer;
