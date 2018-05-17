import express from 'express';
import config from './config';
import apiRouter from './api/index';

const server = express();
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  res.render('index', {
    content: 'string <b> test </b>'
  });
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, () => {
  console.info('Express listening on Port', config.port);
});