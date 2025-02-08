import { Router } from "express";
import * as projectController from "../controllers/project.controller.js";
import { body } from "express-validator";
import * as authMiddleWare from "../middlewares/auth.middleware.js";
// const { check } = require("express-validator");

import { check } from "express-validator";

const router = Router();

router.post(
  "/create",
  authMiddleWare.authUser,
  body("name").isString().withMessage("Name is required"),
  projectController.createProject
);



export default router;
