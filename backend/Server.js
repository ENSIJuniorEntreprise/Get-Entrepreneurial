const express = require("express");

const app = express()

const morgan = require('morgan')

const cors = require('cors')
const path = require('path');
const mongoose = require("mongoose")

const port = process.env.PORT || 8000;

const mongoURI = "mongodb+srv://ketata15selim:projetevent@cluster0.gbvzliv.mongodb.net/test"

app.use(express.json())

app.use(cors())

app.use(morgan('tiny'))

app.get('/',(req,res)=>{
    res.send("hello hello")
})

app.use("/inscription",require(path.join(__dirname,"./Routes/inscription.js")))
app.use("/article",require(path.join(__dirname,"./Routes/article.js")))
app.use("/collab",require(path.join(__dirname,"./Routes/collab.js")))



mongoose.connect(mongoURI, {
  serverSelectionTimeoutMS: 5000,
}).then((result) => {
  console.log("connected to database");
  app.listen(port, () => {
      console.log(`running on port ${port}`);
  });
}).catch(err => {
  console.error("Error connecting to the database:", err);
});
