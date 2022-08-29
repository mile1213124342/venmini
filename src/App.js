import './App.css';
import { Route , Routes , BrowserRouter } from "react-router-dom"
import Home from './components/pages/Home';
import Contacto from './components/pages/Contacto';
import Galeria from './components/pages/Galeria';
import Productos from './components/pages/Productos';




function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route exact path='/productos' element={<Productos/>}/>
                <Route exact path='/galeria' element={<Galeria/>}/>
                <Route exact path='/contacto' element={<Contacto/>}/>
                
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
