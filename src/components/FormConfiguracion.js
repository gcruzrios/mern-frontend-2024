import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

const FormConfiguracion = () => {

  
  
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
                Configuración OBS / Accesos
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
                      Configuracion OBS / usuarios
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
              
            </div>
          </div>

          <div className="col-lg-12">
            <div className="card card-Vertical card-default card-md mb-4">
              <div className="card-header">
                <h6>Datos de Representante legal OBS </h6>
              </div>
              <div className="card-body py-md-30">
                <form>
                  <div className="row">
                    <div className="col-md-3 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Número de Cédula"
                        id="identificacion"
                        value={usuarioSeleccionado.identificacion}
                   

                      />
                    </div>
                    <div className="col-md-9 mb-25">
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
                        type="email"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Correo Electrónico"
                      />
                    </div>

                    <h3>Dirección OBS</h3>
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

                    <h3>Dirección OBS</h3>
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

export default FormConfiguracion;
