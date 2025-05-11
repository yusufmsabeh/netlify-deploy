import express from 'express'
import {mainController} from "./controllers/main.js";
import ServerlessHttp from "serverless-http";
const app = express()
const port = 3000
app.use(express.json())
app.get('/.netlify/functions/index', mainController)
const handler2 = ServerlessHttp(app)
export const handler = async (event,context)=>{
    const result = await handler2(event, context);
    return result;
}
