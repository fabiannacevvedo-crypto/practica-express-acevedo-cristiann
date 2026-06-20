import { Router } from "express";

import {
    obtenerPersonajes,
    obtenerPersonajePorId,
    crearPersonaje,
    actualizarPersonaje,
    eliminarPersonaje
} from "../controllers/personajes.controllers.js";

const router = Router();

router.get("/", obtenerPersonajes);

router.get("/:id", obtenerPersonajePorId);

router.post("/", crearPersonaje);

router.put("/:id", actualizarPersonaje);

router.delete("/:id", eliminarPersonaje);

export default router;