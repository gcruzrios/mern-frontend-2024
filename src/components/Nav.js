//import React from 'react'
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const idUsuario = localStorage.getItem('idUsuario');
  const nombreUsuario = localStorage.getItem('nombre');

 
  

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setMenu(true);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/";
  };






  return (
    <div>
      <ul className="navbar-right__menu">
        <li className="nav-search">
          <a href="#" className="search-toggle">
            <i className="uil uil-search"></i>
            <i className="uil uil-times"></i>
          </a>
          <form action="/" className="search-form-topMenu">
            <span className="search-icon uil uil-search"></span>
            <input
              className="form-control me-sm-2 box-shadow-none"
              type="search"
              placeholder="Search..."
              aria-label="Search"
            />
          </form>
        </li>
        {/* <!-- ends: .nav-flag-select --> */}

        {/* <!-- ends: .nav-notification --> */}
        <li className="nav-settings">
          <div className="dropdown-custom">
            <a href="" className="nav-item-toggle">
              <img src="/img/setting.png" alt="setting" />
            </a>
            <div className="dropdown-parent-wrapper">
              <div className="dropdown-wrapper dropdown-wrapper--large">
                <ul className="list-settings">
                  <li className="d-flex">
                    <div className="me-3">
                      <img src="/img/mail.png" alt="" />
                    </div>
                    <div className="flex-grow-1">
                      <h6>
                        <a href="" className="stretched-link">
                          Todas las caracteristicas
                        </a>
                      </h6>
                      <p> </p>
                    </div>
                  </li>
                 
                  
                  
                  
                  <li className="d-flex">
                    <div className="me-3">
                      <img src="/img/microphone.png" alt="" />
                    </div>
                    <div className="flex-grow-1">
                      <h6>
                        <a href="" className="stretched-link">
                          Hacer diagramas
                        </a>
                      </h6>
                      <p>Flujos de trabajo</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </li>
        {/* <!-- ends: .nav-support --> */}

        <li className="nav-author">
          <div className="dropdown-custom">
            <a href="" className="nav-item-toggle">
              <img src="/img/user-mas02.png" alt="" className="rounded-circle" />
              <span className="nav-item__title">
                {nombreUsuario}<i className="las la-angle-down nav-item__arrow"></i>
              </span>
            </a>
            <div className="dropdown-parent-wrapper">
              <div className="dropdown-wrapper">
                <div className="nav-author__info">
                  <div className="author-img">
                    <img
                      src="/img/user-mas02.png"
                      alt=""
                      className="rounded-circle"
                    />
                  </div>
                  <div>
                    <h6>{nombreUsuario}</h6>
                    
                  </div>
                </div>
                <div className="nav-author__options">
                  <ul>
                    <li>
                      <a href="/profile">
                        <i className="uil uil-user"></i> Perfil Usuario
                      </a>
                    </li>
                    <li>
                      <a href="/settings">
                        <i className="uil uil-setting"></i>
                        Configuración
                      </a>
                    </li>

                    <li>
                      <a href="/ayuda">
                        <i className="uil uil-bell"></i> Ayuda
                      </a>
                    </li>
                  </ul>
                  <Link
                    className="nav-author__signout"
                    to="/"
                    onClick={() => logout()}
                  >
                    <i className="uil uil-sign-out-alt"></i> Salir
                  </Link>
                  {/* <a href="index.html" className="nav-author__signout">
                                  Sign Out</a> */}
                </div>
              </div>
              {/* <!-- ends: .dropdown-wrapper --> */}
            </div>
          </div>
        </li>
        {/* <!-- ends: .nav-author --> */}
      </ul>
      {/* <!-- ends: .navbar-right__menu --> */}
      <div className="navbar-right__mobileAction d-md-none">
        <a href="#" className="btn-search">
          <img
            src="/img/svg/search.svg"
            alt="search"
            className="svg feather-search"
          />
          <img src="/img/svg/x.svg" alt="x" className="svg feather-x" />
        </a>
        <a href="#" className="btn-author-action">
          <img
            className="svg"
            src="/img/svg/more-vertical.svg"
            alt="more-vertical"
          />
        </a>
      </div>
    </div>
  );
};

export default Nav;
