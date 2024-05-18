// React entry point
import React from 'react'
import ReactDOM from 'react-dom/client'

// App root component
import App from './App.tsx'

import { BrowserRouter } from 'react-router-dom'

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
