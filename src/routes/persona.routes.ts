import { Router } from "express";
import {
  getPersonas,
  getPersona,
  deletePersona,
  postPersona,
  putPersona,
} from "../controllers/persona.controller";

const router = Router();
//Creamos los router para cada funcion del controlador
router.get("/", getPersonas);
router.get("/:id", getPersona);
router.delete("/:id", deletePersona);
router.post("/", postPersona);
router.put("/:id", putPersona);

export default router;
