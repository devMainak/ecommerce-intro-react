import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './pages/products'
import About from './pages/about'

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App/>
    },
    {
      path: "/products",
      element: <Products/>
    },
    {
      path: "/about",
      element: <About/>
    }
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
)