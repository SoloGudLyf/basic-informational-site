const express = require("express");
const path = require("path");
const app = express();

const PORT = 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});

app.get("/", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
});

app.get("/index.html", (req, res) => {
  const filePath = path.join(__dirname, "index.html");
  res.sendFile(filePath);
});

app.get("/style.css", (req, res) => {
  const filePath = path.join(__dirname, "style.css");
  res.sendFile(filePath);
});

app.get("/about.html", (req, res) => {
  const filePath = path.join(__dirname, "about.html");
  res.sendFile(filePath);
});

app.get("/contact-me.html", (req, res) => {
  const filePath = path.join(__dirname, "contact-me.html");
  res.sendFile(filePath);
});

app.use((req, res) => {
  res.status(404);
  const filePath = path.join(__dirname, "404.html");
  res.sendFile(filePath);
});
