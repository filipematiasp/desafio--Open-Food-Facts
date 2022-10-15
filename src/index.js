import express, { json } from "express"
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
import cors from "cors"
import productRouter from "./routers/productsRouter.js"


mongoose.connect('mongodb+srv://UserBank:' + process.env.SECRET_KEY + '@cluster0.wiyb9.mongodb.net/projetos', (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log('Mongodb connected');
    }
})

const app = express()
const port = process.env.PORT || 3000


app.use(cors())
app.use(express.json())
app.use('/', productRouter)

app.listen(port, () => {
    console.log(`App listen on port: ${port}`)
})
