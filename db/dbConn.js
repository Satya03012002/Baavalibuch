import mongoose from "mongoose";
const CONNECTION_URL = "mongodb+srv://Baavalibuch:Baavalibuch@cluster0.ddmrzxa.mongodb.net/test"
mongoose.set("strictQuery", false);
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("mongodb connected successfully"))
.catch((err)=>console.log(err));

