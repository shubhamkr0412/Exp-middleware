const exp = require("constants");
const express = require("express");
const app = express();
const users = require("./user.json");

app.use(express.json());

app.get("/", (req, res) => {
  res.send({ users });
});

app.post("/books", (req, res) => {
  const newUser = [...users, req.body];
  res.send(newUser);
});

app.patch("/:pages", (req, res) => {
  const newUser = users.map((users) => {
    if (req.params.pages === users.pages) {
      return req.body;
    }
    return users;
  });
  res.send(newUser);
});

app.delete("/:pages", (req, res) => {
  const newUser = users.filter((users) => users.pages !== req.params.pages);
  res.send(newUser);
});

app.get("/:pages", (req, res) => {
  const newUser = users.filter((users) => users.pages === req.params.pages);
  res.send(newUser);
});

app.listen(2209, function () {
  console.log("Listening to porti 2209");
});
