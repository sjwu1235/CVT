const express = require("express");
const app = express();
const path = require("path");
const router = express.Router();
//serve static fields in express
app.use(express.static(path.join(__dirname,"public"))); //then e.g. this will work on http://localhost:3000/images/firefox-icon.png

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/index.html"));
  //__dirname : It will resolve to your project folder.
});

router.get("/about", function (req, res) {
  res.sendFile(path.join(__dirname + "/views/about.html"));
});

//add the router
app.use("/", router);
app.listen(process.env.port || 3000);

console.log("Running at Port 3000");