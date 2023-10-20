import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './Components/ErrorPage'
import App from './App';
import SingleRepo from './Components/singleRepo';
import Layout from './Components/Layout';
import Error404Page from './Components/Error404Page';

const router = createBrowserRouter([
 {
  element: <Layout />, 
  errorElement: <ErrorPage />,
  children:[
    {
      path: '/',
      element: <App /> ,   
    },
    {
      path: '/:name', 
      element: <SingleRepo />,
    },
    {
      path: '*',
      element: <Error404Page />
    }
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

