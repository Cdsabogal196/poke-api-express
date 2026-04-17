import { Router } from "express";
import { PokemonController } from "../controllers/pokemon.controller";
import { authmiddleware } from "../middleware/auth.middleware";
const router = Router();
const controller = new PokemonController();

router.get("/pokemon", authmiddleware, controller.get.bind(controller));
export default router;

