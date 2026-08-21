/*var http = require("http");
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hola Mundo!\n");
  }).listen(8080);
console.log("Servidor en la url http://127.0.0.1:8080/");*/
const users = require("./routes/users")
const express = require('express'); 
const app = express();
const port = 8081;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get(/.*test$/, function(req, res) {
  res.send('<h1>Entraste usando el patron test!</h1>');
});
app.use("/static", express.static('public'))
app.use("/users", users);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})