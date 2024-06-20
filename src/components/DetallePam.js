import React from "react";
import Welcome from "./Welcome";
import Listobs from "./Listobs";
import Listpamxobs from "./Listpamxobs";
import Datospam from "./DatosPam";
import TitleContent from "./TitleContent";
const DetallePam = () => {
  return (
    <div>
      <div className="crm mb-25">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex align-items-center user-member__title mb-30 mt-30">
                <h4 className="text-capitalize">Detalle PAM</h4>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-12">
               <Datospam /> 
            </div>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default DetallePam;
