import React from "react";

const ModalChangePassword = () => {
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
                      placeholder="Código Interno OBS"
                    />
                  </div>
                  <div class="form-group mb-20">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Password"
                    />
                  </div>
                  <div class="form-group mb-20">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Confirmar Password"
                    />
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

export default ModalChangePassword;

