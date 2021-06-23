const Koa = require("koa");
const serve = require("koa-static");

const port = process.env.PORT ?? 4000;

const app = new Koa();

app.use(serve("dist/"));

app.listen(port);

console.log(`Listening on port ${port}`);
