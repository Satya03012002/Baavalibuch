import express from "express";
import bodyParser from "body-parser";
import "./db/dbConn.js";
import cors from 'cors';
import SignInRouter from "./router/loginRequest/router.js";
import dotenv from "dotenv";
dotenv.config({ silent: process.env.NODE_ENV === 'production' });
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(bodyParser.json());
app.use("/signin",SignInRouter);

app.listen(PORT,()=>{
    console.log(`server running successfully on PORT : ${PORT}`)
});


