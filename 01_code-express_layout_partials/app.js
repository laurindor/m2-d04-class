/**
 * TOC Express dynamic views
 * 
 * 1. require hbs
 * 2. Set the View Engine
 * 3. app.all() with the res.render() method
 * 4. require the data
 * 5. Pass data to the res.render() method
 */

const express = require('express');
const path = require('path');

const app = express();
 
app.all('/', (req, res)=> {
  res.sendFile(path.join(__dirname, "./index.html"));
})

app.listen(3000)