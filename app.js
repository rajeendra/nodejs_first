const express = require("express");
const routes = require("./routes/index");
const { logger } = require("./middleware/logEvents");
const { eventOne, eventTwo } = require("./middleware/testEvents");


const app = express();

// test event
app.use(eventOne)

// send a log to the logfile in <app-root>/logs, 
// if the file and folder doesn't exist then create a one
app.use(logger);

// test event
app.use(eventTwo)

app.use("/", routes);

module.exports = app;
