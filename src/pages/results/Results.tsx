import '../../styles/results/results.scss'
import useCurrency from '../../utils/currency'
import useResultsLogic from './useResultsLogic'
import Check from '../../assets/images/check.png'

export const Results = () => {
  const { formatCurrency } = useCurrency()
  const { data, goToDetail } = useResultsLogic()

  return (
    <div className='containerResults' >
      {data.map((value: any) => {
        return (
          <div key={value?.id} className='productContainer' onClick={() => goToDetail(value?.id)} >
            <div className='rowProduct' >
              <img src={value?.thumbnail} className='imageProduct' alt='product' />
              <div className='columnPrice' >
                <b>{value?.title}</b>
                {value?.official_store_id ?
                  <div className='rowNameStore' >
                    <p>Por {value?.official_store_name}</p>
                    <img src={Check} className='checkStore' alt='check' />
                  </div> : null
                }
                <p>$ {formatCurrency(value?.price)}</p>
                {value?.shipping?.free_shipping ?
                  <div className='backShipping' >
                    <p className='textShipping' >Envío gratis</p>
                  </div> : null
                }
              </div>
            </div>
            <b>Cantidades disponibles: {value?.installments?.quantity}</b>
          </div>
        )
      })}
    </div>
  )
}