import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bulma/css/bulma.min.css'


import App from './App.jsx'
import Header from './components/header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <App />

  </React.StrictMode>,
)
