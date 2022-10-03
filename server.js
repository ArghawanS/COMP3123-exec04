

const express =  require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/hello', (req, res) => {
    res.send('Hello Express JS!');
})


app.get('/user', function(req, res) {
    res.send({ "firstname":"Arghawan", "lastname": "Siddiq" });
})

app.post('/user', (req, res) => {
    console.log('Got body:', req.body);
    res.send(req.body);
    res.sendStatus(200);
});

app.listen(3000, function() {
    console.log('server started at port 3000');
})


/*
let express = require('express');
let app = express();
let port = 3000;

// route for http://localhost:3000/hello URL
app.get('/hello', (req, res) => {
  // send Hello Express JS string
  res.send('Hello Express JS');
});

// route for http://localhost:3000/user URL
app.get('/user', (req, res) => {
  // send the json object as response
  res.json({ "firstname":"Pritesh", "lastname": "Patel" });
});

// Server listening on port 3000 of computer
app.listen(port, () => {
  console.log(`Node app running now at localhost:${port}`);
});

*/
