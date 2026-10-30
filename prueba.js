const mongoose = require('mongoose')
const users = require("./routes/users")
const express = require('express'); 
const app = express();
const path = require("path")
const port = process.env.PORT || '8081';
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/api', (req, res) => {
  res.send('Hello World!') 
})
app.get(/.*test$/, function(req, res) {
  res.send('<h1>Entraste usando el patron test!</h1>');
});
app.get(/.*gato$/, function(req, res) {
  res.send('<h1>Entraste usando el patron gato!</h1>');
});
app.use("/static", express.static('public'))
app.use("/api/users", users);
app.use(express.static(path.join(__dirname, "client/dist")));
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "client/dist/index.html"));
})
const uri = process.env.MONGO;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
    console.log('Connection success');
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  }).catch(error => {
    console.error('Connection fail', error);
  });

  export default app;