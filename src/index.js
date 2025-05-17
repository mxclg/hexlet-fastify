import fastify from "fastify";
import view from "@fastify/view";
import pug from "pug";

const app = fastify();
const port = 3000;

await app.register(view, { engine: { pug } });

app.get("/", (req, res) => res.view("src/views/index.pug"));

app.get("/users/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.get("/hello", (req, res) => {
  const name = req.query.name;
  const currentName = name !== undefined ? `Hello, ${name}!` : "Hello, World!";
  res.send(currentName);
});

app.post("/users/:id/post/:postId", (req, res) => {
  res.send(`User ID: ${req.params.id}; Post ID: ${req.params.postId}`);
});

app.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`);
});
