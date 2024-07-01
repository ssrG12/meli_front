import '../../styles/searchBar/searchBar.scss'
import Logo from '../../assets/images/logo.png'
import useSearchbarLogic from './useSearchbarLogic'
import SearchIcon from '../../assets/images/lupa.png'

export const SearchBar = () => {
  const { search, setSearch, searchProduct } = useSearchbarLogic()

  return (
    <div className='barContainer' >
      <img src={Logo} className='imageLogo' alt='logo' />
      <div className='rowInput' >
        <input className='input' placeholder='Nunca dejes de buscar' value={search} onChange={(e) => setSearch(e.target.value)} onKeyDown={(e) => searchProduct(e.key)} />
        <div className='buttonSearch' onClick={() => searchProduct()} >
          <img src={SearchIcon} className='searchIcon' alt='icon' />
        </div>
      </div>
    </div>
  )
}