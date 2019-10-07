import express from 'express';
import commands, { makeServer } from 'calendar-behavior/mod.babel.mjs';
const app = express()
const port = 3002

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))