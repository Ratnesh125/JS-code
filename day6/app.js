const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:false}));

const express=require("express");
const app=express();
app.listen(3000);
app.engine("html",require("ejs").renderFile);
app.set("view engine","html");

const homeRouter=require("./routes/home");
const homeRouter=require("./routes/login");

app.use("/",homeRouter);
app.use("/",loginRouter);
