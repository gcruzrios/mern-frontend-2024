import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>

      
i
      <div className="sidebar__menu-group">
        <ul className="sidebar_nav">
          <li className="has-child open">
            <a href="#" className="active">
              <span className="nav-icon uil uil-create-dashboard"></span>
              <span className="menu-text">Dashboard</span>
              <span className="toggle-icon"></span>
            </a>
            <ul>
              <li className="active">
              <Link  className="menu-text" to={`/index`}>  Inicio </Link>
              </li>
            </ul>
          </li>
         

          
            <li className="has-child">
              <a href="#" className="">
                <span className="nav-icon uil uil-users-alt"></span>
                <span className="menu-text">Empleados</span>
                <span className="toggle-icon"></span>
              </a>
              <ul>
                <li className="">
                  <Link  className="menu-text" to={`/index`}>  Lista de Empleados</Link>
                </li>
                <li className="">
                  <Link  className="menu-text" to={`/agregarempleado`}>  Agregar Empleado</Link>
                </li>
               
              </ul>
            </li>
            {/* <li className="has-child">
              <a href="#" className="">
                <span className="nav-icon uil uil-at"></span>
                <span className="menu-text">OBS Contactos</span>
                <span className="toggle-icon"></span>
              </a>
              <ul>
               
                <li className="">
                  <Link  className="menu-text" to={`/contactosobs`}>  Lista Contactos OBS</Link>
           
                </li>
                <li className="">
                   <Link  className="menu-text" to={`/agregaruser`}> Agregar Contacto OBS</Link>
                  
                </li>
              </ul>
            </li>
            <li className="has-child">
              <a href="#" className="">
                <span className="nav-icon uil uil-user"></span>
                <span className="menu-text">Soporte</span>
                <span className="toggle-icon"></span>
              </a>
              <ul>
                <li className="">
                  <Link  className="menu-text" to={`/solicitudes`}> Lista de Solicitudes</Link>
                </li>
                <li className="">
                  <Link  className="menu-text" to={`/agregarsolicitud`}> Agregar Solicitud</Link>
                  
                </li>
              </ul>
            </li> */}
            {/* <li className="menu-title mt-10">
              <span>Ayuda</span>
            </li>
            <li className="has-child">
              <a href="/ayuda" className="">
                <span className="nav-icon uil uil-database"></span>
                <span className="menu-text">Lista de Temas</span>
                <span className="toggle-icon"></span>
              </a>
              <ul>
                <li className="">
                  <Link  className="menu-text" to={`/ayuda`}>Ver todo</Link>
                 
                </li>
                
              </ul>
            </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

