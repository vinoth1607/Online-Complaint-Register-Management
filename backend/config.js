const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://vinothprabhakaran1607:vinoth@cluster0.eiahn.mongodb.net/")
.then(()=>{
   console.log("connected to mongodb")
})