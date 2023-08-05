import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'
import { CustomProvider } from 'rsuite';
import { ProSidebarProvider } from "react-pro-sidebar";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProSidebarProvider>
      
      <CustomProvider theme="dark">
        <HashRouter>
          <App />
        </HashRouter>
      </CustomProvider>
      
    </ProSidebarProvider>
  </React.StrictMode>,
)
