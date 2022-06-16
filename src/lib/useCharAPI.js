
import {useState, useEffect} from 'react'
export const useCharAPI = () => {
  const [state, setState] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character/")
      const json = await response.json()
      setState(json)
    })()
  }, [])

  return state
}