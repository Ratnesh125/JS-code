const mongoose=require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/mydb");
var con=mongoose.connection;
var schema=mongoose.Schema({id:String,name:String});
var MyModel=mongoose.model("users",schema)
module.exports=MyModel;
