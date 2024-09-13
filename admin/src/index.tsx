import '@src/libs/yup/setLocale'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { App } from './App'

/**
 * Root App
 */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
