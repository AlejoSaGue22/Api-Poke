import {useApipoke} from '../../hooks/useApipoke';
import {renderHook} from '@testing-library/react-hooks';

describe('Pruebas del custom hook useApipoke', ()=>{

    test('Debe retornar el estado inicial del hook', ()=>{
        const {result} = renderHook(()=>useApipoke('picachu'));
        const {gifs, cargando} = result.current;

        expect(gifs).toEqual([]);
        expect(cargando).toBe(true);
    })

    test('Debe retornar loso elementos del valor de la búsqueda', async ()=>{
        const {result, waitForNextUpdate} = renderHook(()=>useApipoke('picachu'));
        await waitForNextUpdate();
        const {gifs, cargando} = result.current;
        
        expect(gifs.length).toBe(5);
        expect(cargando).toBe(false);
    })
    
})