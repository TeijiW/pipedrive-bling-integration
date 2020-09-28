const express = require("express");
const middlewares = require("./config/middlewares");
const routes = require("./routes");
require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env",
});

const app = express();

middlewares(app);
routes(app);

app.use(express.json());

console.log(`Server running on ${process.env.PORT} port`);
app.listen(process.env.PORT || 8080);
