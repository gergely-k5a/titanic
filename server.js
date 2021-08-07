const express = require("express");

const api = require("./routes/api");

const port = process.env.PORT || 5000;

const app = express();

app.use("/api", api);

app.listen(port, () => {
  console.log(`Titanic API listening at port ${port}`);
});
