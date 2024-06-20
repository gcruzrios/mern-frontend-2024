import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

const ConsultaPam = () => {

  
  
  const [cedula, setCedula] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    Identificacion: "",
    Nombre: "",
    Apellido1: "",
    Apellido2: "",
    Fecha_Caducidad: "",
    Fecha_Defuncion: "",
    Fecha_Nacimiento: "",
    Genero: "",
    Indice_Estado_Civil: "",
    Nacionalidad: "COSTARRICENSE",
    indicadorFallecido: "0",
    Edad: ""
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
      .post("/wsSIPAM/ConsultarWSTSE", cedula_pam, {
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
           document.getElementById("identificacion").value = usuarioSeleccionado.Identificacion;
           document.getElementById("nombre").value = usuarioSeleccionado.Nombre;
           document.getElementById("papellido").value = usuarioSeleccionado.Apellido1;
           document.getElementById("sapellido").value = usuarioSeleccionado.Apellido2;
           document.getElementById("Nacionlidad").value = usuarioSeleccionado.Nacionalidad;
           document.getElementById("Indice_Estado_Civil").value = usuarioSeleccionado.Indice_Estado_Civil;
           document.getElementById("Fecha_Nacimiento").value = usuarioSeleccionado.Fecha_Nacimiento;
           document.getElementById("Edad").value = usuarioSeleccionado.Edad;
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
                Consulta de Nueva PAM para validación
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
                      Consultas PAM
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
                <h6>Consulta PAM por Cédula / Dimex</h6>
              </div>
              <div className="card-body py-md-30">
                <div className="horizontal-form">
                  {/* <form action="#"> */}
                  <form onSubmit={ getDataPam }>
                  <div className="mb-3">
                    <div class="radio-theme-default custom-radio ">
                      <input
                        class="radio"
                        type="radio"
                        name="radio-default"
                        value="0"
                        id="radio-un4"
                        checked
                      />
                      <label for="radio-un4">
                        <span class="radio-text">Número de Cédula</span>
                      </label>
                    </div>
                    <div className="radio-theme-default custom-radio ">
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
                  <div className="form-group row mb-25">
                    <div className="col-sm-3 d-flex aling-items-center ">
                      <label
                        for="inputName"
                        className=" col-form-label color-dark fs-14 fw-500 align-center"
                      >
                        Número de Cédula / DIMEX
                      </label>
                    </div>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        id="cedula"
                        name="cedula"
                        onChange={(e)=>setCedula(e.target.value)}
                        placeholder="Número de cédula con ceros sin guiones"
                      />
                    </div>
                    <div className="col-sm-4">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        id="cedula"
                        name="cedula"
                       
                        placeholder="Número de cédula con ceros sin guiones"
                      />
                    </div>
                  </div>

                  <div className="form-group row mb-0">
                    <div className="col-sm-4">
                      <div className="layout-button mt-25 ">
                        <button
                          type="submit"
                          className="btn btn-primary btn-default btn-squared px-30"
                          
                        >
                          Consultar
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* </form> */}
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="card card-Vertical card-default card-md mb-4">
              <div className="card-header">
                <h6>Datos de PAM </h6>
              </div>
              <div className="card-body py-md-30">
                <form>
                  <div className="row">
                    <div className="col-md-2 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Número de Cédula"
                        id="identificacion"
                        value={usuarioSeleccionado.identificacion}
                   

                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Nombre"
                        id="nombre"
                        value={usuarioSeleccionado.nombre}
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Apellido 1"
                        id="papellido"
                        value={usuarioSeleccionado.primerApellido}
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Apellido 2"
                        id="sapellido"
                        value={usuarioSeleccionado.segundoApellido}
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Nacionalidad"
                        id="nacionalidad"
                        value={usuarioSeleccionado.Nacionalidad}
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Estado Civil"
                        id="Indice_Estado_Civil"
                        value={usuarioSeleccionado.Indice_Estado_Civil}
                      />
                    </div>
                    <div className="col-md-6 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Fecha_Nacimiento"
                        id="Fecha_Nacimiento"
                        value={usuarioSeleccionado.Fecha_Nacimiento}
                      />
                    </div>
                    <div className="col-md-2 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Edad"
                        id="Edad"
                        value={usuarioSeleccionado.Edad}
                      />
                    </div>

                    <h3>Dirección PAM</h3>
                    <div className="col-md-3 mt-25 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Provincia"
                      />
                    </div>
                    <div className="col-md-3 mt-25 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Cantón"
                      />
                    </div>
                    <div className="col-md-3 mt-25 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Distrito"
                      />
                    </div>
                    <div className="col-md-3 mt-25 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Barrio"
                      />
                    </div>
                    <div className="col-md-12  mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Otras señas"
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
        </div>
      </div>
    </div>
  );
};

export default ConsultaPam;
