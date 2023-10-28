import express from "express";
const app = express();


app.use(express.static(process.cwd() + "/../dist"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/../dist/index.html")
})

app.all("/*", (req, res) => {
  res.status(400).send({
    message : `Given url ${req.url} is not found`
  })
})

app.listen(1001, () => console.log(`Portfolio site working on ${1001}`));
