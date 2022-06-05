
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import ApiContenedor from '../Componentes/ApiContenedor'
import { useGetGifs } from '../hooks/useGetGifs';
import { useApipoke } from '../useApipoke';
jest.mock('../hooks/useGetGifs')

describe('Pruebas en <ApiContenedor/>',() => {

    
    test('debe mostrar los gifs al cargar el hook', () =>{

        const Pokemon = [
            {
                id:'1',
                url: 'https://roberto.morales/imagen1.jpg',
                title: 'imagen  uno'
            },
            {
                id:'2',
                url: 'https://roberto.morales/imagen2.jpg',
                title: 'imagen  dos'
            },
            {
                id:'3',
                url: 'https://roberto.morales/imagen3.jpg',
                title: 'imagen  tres'
            }
        ]
    
        useApipoke.mockReturnValue({
            gifs: [],
            cargando: false
        })
    
        const valorBusqueda = 'picachu';
        const wrapper = shallow( <ApiContenedor valorBusqueda={valorBusqueda}/>);

        expect(wrapper.find('p').exists()).toBe(false)

    })

    test('debe mostrar cargando', () =>{

        useGetGifs.mockReturnValue({
            gifs: [],
            cargando: true
        })
    
        const valorBusqueda = 'picachu';
        const wrapper = shallow( <ApiContenedor valorBusqueda={valorBusqueda}/>);

        expect(wrapper.find('p').exists()).toBe(true)

    })

    test('La cantidad de elementos GifItem coincide con el número de resultados', () =>{

        const pokemon = [
            {
                id:'1',
                url: 'https://roberto.morales/imagen1.jpg',
                title: 'imagen  uno'
            },
            {
                id:'2',
                url: 'https://roberto.morales/imagen2.jpg',
                title: 'imagen  dos'
            },
            {
                id:'3',
                url: 'https://roberto.morales/imagen3.jpg',
                title: 'imagen  tres'
            }
        ]
    
        useApipoke.mockReturnValue({
            poke: [],
            cargando: false
        })
    
        const valorBusqueda = 'picachu';
        const wrapper = shallow( <ApiContenedor valorBusqueda={valorBusqueda}/>);

        expect(wrapper.find('GifItem').length).toBe(3)

    })

   
})