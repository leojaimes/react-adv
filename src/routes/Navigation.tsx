import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';


import logo from '../logo.svg'
import ShoppingPage from '../02-components-patterns/pages/ShoppingPage';

interface route {
  path: string,
  to: string;
  name: string,
  Component: () => JSX.Element
}
const routes: route[] = [

  {
    path: "/home",
    to: "home",
    name: "home",
    Component: () => (<>Home</>)
  },
  {
    path: "/about",
    to: "about",
    name: "about",
    Component: () => (<>About</>)
  },
  {
    path: "/users",
    to: "users",
    name: "users",
    Component: () => (<>Users</>)
  },

  {
    path: "/shopping",
    to: "shopping",
    name: "ShoppingPage",
    Component: ShoppingPage
  }

]

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading...</span>}>

      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React Logo" />
            <ul>

              {
                routes.map(({ to, name }) => (
                  <li key={to}>
                    <NavLink
                      to={to}
                      className={({ isActive }) => !isActive ? 'nav-active' : ''}>
                      {name}
                    </NavLink>
                  </li>
                ))

              }


            </ul>
          </nav>


          <Routes>

            {
              routes.map(({ path, Component }) => (
                <Route
                  key={path}
                  path={path}
                  element={<Component />}
                />
              ))
            }


            <Route path="/*" element={<Navigate to={routes[0].to} replace />} />
          </Routes>

        </div>
      </BrowserRouter>
    </Suspense>
  )
}
