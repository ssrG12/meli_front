import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const useDetailProduct = () => {
  const params = useParams()

  const [info, setInfo] = useState({})

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

  return {
    info
  }
}

export default useDetailProduct