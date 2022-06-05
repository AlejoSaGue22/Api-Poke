import { getpokemon } from "../../helpers/getpokemon";

describe('Prueba helper getPokemon',() => {
    test('debera traer 1 elemento', async () =>{
        const pokemon = await getpokemon('pikachu');
        expect(pokemon.nombre).toBe('pikachu');      
    })   
})