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
import Listpam from "./pages/Listpam";
import Addpam from "./pages/Addpam";
import Detallepam from "./pages/Detallepam";
import NotFound from "./pages/Error404";
import Dashboard from "./pages/Dashboard";
import GoogleMapsPam from "./components/GoogleMapsPam";
import AcercaDe from "./pages/AcercaDe";
import Contacto from "./pages/Contacto";
import Detalleobs from "./pages/Detalleobs";
import ListSolicitudes from "./pages/ListSolicitudes";
import ListUsers from "./pages/ListUsers";
import ListContactos from "./pages/ListContactos";
import ListAlertas from "./pages/ListAlertas";
import Ayuda from "./pages/Ayuda";
import Addobs from "./pages/Addobs";
import ConsultaPam from "./pages/Consultapam";
import ListaModalidadObs from "./pages/ListaModalidadObs";
import ListObs from "./pages/ListObs";
import ListaFactores from "./pages/ListaFactores";
import ListaFactoresRc from "./pages/ListaFactoresRc";
import Calendario from "./pages/Calendario";
import Adduser from "./pages/Adduser";
import Configuracion from "./pages/Configuracion";
import Profile from "./pages/Profile";
import RecordarPass from "./pages/RecodarPass";
import Addsolicitud from "./pages/Addsolicitud";
import IndiceInec from "./pages/IndiceInec";



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
          
          
          {/* <Route exact path="/listpam" element={<Listpam />} /> */}
          {/* <Route exact path="/listpam" element={estaAutenticado() ? <Listpam /> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/listobs' element={estaAutenticado() ? <ListObs /> : <Navigate to="/" /> } /> */}
          {/* <Route exact path='/listpam/:id' element={estaAutenticado() ? <Listpam /> : <Navigate to="/" /> } /> */}
          {/* <Route path="/agregarpam" element={<Addpam />} /> */}
          {/* <Route exact path="/agregarpam" element={estaAutenticado() ? <Addpam /> : <Navigate to="/" />}/> */}
          {/* <Route exact path="/agregarobs" element={estaAutenticado() ? <Addobs /> : <Navigate to="/" />}/> */}
          {/* <Route exact path="/agregaruser" element={estaAutenticado() ? <Adduser /> : <Navigate to="/" />}/> */}
          {/* <Route exact path="/agregarsolicitud" element={estaAutenticado() ? <Addsolicitud /> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/detallepam/:id' element={estaAutenticado() ? <Detallepam /> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/detalleobs/:id' element={estaAutenticado() ? <Detalleobs /> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/googlemaps/:id' element={estaAutenticado() ? <GoogleMapsPam/> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/alertas' element={estaAutenticado() ? <ListAlertas /> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/usuarios' element={estaAutenticado() ? <ListUsers /> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/contactosobs' element={estaAutenticado() ? <ListContactos /> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/solicitudes' element={estaAutenticado() ? <ListSolicitudes/> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/consultapam' element={estaAutenticado() ? <ConsultaPam/> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/modalidadesobs' element={estaAutenticado() ? <ListaModalidadObs/> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/factores' element={estaAutenticado() ? <ListaFactores/> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/factoresrc' element={estaAutenticado() ? <ListaFactoresRc/> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/calendario' element={estaAutenticado() ? <Calendario/> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/ayuda' element={estaAutenticado() ? <Ayuda/> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/profile' element={estaAutenticado() ? <Profile/> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/settings' element={estaAutenticado() ? <Configuracion/> : <Navigate to="/" />}/> */}
          {/* <Route exact path='/indiceinec' element={estaAutenticado() ? <IndiceInec/> : <Navigate to="/" />}/> */}
          
         

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

