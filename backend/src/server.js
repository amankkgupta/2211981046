const express= require("express");
const cors= require('cors');
const dotenv= require('dotenv');
const analyticsRoutes= require('./routes/analyticsRoutes');

const app= express();
dotenv.config();
app.use(cors());

app.get("/",(req, res)=>{
    res.send("Welcome, I am running");
})
app.use("/api/analytics", analyticsRoutes );

app.listen(process.env.PORT,()=> console.log(`server started at ${process.env.PORT}`));