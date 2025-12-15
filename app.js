const http = require("http");

const version = process.env.VERSION || "v1";

http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Hello from ${version}\n`);
}).listen(3000, () => {
  console.log(`Running ${version}`);
});
