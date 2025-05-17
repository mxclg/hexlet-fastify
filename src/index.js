import fastify from "fastify";
import view from "@fastify/view";
import pug from "pug";
import sanitize from "sanitize-html";

const app = fastify();
const port = 3000;

await app.register(view, { engine: { pug } });

app.get("/", (req, res) => res.view("src/views/index.pug"));

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.view("src/views/users/show.pug", { id });
});

app.get("/hello", (req, res) => {
  const name = req.query.name;
  const message = name ? `Hello, ${name}!` : "Hello, World!";
  res.view("src/views/hello.pug", { message });
});

app.post("/users/:id/post/:postId", (req, res) => {
  const { id: userId, postId } = req.params;
  res.view("src/views/posts/show.pug", { userId, postId });
});

app.get("/search", (req, res) => {
  const id = req.query.id;
  const safeId = sanitize(id);
  res.type("html");
  res.send(`<h1>${safeId}</h1>`);
});

app.listen({ port }, () => {
  console.log(`Example app listening on port ${port}`);
});
