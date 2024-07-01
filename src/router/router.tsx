import { mappingComponent } from './routerLogic'

const renderComponent = (key: string) => {
  const Component = mappingComponent[key]
  return <Component />
}

export const routes = [
  {
    layout: renderComponent('PrivateLayout'),
    key: 'home',
    routes: [
      {
        component: renderComponent('SearchBar'),
        path: '/',
        key: 'searchbar'
      },
      {
        component: renderComponent('Results'),
        path: '/items',
        key: 'results'
      },
      {
        component: renderComponent('DetailProduct'),
        path: '/items/:id',
        key: 'detailProduct'
      }
    ]
  }
]