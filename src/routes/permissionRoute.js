import { Router } from "express";
import permissionController from "../controllers/permisssionController.js";

const router = Router();

router
  .route("/")
  .post(permissionController.createPermission)
  .get(permissionController.getAllPermissions);

export default router;
