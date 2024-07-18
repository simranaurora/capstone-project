import express from 'express';
import Contact from '../models/contact.model.js';

const router = express.Router();

router.post('/contact', async (req, res, next) => {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    try {
        await contact.save();
        res.status(200).json({ message: "Contact form submitted successfully" });
    } catch (err) {
        next(err);
    }
});

export default router;
