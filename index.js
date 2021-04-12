const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();

//! Create the express server
const app = express();

// ! Data base path
dbConnection();

//! public directory
app.use(express.static("public"));

// Reading and parce of body
app.use(express.json());

// Routes
// TODO: auth // create, login, renewal
app.use("/api/auth", require("./routes/auth"));
// TODO CRUD: events

//! Listening request
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
