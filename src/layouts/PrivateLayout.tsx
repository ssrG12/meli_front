import { Outlet } from 'react-router-dom'
import '../styles/layouts/privateLayout.scss'
import { SearchBar } from '../components/searchBar/SearchBar'

const PrivateLayout = () => {
  return (
    <div className='body' >
      <div className='containerPage' >
        <SearchBar />
        <Outlet />
      </div>
    </div>
  )
}

export default PrivateLayout