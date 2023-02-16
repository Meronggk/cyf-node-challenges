
const express = require('express');
const app = express();
const port = 5000;
const chats = require("./chat.json");


app.get('/chat', (request, response) => {
  response.send(chats)
});


app.get('/chat/:id', (req, res) => {
  res.send(chats[2]);
});

const listener = app.listen(port, function () {
    console.log("Your app is listening on port " + listener.address().port);
  });

 