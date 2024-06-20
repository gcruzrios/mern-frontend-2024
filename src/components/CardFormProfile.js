import React from "react";

const CardFormProfile = () => {
  return (
    <div>
      <div className="card card-Vertical card-default card-md mb-4">
        <div className="card-header">
          <h6>Usuario del SIPAM de la OBS </h6>
        </div>
        <div className="card-body py-md-30">
          <form>
            <div className="row">
              <div className="col-md-3 mb-25">
                <input
                  type="text"
                  className="form-control ih-medium ip-gray radius-xs b-light px-15"
                  placeholder="Número de Cédula"
                  id="identificacion"
                  value="NúMERO CEDULA"
                />
              </div>
              <div className="col-md-9 mb-25">
                <input
                  type="text"
                  className="form-control ih-medium ip-gray radius-xs b-light px-15"
                  placeholder="Nombre"
                  id="nombre"
                  value={nombreUsuario}
                />
              </div>

              <div className="col-md-4 mb-25">
                <input
                  type="email"
                  className="form-control ih-medium ip-gray radius-xs b-light px-15"
                  placeholder="Correo Electrónico"
                  id="correo"
                  value={correoUsuario}
                />
              </div>

              <div className="col-md-4 mb-25">
                <input
                  type="password"
                  className="form-control ih-medium ip-gray radius-xs b-light px-15"
                  placeholder="Contraseña"
                  id="password"
                  value=""
                />
              </div>

              <div className="col-md-4 mb-25">
                <input
                  type="password"
                  className="form-control ih-medium ip-gray radius-xs b-light px-15"
                  placeholder="Confirmar Password"
                  id="cpassword"
                  value=""
                />
              </div>

              <div className="col-md-6">
                <div className="layout-button mt-0">
                  <button
                    type="button"
                    className="btn btn-default btn-squared btn-light px-20 "
                  >
                    cancelar
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary btn-default btn-squared px-30"
                  >
                    Guardar
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      {/* <!-- ends: .card --> */}
    </div>
  );
};

export default CardFormProfile;
