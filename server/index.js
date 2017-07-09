const express = require('express');
const path = require('path');
const volleyball = require('volleyball');

const app = express();
app.use(volleyball);

app.use(express.static(path.resolve(__dirname, '..', 'client')));
app.use(express.static(path.resolve(__dirname, '..', 'node_modules')));
app.use((err, req, res) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

app.get('*', (request, response) => {
  response.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Rockin' out on port 3000 homie");
});
