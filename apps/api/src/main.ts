import * as express from 'express';
import { Message } from '@project-papaya/api-interfaces';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = new Server(server);

const greeting: Message = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3333;

app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
