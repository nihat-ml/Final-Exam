import express from "express"
const app = express()
import { route } from "./routers/router.js"
import cors from "cors"
import dotenv from "dotenv"
app.use(express.json())
app.use(cors())
import "./config/config.js"
dotenv.config()

app.use("/products", route)
app.listen(3000, ()=>{
    console.log("Bu app 3000 portunda dinlenilir")
})
