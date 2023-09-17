

const Formulario = () => {
  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">
        Nueva Tarea
      </h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade una tarea para su {""}
        <span className="azul-oscuro font-bold">Seguimiento</span>
      </p>

      <form className="celeste shadow-md rounded-lg py-10 px-5 azul-oscuro space-y-5 mb-5">
        <div>

          <label htmlFor="asunto" className="block azul uppercase font-bold">Asunto tarea</label>

          <input
            type="text"
            placeholder="Asunto de la tarea"
            className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
            id="asunto"
          />

        </div>

        <div>

          <label htmlFor="creador" className="block azul uppercase font-bold">Creada por</label>

          <input
            type="text"
            placeholder="Tarea creada por"
            className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
            id="creador"
          />

        </div>
        <div>

          <label htmlFor="fecha" className="block azul uppercase font-bold">Fecha de creación de tarea</label>

          <input
            type="date"
            className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
            id="fecha"
          />

        </div>

        <div>

          <label htmlFor="detalles" className="block azul uppercase font-bold">Detalles</label>

          <textarea
            placeholder="Detalles de tarea"
            className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400 resize-none"
            id="detalles"
            rows={5}
            maxLength={100}
          />

        </div>
        <input 
        type="submit"
        className="bg-oscuro text-celeste w-full uppercase font-bold p-3 r hover:bg-slate-500  hover:text-slate-950 cursor-pointer transition-colors"
        value="Agregar Tarea"
         />
      </form>
    </div>
  )
}

export default Formulario;