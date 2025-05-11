import express from 'express'
import {mainController} from "./controllers/main.js";
const app = express()
const port = 3000
app.use(express.json())
app.get('/', mainController)
app.listen(port, "localhost", () => console.log(`Listening on port ${port}`))