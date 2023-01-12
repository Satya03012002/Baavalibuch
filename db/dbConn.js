import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });
const CONNECTION_URL = `mongodb+srv://${process.env.DBNAME}:${process.env.PASSWORD}@cluster0.ddmrzxa.mongodb.net/test`
mongoose.set("strictQuery", false);
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("mongodb connected successfully"))
.catch((err)=>console.log(err));

