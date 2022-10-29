import app from '../app.js'
import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()


const port = process.env.PORT || 3000


mongoose.connect('mongodb+srv://UserBank:' + process.env.SECRET_KEY + '@cluster0.wiyb9.mongodb.net/projetos', (error) => {
    if(error) {
        console.log(error)
    } else {
        console.log('Mongodb connected');
    }
})


app.listen(port, () => {
    console.log(`App listen on port: ${port}`)
})