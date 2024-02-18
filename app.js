const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Static files
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());


// Routes
// const indexRoute = require('./routes/index');
// const aboutRoute = require('./routes/about');
// const dynamicPageRoute = require('./routes/dynamicPage');

// app.use('/', indexRoute);
// app.use('/about', aboutRoute);
// app.use('/dynamic', dynamicPageRoute);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
