import http from "node:http";
import fs from "node:fs";
import url from "node:url";
import path from "node:path";

const server = http.createServer((req, res) => {
  // Read requested css file
  if (req.url.match(".css$")) {
    fs.readFile("style.css", function (err, data) {
      if (err) console.error(err);
      res.write(data);
      res.end();
      return;
    });
  }

  const contentType = getContentType(req.url);

  res.writeHead(200, { "Content-Type": contentType });
  let pathName = url.parse(req.url).pathname;

  if (!path.extname(req.url)) pathName += ".html";
  // Read requested file
  fs.readFile(pathName.slice(1), function (err, data) {
    if (err) {
      console.error(err);
      fs.readFile("404.html", function (err, data) {
        if (err) {
          console.error(err);
        }
        res.write(data);
        res.end();
        return;
      });
      res.end();
      return;
    }
    res.write(data);
    res.end();
  });
});

server.listen(8080);

function getContentType(filePath) {
  const extname = path.extname(filePath);
  switch (extname) {
    case ".html":
      return "text/html";
    case ".css":
      return "text/css";
    case ".js":
      return "text/javascript";
    case ".jpg":
    case ".jpeg":
      return "image/jpeg";
    case ".png":
      return "image/png";
    case ".gif":
      return "image/gif";
    case ".ico":
      return "image/svg";
    default:
      return "text/html";
  }
}
