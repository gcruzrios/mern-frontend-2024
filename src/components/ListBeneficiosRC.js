import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import axios from "axios";
import GoogleMapsPam from "./GoogleMapsPam";

const ListBeneficiosRC = () => {
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
      .get("/wsSIPAM/GetListaBeneficios", {
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
      {/* <h4 class="text-capitalize breadcrumb-title">Lista de Beneficios</h4> */}

      <table className="table mb-0 table-borderless">
        <thead>
          <tr className="userDatatable-header">
            {/* header */}
            
            <th>
              <span className="userDatatable-title">Modalidad</span>
            </th>
            <th>
              <span className="userDatatable-title">Descripción</span>
            </th>
            <th>
              <span className="userDatatable-title">Monto Máximo</span>
            </th>
            <th>
              <span className="userDatatable-title">Monto Mensual</span>
            </th>
            <th>
              <span className="userDatatable-title float-end">Acciones</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((obs) => (
            <tr key={obs.idOrganizacion}>
              {/* data */}
              {/* <TableData /> */}

              <td>
                <div className="userDatatable-content">
                  {obs.modalidad.substring(40, obs.modalidad)}
                </div>
              </td>
              <td>
                <div className="userDatatable-content">
                {obs.descripcion.substring(40, obs.descripcion)}
                {/* obs.descripcion */} 
                </div>
              </td>
              <td>
                <div className="userDatatable-content">{obs.montoMaximoFormato}</div>
              </td>
              <td>
                <div className="form-group mb-10">
                  
                  <input
                    type="text"
                    className="form-control"
                    id="name1"
                    placeholder="0.0"
                  />
                </div>
              </td>
              <td>
                <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                  <li>
                    <Link className="view" to={`/detalleobs/${obs.idFactor}`}>
                      {" "}
                      <i className="uil uil-eye"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link className="edit" to={`/detalleobs/${obs.idFactor}`}>
                      {" "}
                      <i className="uil uil-edit"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="btn remove"
                      to={`/removeobs/${obs.idFactor}`}
                    >
                      {" "}
                      <i className="uil uil-trash-alt"></i>{" "}
                    </Link>
                  </li>
                </ul>
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListBeneficiosRC;
