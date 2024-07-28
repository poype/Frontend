const express = require("express");

const app = express();

// enable parsing json to body object of request
app.use(express.json());

const users = [
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
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
  };
  users.push(newUser);

  console.log(`Users is ${JSON.stringify(users)}`);

  res.send(newUser);
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
