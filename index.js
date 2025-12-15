import http from "node:http";
import fs from "node:fs";
import url from "node:url";

// Create a local server to receive data from
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const pathName = url.parse(req.url).pathname;

  switch (pathName) {
    case "/about.html":
      let aboutPage;
      try {
        aboutPage = fs.readFileSync("about.html", "utf8");
      } catch (error) {
        console.error(error);
      }
      res.write(aboutPage);
      break;
    case "/contact-me.html":
      let contactPage;
      try {
        contactPage = fs.readFileSync("contact-me.html", "utf8");
      } catch (error) {
        console.error(error);
      }
      res.write(contactPage);
      break;
    case "/index.html":
      let homePage;
      try {
        homePage = fs.readFileSync("index.html", "utf8");
      } catch (error) {
        console.error(error);
      }
      res.write(homePage);
      break;
    default:
      let errorPage;
      try {
        errorPage = fs.readFileSync("404.html", "utf8");
      } catch (error) {
        console.error(error);
      }
      res.write(errorPage);
  }

  res.end();
});

server.listen(8080);
