//crear cmponente react

import { useEffect, useState } from 'react'
import Navbar from '../component/Navbar/Navbar'
const Home = () => {
  const [productList, setProductList] = useState([])

  useEffect(() => {
    window
      .fetch('/api/avo')
      .then(res => res.json())
      .then(({data, length}) => {
        setProductList(data)
      })
  }, [])
  return ( 
    
    <div>
      <Navbar/> 
      <h1>Hola Platzi!</h1>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
    
   )
}
 
export default Home;