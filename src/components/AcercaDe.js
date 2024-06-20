import React from "react";
import { Link } from "react-router-dom";
const AcercaDe = () => {
  return (
    <div>
      <div className="col-lg-12">
        <div className="breadcrumb-main user-member justify-content-sm-between "></div>
      </div>
      <div className="col-lg-12">
        <div className="userDatatable global-shadow border-light-0 p-30 bg-white radius-xl w-100 mb-30">
          <div className="table-responsive">
            <h5 className="fw-500">Acerca de SISTEMA</h5>
            
            <div className="content-center mt-30">
              <Link
                to={`/index`}
                className="btn btn-primary btn-default btn-squared px-30"
              >
                ACERCA DE SISTEMA Versión 2.0.0

                El sistema de Información de Empleados


                Regresar al inicio{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcercaDe;

