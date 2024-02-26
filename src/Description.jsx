// @ts-check
import { useState, useEffect } from 'react'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://dog.ceo/api/breeds/image/random')

  const fetchDogUrl = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    const data = await response.json()
    setDogUrl(data.message)
  }

  useEffect(() => {
    fetchDogUrl()
  }, [])

  return(
    <div>
        <p>ひもののサイトです</p>
        <img src={dogUrl} alt="Dog Image"></img>
        <button onClick={fetchDogUrl}>更新</button>
    </div>
  )
}

export default Description
