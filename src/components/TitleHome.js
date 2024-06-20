import React from "react";

const TitleHome = () => {
  return (
    <div>
      <div class="breadcrumb-main">
        <h4 class="text-capitalize breadcrumb-title">Estadísticas</h4>
        <div class="breadcrumb-action justify-content-center flex-wrap">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <a href="#">
                  <i class="uil uil-estate"></i>Dashboard
                </a>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                SIPAM 2.0
              </li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default TitleHome;
