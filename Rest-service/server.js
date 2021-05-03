const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

const app = express(); // creating express app

app.use(bodyParser.json()); // to accept json type requests

app.use('/',(req,res) => { // setting router
    res.json("Hi people");
});

app.listen(port, () => { // setting the app to listen on the configured port
    console.log(`Listening on port: ${port}`);
});
