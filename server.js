// Setup empty JS object to act as endpoint for all routes
projectData = {};
const apiKey = '11c9e76990abe3815380a5ff63f9b004';
const port = 8000;
// Require Express to run server and routes
var express = require('express');

// Start up an instance of app
var app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

// Setup Server

const server = app.listen(port, () => { console.log(`running on localhost: ${port}`) })

app.use(express.static('website'));

app.get("/entry", (req, res) => {
    res.send(projectData);
});

app.post("/entry", (req, res) => {
    projectData = req.body;
});

app.get("/api", (req, res) => {
    res.send(apiKey);;
});