const http = require("http");

// server is a EventEmitter
// const server = http.createServer();

// server.on("connection", (socket) => {
//   console.log("New Connection");
// });

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.write("Root Path");
  } else {
    const o = {
      url: req.url,
      time: new Date(),
      success: true
    }
    res.write(JSON.stringify(o));
  }
  res.end();
});

server.listen(3000);

console.log("Listening on port 3000...");
