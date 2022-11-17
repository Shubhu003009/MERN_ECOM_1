import express from 'express';
const app = express();

import data from './data.js';

app.get('/api/products', (req, res) => {
  res.send(data.products);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server  at  http://localhost:${port}`);
});
