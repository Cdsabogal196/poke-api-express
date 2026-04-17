"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonService = void 0;
const axios_1 = __importDefault(require("axios"));
const database_1 = require("../config/database");
const pokemon_1 = require("../entities/pokemon");
class PokemonService {
    repository = database_1.AppDataSource.getRepository(pokemon_1.Pokemon);
    async getPokemons() {
        const count = await this.repository.count();
        if (count > 0) {
            return await this.repository.find();
        }
        const response = await axios_1.default.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        for (const pokemonData of response.data.results) {
            const detail = await axios_1.default.get(pokemonData.url);
            const data = detail.data;
            const exist = await this.repository.findOneBy({ name: data.name });
            if (!exist) {
                const pokemon = this.repository.create({
                    name: data.name,
                    base_experience: data.base_experience,
                    weight: data.weight,
                    height: data.height,
                    order: data.order
                });
                await this.repository.save(pokemon);
            }
        }
        return await this.repository.find();
    }
}
exports.PokemonService = PokemonService;
//# sourceMappingURL=pokemon.service.js.map