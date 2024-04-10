import React from 'react'
import ReactDOM from 'react-dom/client'
import {  HelmetProvider } from 'react-helmet-async';

import './index.css'
import {

  RouterProvider,
} from "react-router-dom";

import router from './Routes/mainRoutes';
import AuthProvider from './Auth Provider/AuthProvider';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
)
