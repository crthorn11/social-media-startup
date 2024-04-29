const router = require("express").Router();

const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThoughtById,
    deleteThoughtById
} = require("../controllers/thoughtController")

router.get("/api/thoughts", getAllThoughts)
router.get("/api/thoughts/:thoughtId", getThoughtById)
router.post("/api/thoughts", createThought)
router.put("/api/thoughts/:thoughtId", updateThoughtById)
router.delete("/api/thoughts/:thoughtId", deleteThoughtById)

module.exports = router;