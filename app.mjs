import express from 'express';
import bodyParser from 'body-parser';
import { makeServer, makeSqlRepository } from 'calendar-behavior/mod.babel.mjs';
import { postgresRepository } from './db.mjs';
import path from 'path';

const app = express()
const port = 3002

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'build')));

let server = makeServer(postgresRepository);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.post('/events', async (req, res) => {
  let { name, date } = req.body;
  server.addEvent(name, date)
    .then(() => res.send('ok'))
    .catch((err) => res.send(err.message));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))