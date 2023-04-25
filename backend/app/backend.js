const express = require('express');
const router = express.Router();
const app = express();
const bodyParser = require('body-parser');
const cors = require('permissive-cors');
const process = require('process');
const GracefulShutdownManager = require('@moebius/http-graceful-shutdown').GracefulShutdownManager;

const postgres = require('./postgres.js');

console.log('Start migrations');
setTimeout(function () {
  postgres.postgresMigration();
}, 3000);

app.use(cors());
app.use(bodyParser.json());

app.use('/books/', router);
router.get('/', postgres.getBooks);
router.get('/:id', postgres.getBookById);
router.post('/', postgres.postBook);
router.put('/:id', postgres.updateBook);
router.delete('/:id', postgres.deleteBook);

const server = app.listen(3000, function () {
  console.log('Backend running!');
});

const shutdownManager = new GracefulShutdownManager(server);
process.on('SIGINT', function onSigint() {
  app.shutdown();
});

process.on('SIGTERM', function onSigterm() {
  app.shutdown();
});

app.shutdown = function () {
  shutdownManager.terminate(() => {
    console.log('Server is gracefully terminated.');
  });
};
