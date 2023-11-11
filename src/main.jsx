
import React from 'react' //Cuenta con la API de React
import ReactDOM from 'react-dom/client' //ReactDomEs la versión web de React, 
                                        //tiene los eventos relacionados al DOM(click,
                                        //onSubmit, etc).
import App from './App.jsx' //Archivo que se importa en la funcion render
import './index.css' //Hoja de estilo que aplica a todo el proyecto

ReactDOM.createRoot(document.getElementById('root')).render(
  //Modo estricto en React
  <React.StrictMode> 
    <App />
  </React.StrictMode>,
)
