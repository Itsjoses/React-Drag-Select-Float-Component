import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import "@fortawesome/fontawesome-free/css/all.css";
import Login from './pages/Login'
import Middleware from './libs/MiddlewareLibs'
// seluruh routing ditaruh pada router
const router = createBrowserRouter([{
  path: "/",
  element: <Home/>
},{
  path: "/login",
  element: <Login/>
}])

// gunakan RouterProvider lalu masukkan value dari router
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
