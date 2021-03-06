import express from "express";
import userController from "../controllers/userController.js";
import userValidate from "../middleware/userValidate.js";
import roleValidate from "../middleware/roleValidate.js";

const router = express.Router();

const existingUser = userValidate.existingUser;

const existingRole = roleValidate.existingRole;

router.post("/registerUser", existingUser, existingRole, userController.registerUser);

router.get("/listUser/:name?", userController.listUser);

router.post("/login", userController.login);

router.put("/delete/:_id", userController.deleteUser);

router.put("/updateUser", userController.updateUser);

export default router;