import express from 'express';
import User from '../models/user.model.js';

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({ msg: 'user works' });
});

router.post('/update', async (req, res) => {
    const { username } = req.body;
    const userId = req.cookies.userId;
    if (!username) {
        return res.status(400).json({ success: false, msg: 'Username is required' });
    }

    try {
        const user = await User.findByIdAndUpdate(userId, { username }, { new: true });
        if (!user) {
            return res.status(404).json({ success: false, msg: 'User not found' });
        }
        res.json({ success: true, user });
    } catch (error) {
        console.error('Error updating username:', error);
        res.status(500).json({ success: false, msg: 'Server error' });
    }
});

export default router;