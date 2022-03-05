const http = require("http");
const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);
    res.end("hello");
});
server.listen(3060, () =>{
    console.log("server Start");
});