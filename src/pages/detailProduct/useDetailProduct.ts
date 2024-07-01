import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const useDetailProduct = () => {
  const params = useParams()
  const navigate = useNavigate()

  const [info, setInfo] = useState<any>({})

  useEffect(() => {
    getInfoProduct(params?.id)
  }, [])

  const getInfoProduct = async (id: string | undefined) => {
    const response = await axios.get(`http://localhost:3001/api/items/${id}`)
    if (response?.data?.data?.item) {
      setInfo(response?.data?.data?.item)
    } else {
      setInfo({})
    }
  }

  const navigateHome = async () => {
    alert('Has comprado el product')
    navigate('/')
  }

  return {
    info,
    navigateHome
  }
}

export default useDetailProduct