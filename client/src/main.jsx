import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Login from './pages/Login';
import Boards from './pages/Boards';
import Discription from './pages/Discription';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/boards",
    element: <Boards />,
  },
  {
    path: "/Discription/:category/:id",
    element: <Discription />,
  },
])

ReactDOM.createRoot( document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
