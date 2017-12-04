var https = require("https");

function getHTML (options, callback) {

  /* Add your code here */
  var fullChunkData = "";
  /* Add your code here */
  https.get(options, function (response) {

  // set encoding of received data to UTF-8
    response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
    response.on('data', function (data) {

      fullChunkData += data;
      console.log('Chunk Received. Length:', data.length);
    });
  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
    response.on('end', function() {
      callback(fullChunkData);
      console.log('Response stream complete.');
    });

  });
}

module.exports = getHTML;
