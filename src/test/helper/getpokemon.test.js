import { getpokemon } from "../../helpers/getpokemon";


describe('Pruebas en helper getpokemon',() => {
    test('debe traer 5 elementos por defecto', async () =>{
        
        const gifs = await getpokemon('picachu');

        expect(gifs.length).toBe(5);
        
    })

    test('debe traer 10 elementos como parámetro', async () =>{
        
        const gifs = await getpokemon('picachu', 10);
        expect(gifs.length).toBe(10);
        
    })

   
})