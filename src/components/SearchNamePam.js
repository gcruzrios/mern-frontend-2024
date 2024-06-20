import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import axios from "axios";


const SearchNamePam = () => {

  const [obsSeleccionado, setobsSeleccionado] = useState({
    codigoInstitucion: "",
    identificacion: "",
    razonSocial: "",
    tipoRazonSocial: "",
    nombreCONAPAM: "",
    idDistrito: "",
    region: "",
    otrasSenias: "",
    geoLocalizacion: "",
    cedulaRepresentanteLegal: "",
    nombreRepresentanteLegal: "",
    primerApellidoRepresentanteLegal: "",
    segundoApellidoRepresentanteLegal: "",
    correoRepresentante: "",
    telefonoRepresentante: "",
    cedulaCoordinador: "",
    nombreCoordinador: "",
    primerApellidoCoordinador: "",
    segundoApellidoCoordinador: "",
    correoCoordinador: "",
    telefonoCoordinador: "",
    capacidadAtencionPAM: "",
    correoOrganizacion: "",
    estado: "",
    modalidadAtencion: "",

    // jefe:localStorage.getItem('idUsuario')


    "idOrganizacion": "8",
    "codigoInstitucion": "6-04-01-SJ-H-09",
    "identificacion": "3002051887",
    "razonSocial": "Asociacion de Hermanas de Los Pobres de San Pedro Claver",
    "tipoRazonSocial": null,
    "nombreCONAPAM": "Asociacion de Hermanas de Los Pobres de San Pedro Claver",
    "idProvincia": "1",
    "provincia": "San José",
    "idCanton": "1",
    "canton": "San José",
    "idDistrito": "9",
    "distrito": "Pavas",
    "idRegion": "1",
    "region": "Central",
    "otrasSenias": "Contiguo a la embajada de Estados Unidos, Carretera a Pavas",
    "geoLocalizacion": "9.942703,-84.1273707",
    "cedulaRepresentanteLegal": null,
    "nombreRepresentanteLegal": null,
    "primerApellidoRepresentanteLegal": null,
    "segundoApellidoRepresentanteLegal": null,
    "correoRepresentante": null,
    "telefonoRepresentante": "",
    "cedulaCoordinador": null,
    "nombreCoordinador": null,
    "primerApellidoCoordinador": null,
    "segundoApellidoCoordinador": null,
    "correoCoordinador": null,
    "telefonoCoordinador": null,
    "capacidadAtencionPAM": null,
    "correoOrganizacion": "hspccr@gmail.com",
    "estado": null,
    "idOBSModalidad": "200",
    "idModalidad": "4",
    "modalidadAtencion": "Abandonados"


  });


 
  const { id } = useParams();
  console.log(id);
  const Token = localStorage.getItem("Token");

  const NombreOrganizacion = localStorage.getItem("organizacionUsuario");
  const idOrganizacion = localStorage.getItem("idOrganizacion");
  //console.log(Token);
  const [data, setData] = useState([]);
  const cedula = {idOBS:idOrganizacion};
  console.log(cedula)

  const peticionGet = async () => {
    //const idUsuario = localStorage.getItem('idUsuario');

    await axios
      .post("/wsSIPAM/GetObsPorCedula",cedula, {
        headers: { Authorization: "Bearer " + Token },
      })
      .then((response) => {
        //console.log(response.data.Resultado);
        setData(response.data.Resultado);
      });
  };

  const eliminar = async (id) => {
    const token = localStorage.getItem("Token");
    // const respuesta = await axios.delete(`/empleado/eliminar/${id}`, {
    //   headers: { token: token },
    // });

    //const mensaje = respuesta.data.mensaje;
    Swal.fire({
      icon: "success",
      title: "Obs Borrada",
      showConfirmButton: false,
      timer: 1500,
    });
    //obtenerEmpleados();
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
      {data.map(obs=>(
      <div className=" d-flex flex-wrap justify-content-center breadcrumb-main__wrapper">
        <div className="d-flex align-items-center user-member__title justify-content-center me-sm-25">
          <h4 className="text-capitalize fw-500 breadcrumb-title">
            Listado de PAM ({obs.nombreCONAPAM.substring(40, obs.nombreCONAPAM)})
          </h4>
          <span className="sub-title ms-sm-25 ps-sm-25">INICIO</span>
        </div>

        <form
          action="/"
          className="d-flex align-items-center user-member__form my-sm-0 my-2"
        >
          <img src="/img/svg/search.svg" alt="search" className="svg" />
          <input
            className="form-control me-sm-2 border-0 box-shadow-none"
            type="search"
            placeholder="Buscar por Nombre"
            aria-label="Search"
          />
        </form>
      </div>
       ))}
    </div>
  );
};

export default SearchNamePam;

