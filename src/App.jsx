// DO NOT DELETE

import './App.css'
import { useState } from 'react'


/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState('https://dog.ceo/api/breeds/image/random')
  alert("run App.jsx")
  return (
    <div>
      <header><p>Amazing Himoooooono</p></header>
      <main>
        <p>ひもののサイトです</p>
        <img src={dogUrl}></img>
        <button onClick={setDogUrl(fetch('https://dog.ceo/api/breeds/image/random'))}>更新</button>
      </main>
    </div>
  )
}
