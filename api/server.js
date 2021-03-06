// server.js

const express = require("express");
const app = express();
const PORT = 4000;
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./DB.js");

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {
        console.log("Tietokantaan yhdistetty");
    },
    (err) => {
        console.log("Ei yhteyttä tietokantaan" + err);
    },
);

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function () {
    console.log("Serveri portissa:", PORT);
});
