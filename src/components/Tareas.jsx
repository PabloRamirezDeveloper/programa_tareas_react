

const Tareas = ({tarea}) => {

    const {asunto, creador, fecha, detalles} = tarea; //Aplicamos destructuring 
                                            //para obtener los valores de formulario
    return (

        <div className="mx-3 celeste shadow-md px-5 py-10 rounded-xl ">
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
        </div>


    )
}

export default Tareas