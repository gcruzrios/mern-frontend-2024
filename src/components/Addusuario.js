import React from "react";

const Addusuario = () => {
  return (
    <div>
      <div className="dm-page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumb-main">
                <h4 className="text-capitalize breadcrumb-title">
                  Agregar Usuario SIPAM
                </h4>
                <div className="breadcrumb-action justify-content-center flex-wrap">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="#">
                          <i className="uil uil-estate"></i>Inicio
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Agregar Usuario
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="card card-default card-md mb-4">
                <div className="card-header">
                  <h6>Agregar Usuario</h6>
                </div>
                <div className="card-body">
                  <div className="basic-form-wrapper">
                    <form action="#">
                      <div className="form-basic">
                        <div className="form-group mb-25">
                          <label>Dirección de Email</label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            name="username"
                            placeholder="name@example.com"
                          />
                        </div>
                        <div className="form-group mb-25">
                          <label>Organizacion</label>
                          <input
                            className="form-control form-control-lg"
                            type="text"
                            name="username"
                            placeholder="Nombre Organización"
                          />
                        </div>
                        <div class="form-group">
                          <label
                            for="exampleFormControlSelect1"
                            class="il-gray fs-14 fw-500 align-center mb-10"
                          >
                            Rol Usuario
                          </label>
                          <select
                            class="form-control px-15"
                            id="exampleFormControlSelect1"
                          >
                            <option>Funcionario CONAPAM</option>
                            <option>Coordinadores</option>
                            <option>Externos</option>
                           </select>
                        </div>
                        <div className="form-group mb-25">
                          <label for="password-field">Password</label>
                          <div className="position-relative">
                            <input
                              id="password-field"
                              type="password"
                              className="form-control form-control-lg"
                              name="password"
                              value="secret"
                            />
                            <span className="uil uil-eye-slash text-lighten fs-15 field-icon toggle-password2"></span>
                          </div>
                        </div>
                        <div className="form-group mb-25">
                          <label for="password-field">
                            {" "}
                            Confirmar Password
                          </label>
                          <div className="position-relative">
                            <input
                              id="password-field"
                              type="password"
                              className="form-control form-control-lg"
                              name="password"
                              value="secret"
                            />
                            <span className="uil uil-eye-slash text-lighten fs-15 field-icon toggle-password2"></span>
                          </div>
                        </div>
                        <div className="form-group mb-0">
                          <button
                            type="submit"
                            className="btn btn-lg btn-primary btn-submit"
                          >
                            Guardar
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* <!-- ends: .card --> */}
            </div>
            {/* <!-- ends: .col-lg-6 --> */}
          </div>
        </div>
      </div>
      {/* <!-- ends: .dm-page-content --> */}
    </div>
  );
};

export default Addusuario;

