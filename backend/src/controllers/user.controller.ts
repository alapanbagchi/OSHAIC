import { generateOTP } from './../utils/generateOTP';
import { Request, Response } from "express";
import User from "../models/user.model";
import bcrypt from 'bcrypt'
import { sendEmail } from "../utils/nodemailer";
import { RedisClient } from "..";

//If an OTP exists in redis delete it and generate a new otp that expires in 10 mins(600s) and return it
const otpHandler = async (key: string) => {
    const otp = await RedisClient.v4.get(key)
    if (otp) {
        await RedisClient.v4.del(key)
    }
    let newOTP = generateOTP()
    await RedisClient.v4.set(key, newOTP)
    await RedisClient.v4.expire(key, 600)
    return newOTP
}

const login = async (req: Request, res: Response) => {
    try {
        const user = await User.find({ email: req.body.email })
        if (user.length === 0) {
            return res.status(400).send("User not found")
        }
        const isMatch = await bcrypt.compare(req.body.password, user[0].password)
        if (!isMatch) {
            return res.status(400).send("Password is incorrect")
        }
        req.session.user = user[0]._id
        //If the user is not verified check the redis database for an otp and if it is there send the otp or else send a new otp
        if (!user[0].verified) {
            const otp = await otpHandler(user[0]._id.toString())
            await sendEmail('mail.oshaic.com', user[0].email, 'Verify Your Account', `${otp}`)
            return res.status(200).send({ message: "User Unverified", status: "ERROR" })
        }
        return res.status(200).send(user[0])
    } catch (err) {
        return res.status(500).send(err)
    }
}

const register = async (req: Request, res: Response) => {
    try {
        const userExists = await User.find({ email: req.body.email })
        if (userExists.length > 0) {
            return res.status(400).send("User already exists")
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const user = new User({
            ...req.body,
            password: hashedPassword
        })
        const newUser = await user.save()
        const otp = Math.floor(Math.random() * 1000000)
        await RedisClient.set(newUser._id + '', otp + '')
        sendEmail('mail.oshaic.com', 'alapanbagchi.dev@gmail.com', 'Verify Your Account', '1205971028957')
        return res.status(200).send(newUser)
    } catch (err) {
        return res.status(500).send(err)
    }
}

const me = async (req: Request, res: Response) => {
    //Get the user id from cookies 
    const userId = req.session.user
    if (!userId) {
        return res.status(400).send("User not found")
    }
    try {
        const user = await User.findById(userId)
        return res.status(200).send(user)
    } catch (err) {
        return res.status(500).send(err)
    }
}
const logout = async (req: Request, res: Response) => {
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).send(err)
        }
        return res.status(200).send("Logged out")
    })
}

const sendOTP = async (req: Request, res: Response) => {
    let userID = req.session.user
    if (!userID) {
        return res.status(400).send("User not found")
    }
    const user = await User.findById(userID)
    console.log(user)
    if(!user){
        return res.status(400).send("User not found")
    }
    const otp = await otpHandler(req.session.user)
    if (!otp) {
        return res.status(400).send("OTP not sent")
    }
    await sendEmail('mail.oshaic.com', user.email, 'Verify Your Account', `${otp}`)
    return res.status(200).send({ message: `OTP: ${otp}`, status: "ERROR" })
}

const verifyUser = async (req: Request, res: Response) => {
    const userId = req.session.user
    if (!userId) {
        return res.status(400).send("User not found")
    }
    try {
        //Get the otp from redis
        const otp = await RedisClient.v4.get(userId)
        console.log(otp)
        if (!otp) {
            return res.status(400).send("OTP does not exist. Resend OTP")
        }
        if (otp === req.body.otp) {
            await User.findByIdAndUpdate(userId, { verified: true })
            return res.status(200).send("User verified")
        }
        return res.status(400).send("OTP is incorrect")
    }
    catch (err) {
        return res.status(500).send(err)
    }
}

export {
    register,
    login,
    me,
    logout,
    verifyUser,
    sendOTP
}