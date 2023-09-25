import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './component/header'
import Baner from './component/Baner'
import ProductsList from './component/ProductsList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Baner />
      <ProductsList/>
    </>
  )
}

export default App
