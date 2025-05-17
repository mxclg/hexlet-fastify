import fastify from "fastify";

const app = fastify();
const port = 3000;

app.get("/users", (req, res) => {
  res.send("GET /users");
});

app.get("/hello", (req, res) => {
  const name = req.query.name;
  const currentName = name !== undefined ? `Hello, ${name}!` : "Hello, World!";
  res.send(currentName);
});

app.post("/users", (req, res) => {
  res.send("POST /users");
});

app.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`);
});
