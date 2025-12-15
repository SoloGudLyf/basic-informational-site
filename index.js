import http from "node:http";
import fs from "node:fs";


// Read data from index.html
let homePage
try {
 homePage = fs.readFileSync("index.html", "utf8");
} catch (error) {
  console.error(error);
}

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.write(homePage);
  res.end();
});

server.listen(8080);
