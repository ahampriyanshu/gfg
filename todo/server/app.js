require("dotenv").config();
const express = require("express"),
  path = require("path"),
  cors = require("cors"),
  morgan = require("morgan"),
  taskRouter = require("./routers/taskRouter"),
  errorController = require("./controllers/errorController"),
  app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));
app.use("/task/", taskRouter);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./public")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
}
app.use(errorController);
module.exports = app;
