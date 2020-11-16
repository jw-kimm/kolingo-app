const express = require("express");
const logger = require('morgan');
const mongoose = require('mongoose');
const path = require('path');
const dotenv = require('dotenv').config();

const db = process.env.MONGO_URI

mongoose.Promise = global.Promise;
mongoose.connect(db, {
  useNewUrlParser: true,
  useCreateIndex: true
});

mongoose.connection.once('open', () => {
  console.log('connected to database');
})

const app = express();

//Middlewares
app.use(logger("dev"));
app.use(express.json());

//Routes
app.use('/api/users', require('./server/routes/users'));
app.use('/api/register', require('./server/routes/users'))
app.use('/api/auth', require('./server/routes/auth'))
app.use('/api/lessons', require('./server/routes/lessons'))
app.use('/api/matching', require('./server/routes/matching'))
app.use('/api/discuss', require('./server/routes/discuss'))
app.use('/api/advanced', require('./server/routes/advanced'))


//error handler function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status || 500;

  //Respond to client
  res.status(status).json({
    error: {
      message: error.message
    }
  });
  console.log(err)
})

//serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', "build", "index.html"))
  })
}

//start the server
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server is listening on port ${port}`))

