import express from "express";
import userController from "../controllers/userController.js";
import userValidate from "../middleware/userValidate.js";
import roleValidate from "../middleware/roleValidate.js";

const router = express.Router();

const existingUser = userValidate.existingUser;

const existingRole = roleValidate.existingRole;

router.post("/registerUser", existingUser, existingRole, userController.registerUser);

router.get("/listUser/:name?", userController.listUser);

export default router;