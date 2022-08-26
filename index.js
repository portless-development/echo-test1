const { default: axios } = require("axios");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/:params", async (req, res) => {
  const { params } = req.params;
  const response = await axios
    .get(`https://jsonplaceholder.typicode.com/${params}`)
    .catch((err) => err.response);

  return res.status(200).json(response.data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
