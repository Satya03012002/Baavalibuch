import express from "express";
import {signIn,getdata} from "./func.js"

const SignInRouter = express.Router()
SignInRouter.post("/",signIn);
SignInRouter.get("/:id",getdata);
export default SignInRouter;