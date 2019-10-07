import express from 'express';
import bodyParser from 'body-parser';
import { makeServer, makeSqlRepository } from 'calendar-behavior/mod.babel.mjs';
import { postgresDatastore } from './db.mjs';
const app = express()
const port = 3002

app.use(bodyParser.json());

let repository = makeSqlRepository(postgresDatastore);
let server = makeServer(repository);

app.post('/events', async (req, res) => {
  let { name, date } = req.body;
  server.addEvent(name, date)
    .then(() => res.send('ok'))
    .catch((err) => res.send(err.message));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))