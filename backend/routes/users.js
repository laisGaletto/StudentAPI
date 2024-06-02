import express from "express"
import { getUsersController , addUsersController , deleteUserController , updateUserController, searchUserController } from "../controllers/users.js"

const router = express.Router()

router.get("/", searchUserController)
router.get("/search", searchUserController)
router.post("/", addUsersController)
router.delete("/:id", deleteUserController)
router.put("/:id", updateUserController)


export default router