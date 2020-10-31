import {useRouter} from 'next/router'

const ProductItem = () => {
  const { query: {productId}} = useRouter();
  //const rotuer = useRouter()
  return ( 
    <div>
      Esta es la pagina producto: {productId}
      {/* producto: {router.query.id} */}
      {/* .id viene del nobmre que le hemos puesto al archivo */}
    </div>
   );
}
 
export default ProductItem;