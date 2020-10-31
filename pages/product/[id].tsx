import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Navbar from '@components/Navbar/Navbar'

const ProductItem = () => {
  const { query: {id} } = useRouter();
  const [product, setProduct] = useState<TProduct>()
  console.log(id)
  useEffect(() => {
    if (id) {
      window
        .fetch(`/api/avo/${id}`)
        .then((res) => res.json())
        .then((data) => setProduct(data))
        .catch((error) => console.error(error))
    }   
  }, [id])
    
  return ( 
    <>
      <Navbar/>
      <h1>
        Esta es la página del producto: 
      </h1> 
      <h3>{product?.name}</h3>
      <img src={product?.image} alt={product?.name} />
      <p>{product?.attributes.description}</p>
      {/* producto: {router.query.id} */}
      {/* .id viene del nobmre que le hemos puesto al archivo */}
    </>
   );
}
export default ProductItem;