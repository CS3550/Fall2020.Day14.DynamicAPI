const express = require("express");
const app = express();


app.use(express.static("./static"))

app.get("/api/time", (req, res)=>{
  // res.send(new Date())
})
app.get("/api/echo/:param", (req, res)=>{
  // let echo = req.params["param"]
  // res.send(echo)
})

app.listen(3000, (err)=>{
  if(err)return console.log(err);
  console.log("We are listening on http://localhost:3000");
})