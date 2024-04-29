const thought = require('../models/Thought');

const thoughtControllers = {
    getAllThoughts: async (req, res) => {
        const results = await thought.find();
        res.json(results);
    },
    getThoughtById: async (req, res) => {
        const result = await thought.findById(req.params.thoughtId);
        res.json(result); 
    },
    createThought: async (req, res) => {
        const result = await thought.create({
            username: req.body.username,
            thoughtText: req.body.thoughtText
        });
        res.json(result)
    },
    updateThoughtById: async (req, res) => {
        const result = await thought.findByIdAndUpdate(req.params.thoughtId, {
            thoughtText: req.body.thoughtText,
            username: req.body.username
        })
        res.json(result)
    },
    deleteThoughtById: async (req, res) => {
        const result = await thought.findByIdAndDelete(req.params.thoughtId)
        res.json(result)
    }
}

module.exports = thoughtControllers;