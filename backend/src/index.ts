import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import session from 'express-session'
import cookieParser from 'cookie-parser'
import mongoose, { ConnectOptions } from 'mongoose'
import { createClient } from 'redis'
import { sendEmail } from './utils/nodemailer'
dotenv.config()


const RedisClient = createClient({
    legacyMode: true,
    url: process.env.REDIS_HOST,
    name: process.env.REDIS_USERNAME,
    password: process.env.REDIS_PASSWORD
});
let RedisStore = require('connect-redis')(session)
RedisClient.on('error', (err) => console.log('Redis Client Error', err));
RedisClient.connect();
export {
    RedisClient
}
const PORT = process.env.PORT || 8000
const app = express()

const corsOptions = {
    origin: 'http://localhost:3000',
}


app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors(corsOptions))
app.use(cookieParser())
app.use(session({
    name: "user_sid",
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 600000
    },
    store: new RedisStore({ client: RedisClient }),
}))
const serverStart = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!, { useNewUrlParser: true } as ConnectOptions)
        console.log("Connected to MongoDB")
        await app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    } catch (err) {
        console.log(err)
    }
}

app.use('/user', require('./routes/user.router'))
serverStart()
