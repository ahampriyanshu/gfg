const app = require("./app"),
  mongoose = require("mongoose"),
  dotenv = require("dotenv");
dotenv.config({ path: ".env" });

const port = process.env.PORT || 5000,
  db = process.env.MONGODB_URI;

mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then((conn) => {
    console.log(`db connected`);
  });

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
