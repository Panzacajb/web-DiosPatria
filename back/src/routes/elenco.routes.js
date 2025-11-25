import { Router } from "express";
import { obtenerElenco } from "../controllers/elenco.controller.js";

const router = Router();

router.get("/", obtenerElenco);

export default router;
