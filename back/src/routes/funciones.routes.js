import { Router } from "express";
import { obtenerFunciones } from "../controllers/funciones.controller.js";

const router = Router();

router.get("/", obtenerFunciones);

export default router;
