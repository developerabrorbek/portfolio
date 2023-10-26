import express from "express";
const app = express();


app.use(express.static(process.cwd() + "/../dist"));

app.get("/", (req, res) => {
  res.sendFile(process.cwd() + "/../dist/index.html")
})

app.listen(1001, () => console.log(`Portfolio site working on ${1001}`));
