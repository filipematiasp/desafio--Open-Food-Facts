import app from '../app.js'
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()
import cors from "cors"

const port = process.env.PORT || 3000


mongoose.connect('mongodb+srv://UserBank:' + process.env.SECRET_KEY + '@cluster0.wiyb9.mongodb.net/projetos', (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log('Mongodb connected');
    }
})

app.use(cors())

app.listen(port, () => {
    console.log(`App listen on port: ${port}`)
})