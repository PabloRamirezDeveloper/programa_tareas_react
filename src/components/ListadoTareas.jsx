import Tareas from "./Tareas"



const ListadoTareas = () => {
  return (

    <div className="md:w-1/2 lg:w-3/5 ">

      <h2 className="font-black text-2xl lg:text-3xl text-center">Listado de Tareas Pendientes</h2>

      <p className="text-xl mt-5 text-center mb-10">
        Adiministra las Tareas {""}
        <span className="azul-oscuro font-bold">Pendientes</span>
      </p>
      <div className="md:h-screen overflow-y-scroll space-y-3 mb-4 ">


        <Tareas />
        <Tareas />
        <Tareas />
        <Tareas />
        <Tareas />
        <Tareas />
      </div>
    </div>

  )
}

export default ListadoTareas