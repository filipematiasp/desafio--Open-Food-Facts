import express from "express"
import productRouter from "./routers/productsRouter.js"

const app = express()

app.use(express.json())
app.use('/', productRouter)


export default app