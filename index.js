const Koa = require("koa");
const app = new Koa();

const port = 3000;

app.use(async (ctx) => {
  console.log(ctx);
  const { req, res } = ctx;

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  if (req.url === "/") {
    res.write("<h1>Index sayfasına hoşgeldiniz</h1>");
  } else if (req.url === "/hakkimda") {
    res.write("<h1>Hakkımda sayfasına hoşgeldiniz</h1>");
  } else if (req.url === "/iletisim") {
    res.write("<h1>İletişim sayfasına hoşgeldiniz</h1>");
  }
  
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
