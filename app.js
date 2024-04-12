const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const routes = require('./routes/router')

app.use(express.static(path.join(__dirname, "public", "static")));

app.use(
  express.static(path.join(__dirname, "public"), {
    setHeaders: (res, path) => {
      if (path.endsWith(".css")) {
        res.set("Content-Type", "text/css");
      }
    },
  })
);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use(routes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "static", "index.html"));
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "template"));
