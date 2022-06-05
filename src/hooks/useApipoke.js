import { useEffect, useState } from 'react'
import { getpokemon}  from '../helpers/getpokemon'

export const useApipoke = searchVal => {
  const [estado, setEstado] = useState({
    Poke: [],
    cargando: true
  })

  useEffect(() => {
    setTimeout(() => {
      let Poke = getpokemon(searchVal)
      setEstado({
        Poke: Poke,
        cargando: false
      })
    }, 20)
  }, [searchVal])

  return estado
}
