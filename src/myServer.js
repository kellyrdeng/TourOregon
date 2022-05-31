const http = require('http');
const fs = require("fs");

var myPage = `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a New Server</h1>
<p>This is a paragraph.</p>

<p id="demo"></p>

<p><a href="http://google.com">Google</a></p>


<script>
    let x, y, z;  // Statement 1
    x = 5;        // Statement 2
    y = 6;        // Statement 3
    z = x + y;    // Statement 4
    
    document.getElementById("demo").innerHTML =
    "The value of z is " + z + ".";  
</script>

</body>
</html>
`;
var port = 80;
console.log("listening on port" + port);
http.createServer(function (req, res) {
  if (req.url == '/books') {
    showBookPage(res);
  }
  else {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(myPage);
  }
  //console.log(req);
}).listen(port);            

function showBookPage(res) {
    const path = "/Users/kdeng/dev/html/books.html";
    const data = fs.readFileSync(path, 'utf8');
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(data);
}

