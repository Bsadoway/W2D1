var request = require("request");
var fs = require("fs");

var image = "https://sytantris.github.io/http-examples/future.jpg";

request
  .get(image)
  .on('error', function(err) {
    throw err;
  })
  .on('response', function(reponse) {
    console.log("Downloading image...");
    console.log(reponse.statusMessage);
    console.log(reponse.headers['content-type']);
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('finish', function() {
    console.log("Download complete.");
  });
