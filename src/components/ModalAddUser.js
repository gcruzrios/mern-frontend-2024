import React from "react";

const ModalAddUser = () => {
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
                Información OBS / GL
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
                <form>
                   <div class="form-group mb-20">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombre Completo"
                    />
                  </div>
                  <div class="form-group mb-20">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Correo"
                    />
                  </div>
                  <div class="form-group mb-20">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Organización"
                    />
                  </div>
                  <div class="form-group mb-20">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Organización"
                    />
                  </div>
                  <div class="form-group mb-20">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Contraseña"
                    />
                  </div>
                  <div class="form-group mb-20">
                    <input
                      type="password"
                      class="form-control"
                      placeholder="Confirmación de Contraseña"
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
                              id="check-grp-1"
                              checked
                            />
                            <label
                              for="check-grp-1"
                              class="fs-14 color-light strikethrough"
                            >
                              Activo
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
                              Inactiva
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
                              Bloqueada
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
      {/* <!-- Modal --> */}
    </div>
  );
};

export default ModalAddUser;

