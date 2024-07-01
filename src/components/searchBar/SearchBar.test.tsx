import { act } from 'react'
import { SearchBar } from './SearchBar'
import { MemoryRouter } from 'react-router-dom'
import { render, screen, fireEvent } from '@testing-library/react'

test('calls setSearch when input value changes', () => {
  render(
    <MemoryRouter>
      <SearchBar />
    </MemoryRouter>
  )

  const inputElement = screen.getByPlaceholderText(/Nunca dejes de buscar/i)

  act(() => {
    fireEvent.change(inputElement, { target: { value: 'Celular' } })
  })

  const searchButtonElement = screen.getByAltText('icon')

  act(() => {
    fireEvent.click(searchButtonElement)
  })
})