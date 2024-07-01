import useDetailProduct from './useDetailProduct'

export const DetailProduct = () => {
  const { info } = useDetailProduct()

  return (
    <div>
      Esta va a ser la del detalle del producto
    </div>
  )
}