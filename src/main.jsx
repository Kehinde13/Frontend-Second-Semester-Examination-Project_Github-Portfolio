import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import ErrorPage from './Components/ErrorPage'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import SingleRepo from './Components/singleRepo';
import Layout from './Components/Layout';

const router = createBrowserRouter([
 {
  element: <Layout />, 
  children:[
    {
      path: '/',
      element: <App /> , 
      errorElement: <ErrorPage />,
    },
    {
      path: '/singleRepo/:name', 
      element: <SingleRepo />
    },
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
/*   
   */
