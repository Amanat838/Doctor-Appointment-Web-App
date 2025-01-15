import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js' 
import adminRouter from './routes/adminRoute.js'


//App Config
const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//Middlewares
app.use(express.json())
app.use(cors())

//Api Endpoints

 
  //localhost:4000/api/admin/add-doctor
app.use('/api/admin', adminRouter)

app.get('/', (req, res) => {
    return res.send('API WORKING')
})

app.listen(port, () => console.log('Server started at', port))
