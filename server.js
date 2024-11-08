const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());




app.get('/', function (req, res) {
    res.send('Welcome to my hotel.... How i can help you?')
})





// Import the router files
   const personRoutes = require('./routes/personRoutes');
   const menuItemRoutes = require('./routes/menuItemRoutes');

   //Use the router
   app.use('/person', personRoutes);
   app.use('/menu', menuItemRoutes);




app.listen(PORT, ()=>{
  console.log('Server is running on port 3000');
})