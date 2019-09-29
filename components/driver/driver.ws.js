import WebSocket from 'ws';
import Driver from './driver.model';

function heartbeat() {
  this.isAlive = true;
}

export default () => {
  const wss = new WebSocket.Server({ port: 3002 });

  wss.on('connection', (ws, req) => {
    if (req.url === '/api/v1/driver/tracking') {
      ws.isAlive = true;
      ws.on('pong', heartbeat);
      ws.on('message', (id) => {
        if (!id) ws.close(1003, 'Undefined id.');
        else {
          setInterval(() => {
            Driver.findById(id, (err, driver) => {
              if (err || driver == null) ws.close(1002, toString(err));
              else if (!driver.isAvailable) ws.close(1000, 'Offline driver.')
              else {
                ws.send(JSON.stringify({ lat: driver.location.lat, lng: driver.location.lng }));
              }
            });
          }, 5000);
        }
      });
    }
  });

  setInterval(() => {
    wss.clients.forEach((ws) => {
      if (!ws.isAlive) return ws.terminate();
      ws.isAlive = false;
      ws.ping(null, false, true);
    });
  }, 30000);
}
