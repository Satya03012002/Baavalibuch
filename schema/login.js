import mongoose from "mongoose";
import validator from "validator";

const loginData = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
        required :[true, "Email required"],
        validate:{
            validator:validator.isEmail,
            message:"invalid email",

        }
    },
    password:{
        type : String,
        required:[true,"password requires"]
    },
    confirmPassword:{
        type : String,
        required:[true," confirm password requires"]
    },
    text:{
        type:String, 
        required:[true,"text required"]
    }
});

 const LoginData = new mongoose.model("Login",loginData);
 export default LoginData;