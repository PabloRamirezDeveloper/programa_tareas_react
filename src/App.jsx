import { useState } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoTareas from "./components/ListadoTareas"


function App() {

  const [tareas, setTareas] = useState([]);



  return (
    <div className="container mx-auto mt-10">
      <Header/>

      <div className="mt-12 md:flex">
        <Formulario 
          tareas = {tareas}
          setTareas = {setTareas} //Pasamos  la funcion setTareas a Formulario que es donde 
                                    //se está registrando las tareas
        />
        <ListadoTareas
          tareas = {tareas}
        />
      </div>

    </div>
  )
}


export default App