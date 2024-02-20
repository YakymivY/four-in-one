// const express = require('express');
// const app = express();
// const path = require('path');
// const port = 3000;
//
// app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'public', 'static'));
//
// app.use(express.static(path.join(__dirname, 'public')));
//
// app.get('/', (req, res) => {
//   res.render('index'); // Render the 'index.ejs' template
// });
//
// // app.get('/', (req, res) => {
// //   const teamMember = {
// //     name: 'John Doe',
// //     position: 'Software Developer',
// //     description: 'A dedicated team member passionate about coding.',
// //     photoUrl: '../images/Mr._Fresh.png',
// //   };
// //
// //   res.render('index', { teamMember });
// // });
//
//
// app.listen(port, () => {
//   console.log(`Server is running at http://localhost:${port}`);
// });

const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // You can use any port you prefer

// Set the public static folder
app.use(express.static(path.join(__dirname, 'public')));

// Define a route to serve your index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'static', 'index.html'));
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
