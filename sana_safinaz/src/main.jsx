import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ShopContextProvider from './Components/Context/Context.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  
    <ShopContextProvider>
    <App />
    </ShopContextProvider>

)
