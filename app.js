const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs'); // Set the view engine to EJS
app.set('views', path.join(__dirname, 'public', 'template')); // Set the views directory

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files from the 'public' directory

app.get('/', (req, res) => {
  res.render('index'); // Render the 'index.ejs' template
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
