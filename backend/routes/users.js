import express from "express"
import { getUsersController } from "../controllers/users.js"

const router = express.Router()

router.get("/", getUsersController)


export default router