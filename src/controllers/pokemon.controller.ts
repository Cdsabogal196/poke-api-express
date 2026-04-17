import { Request,Response } from "express";
import { PokemonService } from "../service/pokemon.service";

const service = new PokemonService();

export class PokemonController {

    async get(req: Request, res: Response){

        try {
            const result = await service.getPokemons();
            res.json(result);
        } catch (error) {
            res.status(500).json({ error: 'An error occurred while fetching pokemons.' });

        }
    }

}