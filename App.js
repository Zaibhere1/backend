require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;


app.use(express.json());


app.get("/", (req, res) => {
  res.json("Hello from Express.js!");
});


app.listen(process.env.PORT, () => {
  console.log(`Server listening on port  http://localhost:${port}/`);
});
