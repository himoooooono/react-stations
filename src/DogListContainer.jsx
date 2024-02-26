// @ts-check

import { useEffect, useState } from "react"
import BreedsSelect from "./BreedsSelect"

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState()
  const [selectedBreed, setSelectedBreed] = useState()

  // @ts-ignore
  const handleSelectChange = (e) => {
    setSelectedBreed(e.target.value)
  }

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/list/all')
      .then((res) => res.json())
      .then((data) => {
        setBreeds(data.message)
      })
  })

  // @ts-ignore
  return <BreedsSelect breeds={breeds} selectedBreed={selectedBreed} onChange={handleSelectChange}/>
}

export default DogListContainer
