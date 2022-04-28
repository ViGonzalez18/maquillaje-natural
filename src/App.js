import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar';
import Footer from './componentes/Footer';
import Contenido from './componentes/Contenido';
import ItemListContonteiner from './componentes/ItemListContonteiner';
import Contador from './componentes/Contador';

function App() {
  return (
   <><Navbar />
   <ItemListContonteiner text="Pronto nuevos productos" />
   
   <div>
     {/* <Contenido/> */}
   </div>
   <Footer /></>
  );
}

export default App;
