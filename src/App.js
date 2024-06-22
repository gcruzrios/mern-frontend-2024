import logo from "./logo.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";

import Actualizar from "./pages/Actualizar";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Registro from "./pages/Registro";

import NotFound from "./pages/Error404";
import Dashboard from "./pages/Dashboard";
import AcercaDe from "./pages/AcercaDe";
import Contacto from "./pages/Contacto";
import RecordarPass from "./pages/RecodarPass";
import EditEmpleado from "./pages/EditEmpleado";



const estaAutenticado = () => {
  const token = localStorage.getItem("token");
  
  if (token) {
    return <Navigate to="/" replace />;
  } else {
    return false;
  }
};

function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" exact element={<Login />} />

          {/* <Route
            exact
            path="/index"
            element={estaAutenticado() ? <Index /> : <Navigate to="/" />}
                       
          /> */}
          <Route path="/index" exact element={estaAutenticado() ? <Index /> : <Navigate to="/" />} />

          {/* <Route exact path="/login" element={<Login />} /> */}
          <Route exact path="/register" element={<Registro />} />
          <Route exact path="/acerca" element={<AcercaDe />} />
          <Route exact path="/contactos" element={<Contacto />} />
          <Route exact path='/recordarpassword' element={<RecordarPass/> }/>              
          <Route exact path="/editempleado/:id" element={<EditEmpleado />} /> 
        
          
          
         

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

