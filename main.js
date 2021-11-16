var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Write "Hello World!" to the page
   response.write("Hello World!\n")
   
   // Send the response body as "This is a test."
   response.end('This is a test.\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');