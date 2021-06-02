const express = require("express");
const { dbConnection } = require("./database/config");
require("dotenv").config();
const cors = require("cors");
//! Create the express server
const app = express();

// ! Data base path
dbConnection();

//!CORS
app.use(cors());

//! public directory
app.use(express.static("public"));

//! Reading and parce of body
app.use(express.json());

//! Routes START
// * auth // create, login, renew
app.use("/api/auth", require("./routes/auth"));

// * events
app.use("/api/events", require("./routes/events"));
// ! Routes END

//! Listening request
app.listen(process.env.PORT, () => {
  console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});
