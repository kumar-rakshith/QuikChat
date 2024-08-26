import express from 'express';
import { signup, login, logout } from '../controllers/auth.controller.js'; // Adjust the path as needed

const router = express.Router();

// Define routes
router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

export default router;
