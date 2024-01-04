import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from './Pages/ErrorPage'
import HomePage from './Pages/HomePage';
import SingleRepo from './Pages/SingleRepo';
import Layout from './Layouts/Layout';
import Error404Page from './Pages/Error404Page';
import ErrorRepo from './Pages/ErrorRepo';


function App() {

    const router = createBrowserRouter([
        {
         element: <Layout />, 
         errorElement: <ErrorPage />,
         children:[
           {
             path: '/',
             element: <HomePage /> ,   
           },
           {
             path: '/:name', 
             element: <SingleRepo />,
           },
           {
             path: '*',
             element: <Error404Page />
           }, 
           {
             path: '/ErrorRepo',
             element: <ErrorRepo />
           }
         ]
        }
       ])

  return (
    <RouterProvider router={router}/>
  )
}

export default App