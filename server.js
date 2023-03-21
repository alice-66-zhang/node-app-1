
const express = require('express');
const app = express();
const port = 8080;

app.post("/action", (req, res, next) => {
  console.log("POST " + req.body)
  res.sendStatus(200);
});

app.get('/webhook', (req, res) => {
  console.log("Get " + req.params)
  res.json(["1", "e"]);
});

app.listen(port, () => {
  console.log(`Starting server on port ${port}`);
});


