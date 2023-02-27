const express = require('express');
const router = express.Router();
const User = require('../../models/User.model');


router.get('/signUp', async (req, res) => {
    res.json('sign up route');
})

router.post('/signUp', async (req, res, next) => {
    const body = req.body;
    try { 
        const user = await User.create(body);
        res.json(user);
    } catch (error) { 
        console.error(error);
        res.json(error);
    }
})

router.post('/login', async (req, res, next) => {
    const userName = req.body.userName;
    try {
        const user = await User.findOne({ userName: userName });
        if (req.body.password === user.password) {
            res.json(user);
        } else {
            res.json('Wrong password');
        }
    } catch (error) {
        console.error(error);
        res.json(error);
    }
})

router.put('/:username/update/', async (req, res, next) => {
    const body = req.body;
    try {
        const userName = req.params.username;
        const userUpdate = await User.findOneAndUpdate({ userName: userName }, body, {new: true});
        res.json(userUpdate);
    } catch (error) { 
        console.log(error);
        res.json(error);
    }
})

router.delete('/:username/delete', async (req, res, next) => {
    try {
        const userDelete = await User.findOneAndDelete({ userName: req.params.username });
        res.status(400).json({ msg: `No member with the username of ${req.params.username}` })

    } catch (error) {
        console.log(error); 
        res.json(error);
    }
})

module.exports = router;