import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const useSearchbarLogic = () => {
  const navigate = useNavigate()

  const [search, setSearch] = useState<string>('')

  const searchProduct = async (key?: string) => {
    if (key && key?.toString()?.toLocaleLowerCase() === 'enter') {
      navigateToResults(search)
    }
    if (!key) {
      navigateToResults(search)
    }
  }

  const navigateToResults = async (value: string) => {
    navigate(`items?search=${value}`)
  }

  return {
    search,
    setSearch,
    searchProduct
  }
}

export default useSearchbarLogic