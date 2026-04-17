"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonController = void 0;
const pokemon_service_1 = require("../service/pokemon.service");
const service = new pokemon_service_1.PokemonService();
class PokemonController {
    async get(req, res) {
        try {
            const result = await service.getPokemons();
            res.json(result);
        }
        catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching pokemons.' });
        }
    }
}
exports.PokemonController = PokemonController;
//# sourceMappingURL=pokemon.controller.js.map