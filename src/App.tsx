import { routes } from './router/router'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((value) => {
          return (
            <Route key={value.key} element={value.layout}>
              {value.routes.map((valueRoute) => {
                return (
                  <Route key={value.key} path={valueRoute.path} element={valueRoute.component} />
                )
              })}
            </Route>
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App