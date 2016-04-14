var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static("./"));

app.listen(8080, function(){
  console.log("Listening on port " + port);
});
