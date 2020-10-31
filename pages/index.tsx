//crear cmponente react

import { useEffect, useState } from 'react'
const Home = () => {
  const [productList, setProductList] = useState<TProduct[]>([])

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
      <h1>NextJS Avocados Web</h1>
      {productList.map((product) => (
        <div>{product.name}</div>
      ))}
    </div>
    
   )
}
 
export default Home;