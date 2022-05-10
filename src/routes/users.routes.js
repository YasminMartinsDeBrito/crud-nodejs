import { Router } from "express"

import createUserController from "../controllers/createUser.controller"
import deleteUserController from "../controllers/deleteUser.controller"
import listUsersController from "../controllers/listUsers.controller"
import updateUsersController from "../controllers/updateUser.controller"

const router = Router()

router.post("", createUserController)
router.get("", listUsersController)
router.put("/:id", updateUsersController)
router.delete("/:id", deleteUserController)

export default router