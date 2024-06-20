import React from "react";

const Welcome = () => {
  return (
    <div>
      <div class="col-xxl-12 mt-20 mb-10">
        <div class="card banner-feature--18 d-flex">
          <div class="container-fluid">
            <div class="row">
              <div class="col-xl-6">
                <div class="card-body px-25">
                  <h1 class="banner-feature__heading color-white">
                    Bienvenido a Sistema de Manejo de Empleados
                  </h1>
                  <p class="banner-feature__para color-white">
                    Sistema de Manejo de Información de General para Manejo de Empleados
                  </p>
                  <div class="d-flex justify-content-sm-start justify-content-center">
                   

                   <a href="https://bemantis.com/informacion" target="_blank" class="banner-feature__btn btn btn-primary color-white btn-md px-20 radius-xs fs-15" role="button">Ver más</a>
                  </div>
                </div>
              </div>
              <div class="col-xl-6">
                <div class="banner-feature__shape px-md-25 px-25 py-sm-0 pt-15 pb-30 d-flex justify-content-sm-end justify-content-center">
                  <img src="/img/dashboard.png" alt="img" class="svg" />
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
