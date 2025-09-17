const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.write("<html>");
        res.write("<header><title>Demo App</title></header>");
        res.write(
            '<body><form method="POST" action="/message"><input type="text" name="message"/> <button type="submit">Send</button></form></body>',
        );
        res.write("</html>");

        return res.end();
    }

    if (req.url === "/message" && req.method === "POST") {
        fs.writeFileSync("message.txt", "Success");

        res.statusCode = 302;
        res.setHeader("Location", "/");

        return res.end();
    }

    res.setHeader("Content-Type", "text/html");

    res.write("<html>");
    res.write("<header><title>Demo App</title></header>");
    res.write("<body><h1>Hello world</h1></body>");
    res.write("</html>");

    res.end();
});

server.listen(3000);
