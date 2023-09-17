import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoTareas from "./components/ListadoTareas"


function App() {  


  return (
    <div className="container mx-auto mt-10">
        <Header />

        <div className="mt-12 md:flex">
          <Formulario />
          <ListadoTareas />
        </div>
        
    </div>
  )
}


export default App