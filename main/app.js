var express = require('express');
var bodyParser = require('body-parser');
const spawn = require("child_process").spawn;
var result = '';
const { PythonShell } = require('python-shell');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


let options = {
mode: 'text',
};

app.post("/view", (req, res) => {

result = req.body;
pyResponse = '';
PythonShell.run('form.py', options, function(err, results) {
if (err) console.log(err);
pyResponse = results;
res.send(pyResponse);
});
});
app.get("/getData", (req, res) => {

console.log(result);
res.send(result);
console.log("Success Get Response ", result);
});

// Server listening to PORT 3000
app.listen(3000);