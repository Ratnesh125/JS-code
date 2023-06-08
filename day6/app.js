const bodyParser=require("body-parser");
const express=require("express");
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.listen(3000);
app.engine("html",require("ejs").renderFile);
app.set("view engine","html");

const homeRouter=require("./routes/home");
const loginRouter=require("./routes/login");

app.use("/",homeRouter);
app.use("/login",loginRouter);
