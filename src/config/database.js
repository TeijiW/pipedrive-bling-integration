const mongoose = require("mongoose");
require("dotenv").config({
    path: process.env.NODE_ENV === "test" ? ".env.testing" : ".env",
});

const url = process.env.MONGO_URL;

mongoose
    .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
    .catch((error) => console.error(error));
mongoose.Promise = global.Promise;

module.exports = mongoose;
