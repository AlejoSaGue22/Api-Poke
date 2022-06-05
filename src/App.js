import './App.css';
import { useState } from 'react'
import React from "react"
import { Formulario } from './Componentes/Formulario';
import { ApiContenedor } from './Componentes/ApiContenedor'
import {firebase} from './firebase'

const App = ({categorias = []}) => {
  const [busquedaCat, setCategoriasBusqueda] = useState(categorias);
  const [lista, setLista] = useState([])

  React.useEffect(()=>{
    const datosPokemones = async () =>{
        try{
            const db = firebase.firestore()
            const data = await db.collection('PokeAPP').get()
            const array = data.docs.map(item =>(
                {
                    id:item.id, ...item.data()
                }
            ))
            setLista(array)

        }catch(error){
            console.log(error)
        }
    }
    datosPokemones()
}, [lista])

  return (
    <div className="App">
        <hr className='hr'/>
        <Formulario setCategoriasBusqueda={setCategoriasBusqueda}/>
        <ol>
        {
            lista.map(item => (
                <ApiContenedor
                    key = {item.id} 
                    valorBusqueda={item}
                />
            ))
        }
    </ol>
    </div>
  );
}

export default App;
