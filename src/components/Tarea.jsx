

const Tarea = ({ tarea, setTarea}) => {

    const { asunto, creador, fecha, detalles } = tarea; //Aplicamos destructuring 
    //para obtener los valores de formulario
    return (

        <div className="mx-3 celeste shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 azul uppercase">Asunto: {''}
                <span className="font-normal normal-case">{asunto}</span>
            </p>

            <p className="font-bold mb-3 azul uppercase">Creada por: {''}
                <span className="font-normal normal-case">{creador}</span>
            </p>

            <p className="font-bold mb-3 azul uppercase">Fecha de tarea: {''}
                <span className="font-normal normal-case">{fecha}</span>
            </p>

            <p className="font-bold mb-3 azul uppercase">Detalles: {''}
                <span className="font-normal normal-case">{detalles}
                </span>
            </p>
            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-oscuro hover:bg-slate-500 text-white hover:text-slate-950
                    uppercase font-bold cursor-pointer transition-colors rounded-lg"
                    onClick={ () => setTarea(tarea)} //Esperamos que suceda el evento 
                                                     //click y mandamos llamar la funcion
                                                     //setTarea
                >Editar</button>

                <button
                    type="button"
                    className="py-2 px-10 bg-amber-900 hover:bg-amber-800 text-white hover:text-slate-950
                    uppercase font-bold cursor-pointer transition-colors rounded-lg"
                >Eliminar</button>
            </div>
        </div>


    )
}

export default Tarea