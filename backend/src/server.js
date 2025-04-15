const express= require("express");
const app= express();
const dotenv= require('dotenv');
const cors= require('cors');
dotenv.config();
app.use(cors());



app.get("/",(req, res)=>{
    res.send("Welcome, I am running");
})
app.get("/users", (req, res)=>{

})

app.listen(process.env.PORT,()=> console.log("server started..."));