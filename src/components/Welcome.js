import React from "react";

const Welcome = () => {
  return (
    <div>
      <div className="col-xxl-12 mt-20 mb-10">
        <div className="card banner-feature--18 d-flex">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-6">
                <div className="card-body px-25">
                  <h1 className="banner-feature__heading color-white">
                    Bienvenido a Sistema de Manejo de Empleados
                  </h1>
                  <p className="banner-feature__para color-white">
                    Sistema de Manejo de Información de General para Manejo de Empleados
                  </p>
                  <div className="d-flex justify-content-sm-start justify-content-center">
                   

                   <a href="https://bemantis.com/informacion" target="_blank" className="banner-feature__btn btn btn-primary color-white btn-md px-20 radius-xs fs-15" role="button">Ver más</a>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="banner-feature__shape px-md-25 px-25 py-sm-0 pt-15 pb-30 d-flex justify-content-sm-end justify-content-center">
                  <img src="/img/dashboard.png" alt="img" className="svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
