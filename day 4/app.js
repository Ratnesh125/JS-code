const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:false}));//to hide details from url
app.listen(3000, console.log("server 3000 "));
app.use(express.static('public'));
app.engine("html",require("ejs").renderFile);
app.set("view engine","html");

const homeRouter=require("./routes/home");
const loginRouter=require("./routes/login");

app.use("/",homeRouter);
app.use("/login",loginRouter);
