import { FC, useEffect } from 'react'

import ObjectInput from './components/ObjectInput'
import ObjectVisual from './components/ObjectVisual'

import axios from 'axios'

import './App.scss'

const App: FC = () => {
  const init = async () => {
    const res = await axios.post(`http://localhost:3000/object`, {
      url: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg',
    })

    console.log(res.data)
  }

  return (
    <>
      <ObjectInput />
      <ObjectVisual />
    </>
  )
}

export default App
