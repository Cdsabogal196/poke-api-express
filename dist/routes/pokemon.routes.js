"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pokemon_controller_1 = require("../controllers/pokemon.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
const controller = new pokemon_controller_1.PokemonController();
router.get("/pokemon", auth_middleware_1.authmiddleware, controller.get.bind(controller));
exports.default = router;
//# sourceMappingURL=pokemon.routes.js.map