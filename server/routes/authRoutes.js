import express from 'express';
import { register, login, logout, getProfile, updateProfile, deleteProfile } from '../controllers/authControllers.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);
router.get('/profile', authenticateToken, getProfile);
router.put('/profile', authenticateToken, updateProfile);
router.delete('/profile', authenticateToken, deleteProfile);

export default router;
