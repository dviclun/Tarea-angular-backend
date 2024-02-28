"use strict"
import { Router } from 'express'
import { getTareas, actualizarTarea, nuevaTarea, borrarTarea, getUsuarios, getTarea, getUsuario, getTareasByStatus, getTareasByUser } from '../controllers/tareas.controllers.js';

const router = Router();

router.get("/tareas", getTareas);
router.get("/tareas/:id", getTarea);
router.get("/tareasPorEstado/:estado", getTareasByStatus);
router.get("/tareasPorUsuario/:user", getTareasByUser);
router.put("/actualizarTarea/:id", actualizarTarea);
router.post("/nuevaTarea", nuevaTarea);
router.delete("/borrarTarea", borrarTarea);
router.get("/usuarios", getUsuarios);
router.get("/usuarios/:id", getUsuario);
// router.get("/reservas/:restaurante/:fecha", getReservas);

export default router; //exportamos