
import "bootstrap/dist/css/bootstrap.min.css";

import ReactDOM from 'react-dom/client'

import './index.css'
import router from './router.jsx'
import { RouterProvider } from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>

)
