import express from "express";
const app = express();

const port = 3000;

app.get("/test",(req,res)=>{
    res.render("test.ejs");
});

app.listen(port,()=>{
    console.log(`listening at ${port}`);
});