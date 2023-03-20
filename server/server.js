const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

require("./databases/connection");

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './frontend/views'));
hbs.registerPartials(path.join(__dirname, './frontend/partials'))
const route = require("./routes/routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(route);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log("Server is listening on port " + PORT);
});