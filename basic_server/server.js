const http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<header><title>Demo App</title></header>");
    res.write("<body><h1>Hello world</h1></body>");
    res.write("</html>");

    res.end();
});

server.listen(3000);
