import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ModalProvider } from './context/ModalContext.tsx'
import './i18n.ts'
import './main.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </React.StrictMode>,
)
