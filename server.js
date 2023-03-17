
const express = require('express');
const app = express();
app.use(express.json())
const port = 8080;

app.post("/action", (req, res, next) => {
  console.log("posted " + req.body.first)
  res.sendStatus(200);
});

app.get('/', (req, res) => {
  res.json(["1", "e"]);
});

app.listen(port, () => {
  console.log(`Starting server on port ${port}`);
});


