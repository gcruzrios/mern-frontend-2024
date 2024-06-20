import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const ModalAddpam = () => {
  const [cedula, setCedula] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    CEDULA: "",
    FECHACADUC: "",
    NOMBRE: "",
    PRIMER_APELLIDO: "",
    SEGUNDO_APELLIDO: "",
  });

  const getDataPam = async (e) => {
    e.preventDefault();

    // {
    //   "cedula": "109120518"
    // }

    const cedula_pam = { cedula: cedula };

    const Token = localStorage.getItem("Token");
    console.log(Token);
    console.log(cedula);

    await axios
      .post("/wsSIPAM/GetPersonaPadron", cedula_pam, {
        headers: { Authorization: "Bearer " + Token },
      })

      .then((response) => {
        setMensaje(response.data.CodigoResultado);
        console.log(mensaje);

        console.log(response.data.Resultado);

        //   setData(response.data.Resultado);
        //    console.log(data);
        //
        setUsuarioSeleccionado(response.data.Resultado);
        document.getElementById("identificacion").value =
          usuarioSeleccionado.CEDULA;
        document.getElementById("nombre").value = usuarioSeleccionado.NOMBRE;
        document.getElementById("papellido").value =
          usuarioSeleccionado.PRIMER_APELLIDO;
        document.getElementById("sapellido").value =
          usuarioSeleccionado.SEGUNDO_APELLIDO;
      });

    console.log(usuarioSeleccionado);

    if (mensaje !== "200") {
      Swal.fire({
        icon: "error",
        title: "No aparece en BD de TSE",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
    }
  };

  useEffect(() => {
    //getDataPam();
  }, []);

  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        class="modal fade new-member "
        id="new-member"
        role="dialog"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content  radius-xl">
            <div class="modal-header">
              <h6 class="modal-title fw-500" id="staticBackdropLabel">
                Información PAM (PERSONA ADULTA MAYOR)
              </h6>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src="/img/svg/x.svg" alt="x" class="svg" />
              </button>
            </div>
            <div class="modal-body">
              <div class="new-member-modal">
                <div className="row">
                  <form>
                    <div class="d-flex">
                      <div class="project-task-list__left d-flex align-items-center">
                        <div className="mb-3">
                          <div class="radio-theme-default custom-radio d-flex me-50 pe-10 ">
                            <input
                              class="radio"
                              type="radio"
                              name="radio-default"
                              value="0"
                              id="radio-un4"
                              checked
                            />
                            <label for="radio-un4">
                              <span class="radio-text">Número Cédula TSE</span>
                            </label>
                          </div>
                        </div>
                        <div className="mb-3">
                          <div className="radio-theme-default custom-radio d-flex me-50 pe-10 ">
                            <input
                              className="radio"
                              type="radio"
                              name="radio-default"
                              value="1"
                              id="radio-un2"
                            />
                            <label for="radio-un2">
                              <span className="radio-text">Número DIMEX </span>
                            </label>
                          </div>
                        </div>
                        {/* <div className="mb-3">
                          <div className="radio-theme-default custom-radio  ">
                            <input
                              className="radio"
                              type="radio"
                              name="radio-default"
                              value="1"
                              id="radio-un3"
                            />
                            <label for="radio-un3">
                              <span className="radio-text">
                                Código CONAPAM{" "}
                              </span>
                            </label>
                          </div>
                        </div> */}
                      </div>
                    </div>
                    <div className="mb-3"></div>
                    {/* <form onSubmit={ getDataPam }> */}
                    {/* <div class="col-md-6 form-group mb-20">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Código Interno CONAPAM"
                    />
                  </div>
                  <div class="col-md-6 form-group mb-20">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Cédula Dimex"
                    />
                  </div> */}
                    <div class="col-md-6 form-group mb-20">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Cédula con ceros sin guiones"
                        id="cedula"
                        name="cedula"
                        onChange={(e)=>setCedula(e.target.value)}
                      />
                      <div className="col-sm-4 ">
                        <div className="layout-button mt-10 ">
                          <button
                            type="submit"
                            onSubmit={getDataPam} 
                            className="btn btn-primary btn-default btn-squared px-30"
                          >
                            Consultar
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* </form> */}
                    <div class="form-group mb-20">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nombre"
                        id="nombre"
                        value={usuarioSeleccionado.nombre}
                      />
                    </div>
                    <div class="form-group mb-20">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Primer Apellido"
                        id="papellido"
                        value={usuarioSeleccionado.primerApellido}
                      />
                    </div>
                    <div class="form-group mb-20">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Segundo Apellido"
                        id="sapellido"
                        value={usuarioSeleccionado.segundoApellido}
                      />
                    </div>

                    <div class="form-group textarea-group">
                      <label class="mb-15">Estado</label>
                      <div class="d-flex">
                        <div class="project-task-list__left d-flex align-items-center">
                          <div class="checkbox-group d-flex me-50 pe-10">
                            <div class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                              <input
                                class="checkbox"
                                type="checkbox"
                                id="check-grp-0"
                                checked
                              />
                              <label
                                for="check-grp-1"
                                class="fs-14 color-light strikethrough"
                              >
                                Temporal
                              </label>
                            </div>
                          </div>
                          <div class="checkbox-group d-flex me-50 pe-10">
                            <div class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                              <input
                                class="checkbox"
                                type="checkbox"
                                id="check-grp-1"
                              />
                              <label
                                for="check-grp-1"
                                class="fs-14 color-light strikethrough"
                              >
                                Activo(a)
                              </label>
                            </div>
                          </div>
                          <div class="checkbox-group d-flex me-50 pe-10">
                            <div class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                              <input
                                class="checkbox"
                                type="checkbox"
                                id="check-grp-2"
                              />
                              <label
                                for="check-grp-2"
                                class="fs-14 color-light strikethrough"
                              >
                                Inactivo(a)
                              </label>
                            </div>
                          </div>
                          <div class="checkbox-group d-flex">
                            <div class="checkbox-theme-default custom-checkbox checkbox-group__single d-flex">
                              <input
                                class="checkbox"
                                type="checkbox"
                                id="check-grp-3"
                              />
                              <label
                                for="check-grp-3"
                                class="fs-14 color-light strikethrough"
                              >
                                Bloqueado
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="d-flex new-member-calendar">
                      <div class="form-group w-100 me-sm-15 form-group-calender">
                        <label for="datepicker">Fecha Registro</label>
                        <div class="position-relative">
                          <input
                            type="text"
                            class="form-control"
                            id="datepicker"
                            placeholder="mm/dd/yyyy"
                          />
                          <a href="#">
                            <img
                              class="svg"
                              src="/img/svg/chevron-right.svg"
                              alt="chevron-right.svg"
                            />
                          </a>
                        </div>
                      </div>
                      <div class="form-group w-100 form-group-calender">
                        <label for="datepicker2">Fecha Renovación</label>
                        <div class="position-relative">
                          <input
                            type="text"
                            class="form-control"
                            id="datepicker2"
                            placeholder="mm/dd/yyyy"
                          />
                          <a href="#">
                            <img
                              class="svg"
                              src="/img/svg/chevron-right.svg"
                              alt="chevron-right.svg"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="button-group d-flex pt-25">
                      <button class="btn btn-primary btn-default btn-squared text-capitalize">
                        Agregar
                      </button>

                      <button
                        type="button"
                        class="btn btn-light btn-default btn-squared fw-400 text-capitalize b-light color-light"
                        data-bs-dismiss="modal"
                      >
                        Cancelar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
    </div>
  );
};

export default ModalAddpam;

