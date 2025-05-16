import fastify from "fastify";

const app = fastify();
const port = 3000;

app.get("/users", (req, res) => {
  res.send("GET /users");
});

app.get("/hello", (req, res) => {
  const name = req.query.name;
  res.send(name !== undefined ? `Hello, ${name}!` : "Hello, World!");
});

app.post("/users", (req, res) => {
  res.send("POST /users");
});

app.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`);
});
