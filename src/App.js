import './App.css';
import { Route , Routes , BrowserRouter } from "react-router-dom"
import Nosotros from './components/pages/Nosotros';
import Contacto from './components/pages/Contacto';
import Galeria from './components/pages/Galeria';
import Productos from './components/pages/Productos';




function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<Nosotros/>}/>
                <Route exact path='/nosotros' element={<Nosotros/>}/>
                <Route exact path='/productos' element={<Productos/>}/>
                <Route exact path='/galeria' element={<Galeria/>}/>
                <Route exact path='/contacto' element={<Contacto/>}/>
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
