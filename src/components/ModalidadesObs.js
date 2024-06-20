import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import TablaModObs from "./TablaModObs";

const ModalidadesObs = () => {

  
  
  const [cedula, setCedula] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    CEDULA: "",
    FECHACADUC: "",
    NOMBRE: "",
    PRIMER_APELLIDO: "",
    SEGUNDO_APELLIDO: ""
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
           document.getElementById("identificacion").value = usuarioSeleccionado.CEDULA;
           document.getElementById("nombre").value = usuarioSeleccionado.NOMBRE;
           document.getElementById("papellido").value = usuarioSeleccionado.PRIMER_APELLIDO;
           document.getElementById("sapellido").value = usuarioSeleccionado.SEGUNDO_APELLIDO;
      });

    console.log(usuarioSeleccionado);

    

    if (mensaje !== "200") {
      Swal.fire({
        icon: "error",
        title:"No aparece en BD de TSE",
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-main">
              <h4 className="text-capitalize breadcrumb-title">
                Lista de OBS x Montos x Modalidad
              </h4>
              <div className="breadcrumb-action justify-content-center flex-wrap">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/index">
                        <i className="uil uil-estate"></i>Inicio
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Lista Modalidades 
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-horizontal card-default card-md mb-4">
              <div className="card-header">
                <h6>Lista de Beneficios por OBS</h6>
              </div>
              <div className="card-body py-md-30">
                <div className="horizontal-form">
                  <TablaModObs/>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalidadesObs;
