const http=require("http")

const test = () => console.log("başardım")


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Merhaba Tamerim Benim');
    res.write(test());
    res.end();
  }).listen(8080);



