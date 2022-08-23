import { Router } from "express"
const router = Router()
import { register, login, me, logout, verifyUser, sendOTP } from '../controllers/user.controller'
import { registerDataValidator, loginDataValidator } from "../validation/user.validation"

router.get('/login', (req, res) => {
    const status = loginDataValidator(req.body)
    if (!status.isValid) {
        return res.status(400).send(status.errors)
    }
    return login(req, res)
})
router.get('/logout', (req, res) => {
    return logout(req, res)
})
router.post('/register', (req, res) => {
    const status = registerDataValidator(req.body)
    if (!status.isValid) {
        return res.status(400).send(status.errors)
    }
    return register(req, res)
})
router.get('/me', (req, res) => {
    return me(req, res)
})

router.post('/verifyUser', (req, res) => {
    return verifyUser(req, res)
})

router.post('/sendOTP', (req, res) => {
    return sendOTP(req, res)
})
module.exports = router