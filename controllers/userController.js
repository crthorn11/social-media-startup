const user = require('../models/user');

const userControllers = {
    getAllUsers: async (req, res) => {
        const results = await user.find();
        res.json(results);
    },
    getUserById: async (req, res) => {
        const result = await user.findById(req.params.userId);
        res.json(result);
    },
    createUser: async (req, res) => {
        const result = await user.create({
            username: req.body.username,
            email: req.body.email
        });
        res.json(result)
    },
    updateUserById: async (req, res) => {
        const result = await user.findByIdAndUpdate(req.params.userId, {
            username: req.body.username,
            email: req.body.email

        })
        res.json(result)
    },
    deleteUserById: async (req, res) => {
        const result = await user.findByIdAndDelete(req.params.userId)
        res.json(result)
    }
}

module.exports = userControllers;