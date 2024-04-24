const express = require("express");
const app = express();
const path = require("path");
const port = 3000;

const memberRoutes = require('./routes/member') // including external routes

app.use(express.static(path.join(__dirname, "public"))); // so that express could serve static files like html or css from public folder

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

app.use('/member', memberRoutes); // using external routes for requests which start from /member

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "static", "index.html"));
}); // main page

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "public", "template"));
