import jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../config/env.config.js'

export const validateJWT = (req, res, next) => {
    if (!req.header('Authorization')) {
        return res.status(401).json({ error: 'Unauthorized', message: 'No Authorization header provided' })
    }

    const token = req.header('Authorization').split(' ')[1]

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized',  message: 'No token provided' })
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded
        console.log(decoded)
        next()
    } catch (error) {
        return res.status(401).json({ error: 'Unauthorized', message: 'Invalid token' })
    }
}