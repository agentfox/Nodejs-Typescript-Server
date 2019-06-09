import express from "express";

const app = express();
const port = 3000;
let mm :String;
app.get("/", (req, res) => {
    mm = 'ssk';
  res.send(`The sedulous hyena ate the antelope!${mm}`);
});
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
