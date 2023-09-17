
import React from 'react' //Cuenta con la API de React
import ReactDOM from 'react-dom/client' //Es la versión web de React, tiene los eventos
                                        //relacionados al DOM
import App from './App.jsx' //Archivo que se importa en la funcion render
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
