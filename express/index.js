const express = require("express");
const Joi = require("joi");

const app = express();

// enable parsing json to body object of request
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// middleware function is like Aspect
app.use(function (req, res, next) {
  console.log("Logging...");
  next();
  console.log("Exit Logging...");
});

app.use(function (req, res, next) {
  console.log("Authenticating...");
  next();
  console.log("Exit Authenticating...");
});

let users = [
  { id: 1, name: "Mick" },
  { id: 2, name: "John" },
  { id: 3, name: "Lily" },
];

app.get("/", (req, res) => {
  res.send("Hello Express");
});

// http://localhost:3000/api/user/99
app.get("/api/user/:id", (req, res) => {
  const userId = req.params.id;
  console.log(`userId is ${userId}`);

  const user = users.find((item) => item.id === parseInt(userId));

  if (!user) {
    res.status(404).send("User Not Found!");
  }

  res.send(user);
});

app.post("/api/user", (req, res) => {
  const schema = {
    name: Joi.string().min(3).required(),
  };
  const result = Joi.validate(req.body, schema);
  console.log(result);

  if (result.error) {
    // 400 bad request
    res.status(400).send(result.error.details[0].message);
    return;
  }

  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);

  console.log(`Users is ${JSON.stringify(users)}`);

  res.send(newUser);
});

app.put("/api/user/:id", (req, res) => {
  const userId = req.params.id;

  const user = users.find((item) => item.id === parseInt(userId));

  if (!user) {
    res.status(404).send("User Not Found!");
    // here return is required.
    return;
  }

  user.name = req.body.name;

  console.log(users);

  res.send(user);
});

app.delete("/api/user/:id", (req, res) => {
  const userId = req.params.id;

  const user = users.find((item) => item.id === parseInt(userId));

  if (!user) {
    res.status(404).send("User Not Found!");
    // here return is required.
    return;
  }

  users = users.filter((item) => item.id !== parseInt(userId));

  console.log(users);

  res.status(200).send();
});

// http://localhost:3000/api/posts/2024/1?sortby=name
app.get("/api/posts/:year/:month", (req, res) => {
  // { year: '2024', month: '1' }
  console.log(req.params);

  // we use query parameters to provide additional information
  // the information provided by req.params is essential,
  // the information provided by req.query is optional.
  // { sortby: 'name' }
  console.log(req.query);

  console.log(`year is ${req.params.year}`);
  console.log(`month is ${req.params.month}`);

  res.send(req.params);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
