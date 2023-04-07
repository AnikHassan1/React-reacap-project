import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/Home/Home/Home';
import Mainlayout from './component/Layout/Mainlayout';
import Order from './component/Order/Order';
import About from './component/About/About';

const router=createBrowserRouter([
  {
   path:'/',
   element:<Mainlayout></Mainlayout>,
   children:[
    {
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('tshirt.json')
    },
    {
      path:'/Order',
      element:<Order></Order>
    },
    {
      path:'/About',
      element:<About></About>
    }
   ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
