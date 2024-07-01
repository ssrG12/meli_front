import useCurrency from '../../utils/currency'
import useDetailProduct from './useDetailProduct'
import '../../styles/detailProduct/detailProduct.scss'

export const DetailProduct = () => {
  const { formatCurrency } = useCurrency()
  const { info, navigateHome } = useDetailProduct()

  return (
    <div className='containerDetail' >
      <div className='productDetailContainer' >
        <div className='columnImage' >
          <img src={info?.picture} className='imageProduct' alt='product' />
          <div>
            <b>Descripción del producto</b>
            <p className='description' >{info?.description}</p>
          </div>
        </div>
        <div className='columnPrice'>
          <b>{info?.title}</b>
          <p className='price' >$ {formatCurrency(info?.price?.amount)}</p>
          <div className='buttonShop' onClick={() => navigateHome()} >
            <p className='shopText' >
              Comprar
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}