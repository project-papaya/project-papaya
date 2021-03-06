import * as express from 'express';
import { Message } from '@project-papaya/api-interfaces';
import { createServer } from 'http';
import { Server } from 'socket.io';
import apiRouter from './graphql';

const app = express();
const server = createServer(app);
const io = new Server(server);

const greeting: Message = { message: 'Welcome to api!' };

app.use(express.static('./dist/apps/client', {
    index: false
}))

app.use('/graphql', apiRouter)

app.get('/api', (req, res) => {
    res.send(greeting);
});

app.get(/(.*)/, (req, res) => {
    res.sendFile('index.html', {
        root: './dist/apps/client'
    })
})

const port = process.env.port || 3333;

app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/api');
});

server.on('error', console.error);