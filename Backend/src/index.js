import express from 'express'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.route.js'
dotenv.config()
const app = express()
const port = process.env.PORT || 4000

app.use('/api/auth',authRoutes)

app.listen(port, (req, res) => {
    console.log(`Server start in port : ${port}`)
})