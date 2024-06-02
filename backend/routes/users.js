import express from "express"
import { getUsersController , addUsersController , deleteUserController , updateUserController} from "../controllers/users.js"

const router = express.Router()

router.get("/", getUsersController)
router.post("/", addUsersController)
router.delete("/:id", deleteUserController)
router.put("/:id", updateUserController)


export default router