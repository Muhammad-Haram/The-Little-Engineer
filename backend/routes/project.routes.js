import { Router } from "express";
import * as projectController from "../controllers/project.controller.js";
import { body } from "express-validator";
import { authUser } from "../middlewares/auth.middleware.js";

const router = Router();

router.post(
  "/create",
  body("name").isString().withMessage("Name must be a required"),
  projectController.createProject
);
