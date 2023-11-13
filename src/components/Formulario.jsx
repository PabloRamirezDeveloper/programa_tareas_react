
import { useState, useEffect } from 'react'; //Forma de importar componentes de React
import Error from './Error';

const Formulario = ({ tareas, setTareas, tarea, setTarea }) => {

  const [asunto, setAsunto] = useState('');
  const [creador, setCreador] = useState('');
  const [fecha, setFecha] = useState('');
  const [detalles, setDetalles] = useState('');

  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.values(tarea).length > 0) {
      setAsunto(tarea.asunto)
      setCreador(tarea.creador)
      setFecha(tarea.fecha)
      setDetalles(tarea.detalles)
    }
  }, [tarea])

  const crearId = () => {

    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  }
  const handleSubmit = (e) => { //Funcion para validar el formulario

    e.preventDefault(); //Prevenimos la accion default que es enviar el 
    //formulario

    if ([asunto, creador, fecha, detalles].includes('')) {

      setError(true);
      return;
    }
    setError(false);

    //Creamos un objeto de tareas para guardarlo en el array de tareas
    //que se ha creado en App.jsx

    const objetoTarea = {

      asunto,
      creador,
      fecha,
      detalles,
      
    }



    if (tarea.id) {
      //Editando la tarea
      
      objetoTarea.id = tarea.id;
      const tareasActualizadas = tareas.map( tareaState => tareaState.id
        === tarea.id ? objetoTarea : tareaState)

        setTareas(tareasActualizadas);

        setTarea ({}); //Reseteamos la informacion del state
    } else {
      //Agregando una nueva tarea
      objetoTarea.id = crearId();
      setTareas([...tareas, objetoTarea]);

    }



    //Reiniciamos los valores del formulario
    setAsunto('');
    setCreador('');
    setFecha('');
    setDetalles('');

  }

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-2xl lg:text-3xl text-center">
        Nueva Tarea
      </h2>
      <p className="text-xl mt-5 text-center mb-10">
        Añade una tarea para su {""}
        <span className="azul-oscuro font-bold">Seguimiento</span>
      </p>

      <form
        onSubmit={handleSubmit} //Funcion que se suele usar para registrar un evento de onSubmit
        //En React se suele llamar de esta manera: handleSubmit
        className="celeste shadow-md rounded-lg py-10 px-5 azul-oscuro space-y-5 mb-5 mx-3 ">


        {error &&  //Expresion para mostrar un mensaje de error si hay un campo vacio
          <Error>
            Todos los campos son obligatorios
          </Error>
        }

        <div>

          <label htmlFor="asunto" className="block azul uppercase font-bold">Asunto tarea</label>

          <input
            type="text"
            placeholder="Asunto de la tarea"
            className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
            id="asunto"
            value={asunto}
            onChange={(e) => setAsunto(e.target.value)}
          />

        </div>

        <div>

          <label htmlFor="creador" className="block azul uppercase font-bold">Creada por</label>

          <input
            type="text"
            placeholder="Tarea creada por"
            className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
            id="creador"
            value={creador}
            onChange={(e) => setCreador(e.target.value)}
          />

        </div>
        <div>

          <label htmlFor="fecha" className="block azul uppercase font-bold">Fecha de creación de tarea</label>

          <input
            type="date"
            className="border-2 rounded-md w-full p-2 mt-2 placeholder-gray-400"
            id="fecha"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
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
            value={detalles}
            onChange={(e) => setDetalles(e.target.value)}
          />

        </div>
        <input
          type="submit"
          className="bg-oscuro text-celeste w-full uppercase font-bold p-3 r hover:bg-slate-500  hover:text-slate-950 cursor-pointer transition-colors rounded-md"
          value={(tarea.id) ? 'Editar tarea' : 'Agregar tarea'}
        />
      </form>
    </div>
  )
}

export default Formulario;