import React from "react";
import { Link } from "react-router-dom";

const SidebarBk = () => {
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
         

          <li className="menu-title mt-30">
              <span>Operaciones</span>
            </li>
            {/* <li className="has-child">
              <a href="#" className="">
                <span className="nav-icon uil uil-envelope"></span>
                <span className="menu-text">Alertas</span>
                <span className="toggle-icon"></span>
              </a>
              <ul>
                <li className="">
                  <Link  className="menu-text" to={`/alertas`}>  Buzón de Entrada </Link>
            
                </li>
               
              </ul>
            </li> */}

            <li className="has-child">
              <a href="#" className="">
                <span className="nav-icon uil uil-folder"></span>
                <span className="menu-text">Seguimiento</span>
                <span className="toggle-icon"></span>
              </a>
              <ul>
                <li className="">
                  <Link  className="menu-text" to={`/listobs`}>  Lista de OBS</Link>
                 
                </li>
                <li className="">
                  <Link  className="menu-text" to={`/modalidadesobs`}>  Lista de Beneficios OBS </Link>
                  
                </li> 
                <li className="">
                  <Link  className="menu-text" to={`/factores`}>  Lista de Montos Aprobados (H-CD-A) </Link>
                  
                </li> 
                <li className="">
                  <Link  className="menu-text" to={`/factoresrc`}>  Lista de Montos Aprobados (RC) </Link>
                  
                </li> 
                <li className="">
                  <Link  className="menu-text" to={`/indiceinec`}>  Indice pobreza INEC </Link>
                  
                </li> 
                <li className="">
                  <Link  className="menu-text" to={`/agregarobs`}>  Agregar OBS / GL </Link>
                 
                </li>
                <li className="">
                  <Link  className="menu-text" to={`/consultapam`}>  Consultar PAM </Link>
                 
                </li>
                {/* <li className="">
                  <Link  className="menu-text" to={`/agregarpam`}>  Agregar PAM </Link>
                 
                </li> */}
                
              </ul>
            </li>
            <li className="has-child">
              <a href="#" className="">
                <span className="nav-icon uil uil-calendar-alt"></span>
                <span className="menu-text">Calendario</span>
              </a>
              <ul>
                <li className="">
                  <Link  className="menu-text" to={`/calendario`}>  Eventos programados</Link>
                 
                </li>
               
                
              </ul>
            </li>
            <li className="has-child">
              <a href="#" className="">
                <span className="nav-icon uil uil-users-alt"></span>
                <span className="menu-text">Usuarios</span>
                <span className="toggle-icon"></span>
              </a>
              <ul>
                <li className="">
                  <Link  className="menu-text" to={`/usuarios`}>  Lista de Usuarios</Link>
                </li>
                <li className="">
                  <Link  className="menu-text" to={`/agregaruser`}>  Agregar Usuarios</Link>
                </li>
               
              </ul>
            </li>
            <li className="has-child">
              <a href="#" className="">
                <span className="nav-icon uil uil-at"></span>
                <span className="menu-text">OBS Contactos</span>
                <span className="toggle-icon"></span>
              </a>
              <ul>
                {/* <li className="">
                           <a href="contact-2.html">Contact
                              Grid</a>
                        </li> */}
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
            </li>
            <li className="menu-title mt-10">
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
            </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarBk;

