var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var result = '';

app.post("/view", (req, res) => {

	result = req.body;
	console.log("Entry displayed successfully",result);
    res.send(result);
});
app.get("/view", (req, res) => {

	console.log(result);
    res.send(result);
    console.log("Success Get Response ", result);
});

// Server listening to PORT 3000
app.listen(3000);
