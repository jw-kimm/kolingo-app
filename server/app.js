const express = require("express");
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require("body-parser")

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/kolingo-app', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
    console.log('connected to database');
})

const app = express();


//Middlewares
app.use(logger("dev"));
app.use(bodyParser.json());


//Routes
app.use('/users', require('./routes/users'));
app.use('/lessons', require('./routes/lessons'));
app.use('/auth', require('./routes/auth'))



//Catch 404 errors forward them to error handler
app.use((req,res,next) => {
    const err = new Error('Not Found')
    err.status = 404;
    next(err)
})


//error handler function
app.use((err,req,res,next) => {
    const error = app.get("env") === "development" ? err : {} ;
    const status = err.status || 500;

    //Respond to client
    res.status(status).json({
        error: {
            message:error.message
        }
    });
    console.err(err);
})


//start the server
const port = process.env.PORT || 8080;
app.listen(port,() => console.log(`Server is listening on port ${port}`))

