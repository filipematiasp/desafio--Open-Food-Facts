import express, { json } from "express"
import mongoose from "mongoose"
import productRouter from "./src/routers/productsRouter.js"


mongoose.connect('mongodb+srv://UserBank:UserBank@cluster0.wiyb9.mongodb.net/projetos', (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log('Mongodb connected');
    }
})

const app = express()
const port = 3000

app.use(express.json())
app.use('/', productRouter)

app.listen(port, () => {
    console.log(`App listen on port: ${port}`)
})