/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const path = require("path");

const express = require("express");

const app = express();
const PORT = 3000;

// global middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serving Index File\
// app.get('/dist', (req, res) => {
//   return res.status(200).sendFile(path.resolve(__dirname, '../dist/bundle.js'));
// });

app.use("/dist", express.static(path.resolve(__dirname, "../dist")));
app.get("/", (req, res) => {
  return res.sendFile(path.resolve(__dirname, "../index.html"));
});

app.get("/public/Logo.png", (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, "../public/Logo.png"));
});

app.get("/public/Diagram.png", (req, res) => {
  return res
    .status(200)
    .sendFile(path.resolve(__dirname, "../public/Diagram.png"));
});
// serving bundle.js files from dist folder

// if request is made to no defined endpoint
app.use("*", (req, res) => res.status(404).json("Not Found"));

// global middleware handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  console.error(err);
  res.status(err.status || 500).send(res.locals.message);
});

// starts the server
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
