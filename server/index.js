require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require("path");

const app = express();
const connection = require('./db');
const routes = require("./router");

app.use(cors());
app.use(express.json());
app.use(routes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is running on localhost PORT: ${port}`));


