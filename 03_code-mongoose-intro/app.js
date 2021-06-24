/**
 * TOC
 * 
 * 0. require mongoose
 * 1. connect to DB
 * 2. tell mongoose what schema you want for your document
 * 3. model.create() your doucument or new() and save()
 * 4. Housekeep by reacting to connection / disconnection events
 */

const mongoose = require('mongoose');

const DB_NAME = "mongoose_intro";

// Creates a DB if it doesn't exist; else simply connects
mongoose.connect(
  `mongodb://localhost:27017/${DB_NAME}`,
  {useNewUrlParser: true, useUnifiedTopology: true}
);