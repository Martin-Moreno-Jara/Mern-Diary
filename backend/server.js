const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT;
const dbURI = process.env.MONGO_URI;
const entryRoutes = require("./routes/entry");
const userRoutes = require("./routes/user");

//MIDDLEWARE
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//ROUTER USE
app.use("/api/entry", entryRoutes);
app.use("/api/user", userRoutes);

//DB CONNECTION
mongoose
  .connect(dbURI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Listening to port ${PORT} and connected to db ${dbURI}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
