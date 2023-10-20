import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import MainRoutes from './Routes'; // Assuming Routes.tsx exports a component named MainRoutes
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
    </React.StrictMode>,
)
