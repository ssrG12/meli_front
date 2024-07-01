const useCurrency = () => {
  const toFixed = (value: number) => {
    return +(value.toFixed(2))
  }

  const formatCurrency = (value: number) => {
    if (!value) {
      return '0'
    }
    const fixedValue = toFixed(value)
    return String(fixedValue).replace('.', ',').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
  }

  return {
    formatCurrency
  }
}

export default useCurrency