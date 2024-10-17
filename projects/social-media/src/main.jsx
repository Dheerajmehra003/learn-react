import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import  'bootstrap/dist/css/bootstrap.min.css'
// import { Provider } from 'react-redux'
// import store from './Store.js';
import ShopContextProvider from './Context.jsx'


createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>
 
)
