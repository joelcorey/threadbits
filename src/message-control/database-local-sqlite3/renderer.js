export default async function sendAsyncDatabase(channel, data = null) {

  if (channel === 'svgCreate') {
    return new Promise((resolve) => {
      window.api.receive('sqlite-reply-svg-create', (data) => {
        resolve(data);
      });
      window.api.send('sqlite-send-svg-create', data);
    });
  }

  /* select all svg rows */
  if (channel === 'svgAll') {
    return new Promise((resolve) => {
      window.api.receive('sqlite-reply-svg-all', (data) => {
        //console.log(data)
        resolve(data);
      });
      window.api.send('sqlite-send-svg-all', data);
    });
  }

  /* insert into svg table one new record */
  if (channel === 'svgInsert') {
    return new Promise((resolve) => {
      window.api.receive('sqlite-reply-svg-insert', (data) => {
        //console.log(data)
        resolve(data);
      });
      window.api.send('sqlite-send-svg-insert', data);
    });
  }

  if (channel === 'svgUpdate') {
    return new Promise((resolve) => {
      window.api.receive('sqlite-reply-svg-update', (data) => {
        // console.log(data)
        resolve(data);
      });
      window.api.send('sqlite-send-svg-update', data);
    });
  }

  if (channel === 'svgDelete') {
    return new Promise((resolve) => {
      window.api.receive('sqlite-reply-svg-delete', (data) => {
        // console.log(data)
        resolve(data);
      });
      window.api.send('sqlite-send-svg-delete', data);
    });
  }

}
