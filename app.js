const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'template'));

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.render('index'); // Render the 'index.ejs' template
// });

app.get('/', (req, res) => {
  const teamMember = {
    name: 'John Doe',
    position: 'Software Developer',
    description: 'A dedicated team member passionate about coding.',
    photoUrl: '../images/Mr._Fresh.png',
  };

  res.render('index', { teamMember });
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
