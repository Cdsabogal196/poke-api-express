import axios from 'axios';
import { AppDataSource } from '../config/database'; 
import { Pokemon } from '../entities/pokemon'

export class PokemonService {
    private repository = AppDataSource.getRepository(Pokemon);

    async getPokemons(){
        const count = await this.repository.count();
        if(count > 0){
            return await this.repository.find();
        }

        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=10');
        for (const pokemonData of response.data.results) {
            const detail = await axios.get(pokemonData.url);
            const data = detail.data;
            const exist = await this.repository.findOneBy({name:data.name}); 
            if(!exist){
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