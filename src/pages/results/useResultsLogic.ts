import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const useResultsLogic = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [data, setData] = useState([])

  useEffect(() => {
    getResults(searchParams.get('search'))
  }, [])

  const getResults = async (value: any) => {
    const response = await axios.get(`http://localhost:3001/api/items?q=${value}`)
    if (response?.data?.data?.items && response?.data?.data?.items?.length > 0) {
      setData(response?.data?.data?.items)
    } else {
      setData([])
    }
  }

  const goToDetail = async (id: string) => {
    navigate(`${id}`)
  }

  return {
    data,
    goToDetail
  }
}

export default useResultsLogic