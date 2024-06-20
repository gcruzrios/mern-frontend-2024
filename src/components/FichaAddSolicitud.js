import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
import GoogleMapsPam from "./GoogleMapsPam";

const FichaAddSolicitud = () => {
  const [obsSeleccionado, setobsSeleccionado] = useState({
    idOrganizacion: "",
    codigoInstitucion: "",
    identificacion: "",
    razonSocial: "",
    tipoRazonSocial: null,
    nombreCONAPAM: "",
    idProvincia: "",
    provincia: "",
    idCanton: "",
    canton: "",
    idDistrito: "",
    distrito: "",
    idRegion: "",
    region: "",
    otrasSenias: "",
    geoLocalizacion: "",
    cedulaRepresentanteLegal: null,
    nombreRepresentanteLegal: null,
    primerApellidoRepresentanteLegal: null,
    segundoApellidoRepresentanteLegal: null,
    correoRepresentante: null,
    telefonoRepresentante: "",
    cedulaCoordinador: null,
    nombreCoordinador: null,
    primerApellidoCoordinador: null,
    segundoApellidoCoordinador: null,
    correoCoordinador: null,
    telefonoCoordinador: null,
    capacidadAtencionPAM: null,
    correoOrganizacion: "",
    estado: null,
    idOBSModalidad: "",
    idModalidad: "",
    modalidadAtencion: "",
  });

  const { id } = useParams();
  //console.log(id);

  const Token = localStorage.getItem("Token");
  //console.log(Token);
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    const cedula = { codigoInstitucion: id };
    console.log(cedula);
    await axios
      .post("/wsSIPAM/GetObsPorCodigo", cedula, {
        headers: { Authorization: "Bearer " + Token },
      })
      .then((response) => {
        console.log(response.data.Resultado);
        setData(response.data.Resultado);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setobsSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(obsSeleccionado);
  };

  useEffect(() => {
    peticionGet();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-main">
            <h4 className="text-capitalize breadcrumb-title">
              Agregar Solicitud
            </h4>
            <div className="breadcrumb-action justify-content-center flex-wrap">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="#">
                      <i className="uil uil-estate"></i>Inicio
                    </a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Solicitudes
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <div className="form-element">
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-default card-md mb-4">
              <div className="card-header">
                <h6>Formulario de Solicitud</h6>
              </div>
              <div className="card-body py-md-25">
                <form action="#">
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          for="a1"
                          className="il-gray fs-14 fw-500 align-center mb-10"
                        >
                          Nombre OBS
                        </label>
                        <input
                          type="text"
                          className="form-control ih-medium ip-light radius-xs b-light px-15"
                          id="a1"
                          placeholder=""
                        />
                      </div>
                    </div>

                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          for="a1"
                          className="il-gray fs-14 fw-500 align-center mb-10"
                        >
                          Nombre Coordinador
                        </label>
                        <input
                          type="text"
                          className="form-control ih-medium ip-light radius-xs b-light px-15"
                          id="a1"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label
                          for="a2"
                          className="il-gray fs-14 fw-500 align-center mb-10"
                        >
                          modalidad de Atencion
                        </label>
                        <input
                          type="text"
                          className="form-control ih-medium ip-light radius-xs b-light px-15"
                          id="a2"
                          placeholder=""
                        />
                      </div>
                    </div>
                    
                    <div className="col-md-3">
                      <div className="form-group">
                        <label
                          for="a7"
                          className="il-gray fs-14 fw-500 align-center mb-10"
                        >
                          Cedula PAM
                        </label>
                        <input
                          type="text"
                          className="form-control ih-medium ip-light radius-xs b-light px-15"
                          id="a7"
                          placeholder=""
                        />
                      </div>
                    </div>
                    <div className="col-md-9">
                      <div className="form-group">
                        <label
                          for="a8"
                          className="il-gray fs-14 fw-500 align-center mb-10"
                        >
                          Nombre PAM
                        </label>
                        <input
                          type="text"
                          className="form-control ih-medium ip-light radius-xs b-light px-15"
                          id="a8"
                          placeholder=""
                        />
                      </div>
                    </div>
                    
                  </div>
                </form>
              </div>
            </div>
            {/* <!-- ends: .card --> */}
          </div>

          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-12">
                <div className="card card-default card-md mb-4">
                  <div className="card-header">
                    <h6>Formulario Solicitud</h6>
                  </div>
                  <div className="card-body pb-md-30">
                    <form action="#">
                      <div className="form-group">
                        <label
                          for="a11"
                          className="il-gray fs-14 fw-500 align-center mb-10"
                        >
                          Email 
                        </label>
                        <input
                          type="text"
                          className="form-control ih-medium ip-light radius-xs b-light px-15"
                          id="a11"
                          placeholder="username@email.com"
                        />
                      </div>
                      <div className="form-group">
                        <label
                          for="exampleFormControlSelect1"
                          className="il-gray fs-14 fw-500 align-center mb-10"
                        >
                          Prioridad
                        </label>
                        <select
                          className="form-control px-15"
                          id="exampleFormControlSelect1"
                        >
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                      {/* <div className="form-group tagSelect-rtl">
                        <label className="il-gray fs-14 fw-500 align-center mb-10">
                          Example multiple select
                        </label>

                        <div className="dm-select ">
                          <select
                            name="select-tag"
                            id="select-tag"
                            className="form-control "
                            multiple="multiple"
                          >
                            <option value="01">Option 1</option>
                            <option value="02">Option 2</option>
                            <option value="03">Option 3</option>
                            <option value="04">Option 4</option>
                            <option value="05">Option 5</option>
                          </select>
                        </div>
                      </div> */}

                      <div className="form-group form-element-textarea mb-20">
                        <label
                          for="exampleFormControlTextarea1"
                          className="il-gray fs-14 fw-500 align-center mb-10"
                        >
                         Descripción
                        </label>
                        <textarea
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          rows="3"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FichaAddSolicitud;

