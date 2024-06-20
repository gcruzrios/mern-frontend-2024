import React from "react";
import ModalAddEmpleado from "./ModalAddEmpleado";
import Paginator from "./Paginator";

import Tablaobs from "./Tablaobs";
import TablaEmpleados from "./TablaEmpleados";

const ListaEmpleados = () => {
  return (
    <>
      <div className="col-lg-12">
        <div className="breadcrumb-main user-member justify-content-sm-between ">
          
          <div>
            <div className=" d-flex flex-wrap justify-content-center breadcrumb-main__wrapper">
              <div className="d-flex align-items-center user-member__title justify-content-center me-sm-25">
                <h4 className="text-capitalize fw-500 breadcrumb-title">
                  Listado de empleados
                </h4>
                <span className="sub-title ms-sm-25 ps-sm-25">INICIO</span>
              </div>

              <form
                action="/"
                className="d-flex align-items-center user-member__form my-sm-0 my-2"
              >
                <img src="/img/svg/search.svg" alt="search" className="svg" />
                <input
                  className="form-control me-sm-2 border-0 box-shadow-none"
                  type="search"
                  placeholder="Buscar por Nombre"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
          <div className="action-btn">
            <a
              href="#"
              className="btn px-15 btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#new-member"
            >
              <i className="las la-plus fs-16"></i>Agregar Empleado
            </a>
            <ModalAddEmpleado />
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="userDatatable global-shadow border-light-0 p-30 bg-white radius-xl w-100 mb-30">
          <div className="table-responsive">
            <TablaEmpleados />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListaEmpleados;
