import { Router } from "express"

import createUserController from "../controllers/createUser.controller"
import deleteUserController from "../controllers/deleteUser.controller"
import listUsersController from "../controllers/listUsers.controller"
import updateUsersController from "../controllers/updateUser.controller"
import userLoginController from "../controllers/userLogin.controller"
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware"

import verifyEmailAvailabilityMiddleware from "../middlewares/verifyEmailAvailability.middleware"

const router = Router()

router.post("", verifyEmailAvailabilityMiddleware, createUserController)
router.get("", listUsersController)
router.put("/:id", verifyAuthTokenMiddleware, updateUsersController)
router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController)
router.post("/login", userLoginController)


export default router