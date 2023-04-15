import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter } from 'react-router-dom'
import { routes } from './routes/routes'
import { BrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/store'

const router = createBrowserRouter(routes)


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
    <RouterProvider router={router} />

    </Provider>

)
