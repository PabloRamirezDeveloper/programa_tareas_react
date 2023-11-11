

const Error = ({children}) => {  //Children es una palabra reservada en React 
                                //que hace referencia a todo lo que le pases
                                //a un componente.
    return (
        <div className='bg-amber-900 p-4 text-white text-center uppercase font-bold rounded-md'>
           <p> {children}</p> 
        </div>
    )
}

export default Error