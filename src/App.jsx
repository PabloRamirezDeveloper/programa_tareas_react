import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoTareas from "./components/ListadoTareas"


function App() {

  const [tareas, setTareas] = useState(JSON.parse(localStorage.getItem('tareas')) || []); //State que almacena todas las tareas
  //en un array

  const [tarea, setTarea] = useState({}); //State que almacena cada tarea en un 
  //objeto                            

  // useEffect( () => {

  //     const tareasLS = JSON.parse(localStorage.getItem('tareas')) ;
  //     tareasLS.length > 0 && setTareas(tareasLS);
  
  // }, [])

  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas])

  const eliminarTarea = id => { //Funcion para eliminar una tarea del listado
    //de tareas
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }
  return (
    <div className="container mx-auto mt-10">
      <Header />

      <div className="mt-12 md:flex">
        <Formulario
          tareas={tareas}
          setTareas={setTareas} //Pasamos  la funcion setTareas a Formulario que es donde 
          //se está registrando las tareas
          tarea={tarea}
          setTarea={setTarea}
        />
        <ListadoTareas
          tareas={tareas}
          setTarea={setTarea}
          eliminarTarea={eliminarTarea}

        />
      </div>

    </div>
  )
}


export default App