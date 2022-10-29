import express from "express"
import productRouter from "./routers/productsRouter.js"
import cors from "cors"


const app = express()

app.use(cors())
app.use(express.json())
app.use('/', productRouter)


export default app