import express from "express";
const app = express();

app.use(express.urlencoded({extended: true}));
// app.use(express.json());


app.get("/", function (_request, response) {
  response.sendFile(__dirname + "/index.html"); //to access a directory
});

app.post("/", function (request, response) {
  var age = Number(request.body.n1) / 15;
  response.send("Your age in dog years is: " + age + " dog years.");
});

app.listen(3000, function() {
  console.log("Your age in dog years is: " + age + " dog years.");
});

//npm install express
//npm install body-parser
