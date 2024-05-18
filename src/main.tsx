// React entry point
import React from 'react'
import ReactDOM from 'react-dom/client'

// App root component
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'

// Bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.bundle.min'

// Overriding Bootstrap styles with custom styles
import './scss/styles.scss'

// TODO: implement https://lingui.dev/ for i18n

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
