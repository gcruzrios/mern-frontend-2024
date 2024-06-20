import React from "react";

const CardFormProfileNew = () => {
  return (
    <div>
      <div class="col-lg-12">
        <div class="card card-default card-md mb-4">
          <div class="card-header">
            <h6>Input Groups</h6>
          </div>
          <div class="card-body py-md-30">
            <form action="#">
              <div class="form-group row mb-n25">
                <div class="col-md-6 mb-25">
                  <div class="with-icon">
                    <span class="la-user lar color-light"></span>
                    <input
                      type="text"
                      class="form-control  ih-medium ip-lightradius-xs b-light"
                      id="inputNameIcon1"
                      placeholder="Duran Clayton"
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-25">
                  <div class="with-icon">
                    <span class="las la-envelope color-light"></span>
                    <input
                      type="text"
                      class="form-control  ih-medium ip-lightradius-xs b-light"
                      id="inputNameIcon2"
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-25">
                  <div class="with-icon">
                    <span class="las la-map-marker color-light"></span>
                    <input
                      type="text"
                      class="form-control  ih-medium ip-lightradius-xs b-light"
                      id="inputNameIcon3"
                      placeholder="Location"
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-25">
                  <div class="with-icon">
                    <span class="la-lock las color-light"></span>
                    <input
                      type="text"
                      class="form-control  ih-medium ip-lightradius-xs b-light"
                      id="inputNameIcon4"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-25">
                  <div class="with-icon">
                    <span class="las la-credit-card color-light"></span>
                    <input
                      type="text"
                      class="form-control  ih-medium ip-lightradius-xs b-light"
                      id="inputNameIcon5"
                      placeholder="Payment Method"
                    />
                  </div>
                </div>
                <div class="col-md-6 mb-25">
                  <div class="with-icon">
                    <span class="la-phone las color-light"></span>
                    <input
                      type="text"
                      class="form-control  ih-medium ip-lightradius-xs b-light"
                      id="inputNameIcon6"
                      placeholder="Phone Number"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFormProfileNew;
