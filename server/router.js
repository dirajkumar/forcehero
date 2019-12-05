import express from 'express'
import { login, callback, logout } from './routes/auth.js'
import { objects } from './routes/schema.js'

const router = express.Router()

// Auth Routes
router.get('/api/auth/login', login)
router.get('/api/auth/callback', callback)
router.get('/api/auth/logout', logout)

// Schema Routes
router.get('/api/schema/objects', objects)

export default router
