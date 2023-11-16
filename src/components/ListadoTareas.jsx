
import Tarea from "./Tarea"



const ListadoTareas = ({ tareas, setTarea, eliminarTarea }) => {

  return (


    <div className="md:w-1/2 lg:w-3/5 ">
      {tareas && tareas.length ?
        <>
          <h2 className="font-black text-2xl lg:text-3xl text-center">Listado de Tareas Pendientes</h2>

          <p className="text-xl mt-5 text-center mb-10">
            Adiministra las Tareas {""}
            <span className="azul-oscuro font-bold">Pendientes</span>
          </p>
          <div className="md:h-screen overflow-y-scroll space-y-3 mb-4">

            {tareas.map(tarea => (

              <Tarea
                key={tarea.id}  // Cuando vayas a iterar y mostrar diferentes  
                // componentes una y otra vez en base a un arreglo, 
                // tienes que pasarle un id único 
                tarea={tarea}
                setTarea= {setTarea}
                eliminarTarea= {eliminarTarea}
              />

            ))}
          </div>

        </>
        : <>
          <h2 className="font-black text-2xl lg:text-3xl text-center">No hay Tareas Pendientes</h2>

          <p className="text-xl mt-5 text-center mb-10">
            Se debe comenzar agregando tareas {""}
            <span className="azul-oscuro font-bold ">y aparecerán en esta sección</span>
          </p>
        </>}

    </div>

  )
}

export default ListadoTareas