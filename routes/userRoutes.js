const router = require("express").Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUserById,
    deleteUserById
} = require("../controllers/userController")

router.get("/api/users", getAllUsers )
router.get("/api/users/:userId", getUserById)
router.post("/api/users", createUser)
router.put("/api/users/:userId", updateUserById)
router.delete("/api/users/:userId", deleteUserById)




module.exports = router;