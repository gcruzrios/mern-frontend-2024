import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
import GoogleMapsPam from "./GoogleMapsPam";
import ListBeneficios from "./ListBeneficios";

const FichaAddPam = () => {
  const [pamSeleccionado, setpamSeleccionado] = useState({
    tipoIdentificacion: "",
    identificacion: "",
    nombre: "",
    primerApellido: "",
    segundoApellido: "",
    fechaNacimiento: "",
    sexo: "",
    estadoCivil: "",
    idNacionalidad: "",
    idDistrito: "",
    distrito: "",
    idCanton: "",
    canton: "",
    idProvincia: "",
    provincia: "",
    idRegion: "",
    region: "",
  });

  const { id } = useParams();
  //console.log(id);

  const Token = localStorage.getItem("Token");
  //console.log(Token);
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    const cedula = { cedula: id };
    console.log(cedula);
    await axios
      .post("/wsSIPAM/GetConsultaPAM", cedula, {
        headers: { Authorization: "Bearer " + Token },
      })
      .then((response) => {
        console.log(response.data.Resultado);
        setData(response.data.Resultado);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setpamSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(pamSeleccionado);
  };

  useEffect(() => {
    peticionGet();
  }, []);
  return (
    <div>
      <div class="dm-page-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="d-flex align-items-center user-member__title mb-30 mt-30">
                <h4 className="text-capitalize">Detalle información de PAM</h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="user-info-tab w-100 bg-white global-shadow radius-xl mb-50">
                <div className="ap-tab-wrapper border-bottom ">
                  <ul
                    className="nav px-30 ap-tab-main text-capitalize"
                    id="v-pills-tab"
                    role="tablist"
                    aria-orientation="vertical"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="v-pills-home-tab"
                        data-bs-toggle="pill"
                        href="#v-pills-home"
                        role="tab"
                        aria-selected="true"
                      >
                        <img
                          src="/img/svg/user-check.svg"
                          alt="user"
                          className="svg"
                        />
                        Información Personal
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="v-pills-profile-tab"
                        data-bs-toggle="pill"
                        href="#v-pills-profile"
                        role="tab"
                        aria-selected="false"
                      >
                        <img
                          src="/img/svg/profit2.svg"
                          alt="briefcase"
                          className="svg"
                        />
                        Información Socioeconómica
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="v-pills-messages-tab"
                        data-bs-toggle="pill"
                        href="#v-pills-messages"
                        role="tab"
                        aria-selected="false"
                      >
                        <img
                          src="/img/svg/share-2.svg"
                          alt="share-2"
                          className="svg"
                        />
                        Lista de Beneficios
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="v-pills-map-tab"
                        data-bs-toggle="pill"
                        href="#v-pills-map"
                        role="tab"
                        aria-selected="false"
                      >
                        <img
                          src="/img/svg/map-pin.svg"
                          alt="share-2"
                          className="svg"
                        />
                        Información Geográfica
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="tab-content" id="v-pills-tabContent">
                  {/* {data.map((pam) => ( */}
                    <div
                      class="tab-pane fade  show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="row justify-content-center">
                        <div className="col-xxl-10 col-10">
                          <div className="mt-sm-40 mb-sm-50 mt-20 mb-20">
                            <div className="user-tab-info-title mb-sm-40 mb-20 text-capitalize">
                              <h5 className="fw-500">Información Personal</h5>
                            </div>
                            <div className="account-profile d-flex align-items-center mb-4 ">
                              <div className="ap-img pro_img_wrapper">
                                <input
                                  id="file-upload"
                                  type="file"
                                  name="fileUpload"
                                  className="d-none"
                                />
                                {/* <!-- Profile picture image--> */}
                                <label for="file-upload">
                                  <img
                                    className="ap-img__main rounded-circle wh-120 bg-lighter d-flex"
                                    src="/img/author/profile.png"
                                    alt="profile"
                                  />
                                  <span className="cross" id="remove_pro_pic">
                                    <img
                                      src="/img/svg/camera.svg"
                                      alt="camera"
                                      className="svg"
                                    />
                                  </span>
                                </label>
                              </div>
                              <div className="account-profile__title">
                                <h6 className="fs-15 ms-20 fw-500 text-capitalize">
                                  Foto de Perfil
                                </h6>
                              </div>
                            </div>
                            <div className="edit-profile__body">
                              <form>
                                <div className="form-group mb-25">
                                  <label for="name1">identificación</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="identificacion"
                                    //value={pam.identificacion}
                                  />
                                </div>
                                <div className="form-group mb-25">
                                  <label for="name1">Nombre</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="nombre"
                                    //value={pam.nombre}
                                  />
                                </div>
                                <div className="form-group mb-25">
                                  <label for="name2">Apellido 1</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="papellido"
                                    //value={pam.primerApellido}
                                  />
                                </div>
                                <div className="form-group mb-25">
                                  <label for="name2">Apellido 2</label>
                                  <input
                                    type="email"
                                    className="form-control"
                                    id="sapellido"
                                    //value={pam.segundoApellido}
                                  />
                                </div>
                                <div className="form-group mb-25">
                                  <label for="phoneNumber5">
                                    Número de Teléfono
                                  </label>
                                  <input
                                    type="tel"
                                    className="form-control"
                                    id="phoneNumber5"
                                    placeholder="+506 2546 5236"
                                  />
                                </div>
                                <div className="form-group mb-25">
                                  <div className="countryOption">
                                    <label for="countryOption">
                                      Nacionalidad
                                    </label>
                                    <select
                                      className="js-example-basic-single js-states form-control"
                                      id="countryOption"
                                    >
                                      <option value="JAN">Costarricense</option>
                                      <option value="FBR">Extranjero</option>
                                    </select>
                                  </div>
                                </div>
                                <div className="form-group mb-25">
                                  <div className="cityOption">
                                    <label for="cityOption">Provincia</label>

                                  <select
                          className="js-example-basic-single js-states form-control"
                          id="cityOption"
                        >
                          <option value="1">San José</option>
                          <option value="2">Alajuela</option>
                          <option value="3">Cartago</option>
                          <option value="4">Heredia</option>
                          <option value="5">Guanacaste</option>
                          <option value="6">Puntarenas</option>
                          <option value="7">Limón</option>
                          
                        </select> 
                                    
                                  </div>
                                </div>
                                <div className="form-group mb-25">
                                  <label for="name3">Cantón</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="name3"
                                   // value={pam.canton}
                                  />
                                </div>
                                <div className="form-group mb-25">
                                  <label for="name3">Distrito</label>
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="name3"
                                    //value={pam.distrito}
                                  />
                                </div>

                                <div className="button-group d-flex pt-sm-25 justify-content-md-end justify-content-start ">
                                  {/* <button className="btn btn-light btn-default btn-squared fw-400 text-capitalize radius-md btn-sm">
                                  Cancelar
                                </button> */}

                                  <button className="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2 btn-sm">
                                    Guardar &amp; Siguiente
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  {/* ))} */}
                  <div
                    class="tab-pane fade"
                    id="v-pills-profile"
                    role="tabpanel"
                    aria-labelledby="v-pills-profile-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-xxl-10 col-10">
                        <div className="mt-40 mb-50">
                          <div className="user-tab-info-title mb-35 text-capitalize">
                            <h5 className="fw-500">
                              Información Socioeconómica
                            </h5>
                          </div>
                          <div className="edit-profile__body">
                            <form>
                              <div className="form-group mb-25">
                                <label for="name4">Tipo de pensión</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="name4"
                                  placeholder="CCSS Regimen "
                                />
                              </div>
                              <div className="form-group mb-25">
                                <label for="phoneNumber1">Monto pensión</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="phoneNumber1"
                                  placeholder="100,000"
                                />
                              </div>
                              <div className="form-group mb-25">
                                <label for="phoneNumber">Designación</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="phoneNumber"
                                  placeholder="Nominal"
                                />
                              </div>
                              <div className="form-group mb-25 form-group-calender">
                                <label for="datepicker">Fecha Ingreso</label>
                                <div className="position-relative">
                                  <input
                                    type="text"
                                    className="form-control"
                                    id="datepicker"
                                    placeholder="20 Enero, 2018"
                                  />
                                  <a href="#">
                                    <img
                                      className="svg"
                                      src="/img/svg/chevron-right.svg"
                                      alt="chevron-right"
                                    />
                                  </a>
                                </div>
                              </div>
                              <div className="form-group mb-25 status-radio">
                                <label className="mb-15" for="phoneNumber2">
                                  Estado
                                </label>
                                <div className="d-flex">
                                  <div className="radio-horizontal-list d-flex flex-wrap">
                                    <div className="radio-theme-default custom-radio ">
                                      <input
                                        className="radio"
                                        type="radio"
                                        name="radio-optional"
                                        essage
                                        value="0"
                                        id="radio-hl1"
                                      />
                                      <label for="radio-hl1">
                                        <span className="radio-text">
                                          Activo
                                        </span>
                                      </label>
                                    </div>

                                    <div className="radio-theme-default custom-radio ">
                                      <input
                                        className="radio"
                                        type="radio"
                                        name="radio-optional"
                                        value="0"
                                        id="radio-hl2"
                                      />
                                      <label for="radio-hl2">
                                        <span className="radio-text">
                                          Desactivado
                                        </span>
                                      </label>
                                    </div>

                                    <div className="radio-theme-default custom-radio ">
                                      <input
                                        className="radio"
                                        type="radio"
                                        name="radio-optional"
                                        value="0"
                                        id="radio-hl3"
                                      />
                                      <label for="radio-hl3">
                                        <span className="radio-text">
                                          Bloqueado
                                        </span>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="button-group d-flex pt-20 justify-content-md-end justify-content-start">
                                {/* <button className="btn btn-light btn-default btn-squared fw-400 text-capitalize radius-md">
                                Cancelar
                              </button> */}

                                <button className="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2">
                                  Guardar &amp; Siguiente
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="v-pills-messages"
                    role="tabpanel"
                    aria-labelledby="v-pills-messages-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-xxl-10 col-10">
                        <div className="user-social-profile mt-40 mb-50">
                          <div className="user-tab-info-title mb-40 text-capitalize">
                            <h5>Beneficios de Modalidad</h5>
                          </div>
                          <div className="edit-profile__body">
                            <form>
                              <ListBeneficios />

                              <div className="button-group d-flex pt-20 justify-content-md-end justify-content-start">
                                {/* <button className="btn btn-light btn-default btn-squared fw-400 text-capitalize radius-md">
                                Cancelar
                              </button> */}

                                <button className="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2">
                                  Guardar
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Ficha GEO */}
                  <div
                    className="tab-pane fade"
                    id="v-pills-map"
                    role="tabpanel"
                    aria-labelledby="v-pills-map-tab"
                  >
                    <div className="row justify-content-center">
                      <div className="col-xxl-10 col-10">
                        <div className="user-social-profile mt-40 mb-50">
                          <div className="user-tab-info-title mb-40 text-capitalize">
                            <h5>Ubicación Geográfica</h5>
                          </div>
                          <div className="edit-profile__body">
                            <form>
                              <div className=" mb-30">
                                <label for="socialUrl">Google Maps</label>

                                <GoogleMapsPam />
                                {/* <Mapa/> */}
                              </div>

                              {/* <div className=" mb-30">
                                <label for="socialUrl">Google Maps</label>
                                <div className="input-group flex-nowrap">
                                  <div className="input-group-prepend">
                                    <span
                                      className="input-group-text bg-google border-google text-white wh-44 radius-xs justify-content-center"
                                      id="addon-wrapping1"
                                    >
                                      <i className="lab la-google-f fs-18"></i>
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    className="form-control form-control--social"
                                    placeholder="Coordenadas"
                                    aria-label="Username"
                                    aria-describedby="addon-wrapping1"
                                    id="socialUrl"
                                  />
                                </div>
                              </div> */}

                              <div className="button-group d-flex pt-20 justify-content-md-end justify-content-start">
                                {/* <button className="btn btn-light btn-default btn-squared fw-400 text-capitalize radius-md">
                                Regresar
                              </button> */}

                                <button className="btn btn-primary btn-default btn-squared text-capitalize radius-md shadow2">
                                  Guardar
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Fin ficha GEO */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FichaAddPam;

