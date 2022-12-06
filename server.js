var express = require("express");
var app = express();
var router = express.Router();

var path = __dirname;

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

app.use(express.static(path));
app.use("/", router);

app.listen(8080, function () {
  console.log('App listening on port 8080')
})