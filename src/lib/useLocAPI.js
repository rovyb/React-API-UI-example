import {useState, useEffect} from 'react'

export const useLocAPI = (url) => {
  const [state, setState] = useState();

  useEffect(() => {
    (async () => {
      const response = await fetch(url)
      const json = await response.json()
      setState(json)
    })()
  }, [url])

  return state
}