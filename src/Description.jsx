// @ts-check
import { useState} from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState('https://dog.ceo/api/breeds/image/random')

  return(
    <div>
        <p>ひもののサイトです</p>
        <img src={dogUrl} alt="Dog Image"></img>
        <DogImage imageUrl={dogUrl} /><br />
        <button onClick={
          () => {
            fetch('https://dog.ceo/api/breeds/image/random')
              .then((res) => res.json())
              .then((data) => {
                setDogUrl(data.message)
              })
          }
        }>更新</button>
    </div>
  )
}

export default Description
