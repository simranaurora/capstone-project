import express from 'express';

import User from '../models/user.model.js';
import errorHandler from '../utils/error.js';

const router = express.Router();

router.post('/signup', async (req, res, next) => {
    const { username, email, password } = req.body;
    const user = new User({ username, email, password });
    try {
      await user.save();
      res.status(200).json({ message: "User has been created" });
    } catch (err) {
      next(err);
    }
  });

router.post('/signin', async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return next(errorHandler(404, "User not found"));
        }
        if (user.password !== password) {
            return next(errorHandler(400, "Incorrect password"));
        }
        res.cookie('userId', user._id, { httpOnly: true });
        res.status(200).json(user);
    } catch (err) {
        next(err);
    }
});


export default router;