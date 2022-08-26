import './App.css';
import { Route , Routes , BrowserRouter } from "react-router-dom"
import Home from './components/home/Home';




function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
