const express = require("express"),
mongoose = require("mongoose"),
sitemapRouter = require("./routers/sitemapRouter"),
app = express();

app.use("/sitemap.xml", sitemapRouter);

const port = 3000,
  db = 'mongodb://localhost/project';

mongoose
  .connect(db)
  .then( conn => {
    console.log(`${db} connected`);
  });

app.listen(port, () => console.log(`Server listening on ${port}`));