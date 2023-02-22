const express = require("express");
const app = express();
require("./databases/connection");
const route = require("./routes/routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(route);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
