
import React, { useEffect, useState } from "react";

import Swal from 'sweetalert2';
import { Link } from "react-router-dom";

import ModalAddpam from "./ModalAddpam";
import Paginator from "./Paginator";

import SearchNameObs from "./SearchNameObs";

import SearchNamePam from "./SearchNamePam";
import Tablapam from "./Tablapam";
import TablapamxObs from "./TablapamxObs";

import axios from "axios";


const ListpamObs = () => {

  
  const Token = localStorage.getItem("Token");

  const NombreOrganizacion = localStorage.getItem("organizacionUsuario");
  const idOrganizacion = localStorage.getItem("idOrganizacion");
  //console.log(Token);
  const [data, setData] = useState([]);
  const idOBS = {idOBS:idOrganizacion};
  
  const peticionGet = async () => {
    //const idUsuario = localStorage.getItem('idUsuario');

    await axios
      .post("/wsSIPAM/GetObsPorID", idOBS, {
        headers: { Authorization: "Bearer " + Token },
      })
      .then((response) => {
        console.log(response.data.Resultado);
        setData(response.data.Resultado);
      });
  };
  useEffect(() => {
    peticionGet();
  }, []);



  return (
    <>
      <div className="col-lg-12">
        <div className="breadcrumb-main user-member justify-content-sm-between ">
          <SearchNameObs />
          {/* <div className="action-btn">
            <a
              href="#"
              className="btn px-15 btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#new-member"
            >
              <i className="las la-plus fs-16"></i>Agregar PAM
            </a>
            <ModalAddpam />
          </div> */}
          <h3> Modalidades activas de la OBS </h3>
          <select
            name="select-option2"
            id="select-option2"
            class="form-control "
          > {data.map(obs=>(
            <option value="01">{obs.modalidadAtencion}</option>
           
            ))}
          </select>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="userDatatable global-shadow border-light-0 p-30 bg-white radius-xl w-100 mb-30">
          <div className="table-responsive">
            {/* <Tablapam />  */}
            <TablapamxObs />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListpamObs;

