const express = require("express");
const connectDB = require("./config/database");

const app = express();

//Connect to Database
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
