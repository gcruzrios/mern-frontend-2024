import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";

import axios from "axios";

const Tablaobs = () => {
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
  });

  const Token = localStorage.getItem("Token");
  //console.log(Token);
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    //const idUsuario = localStorage.getItem('idUsuario');

    await axios
      .get("/wsSIPAM/GetOrganizaciones", {
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



  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 20;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const selectedItems = data.slice(startIndex, startIndex + itemsPerPage);


  return (
    <div>
      <table className="table mb-0 table-borderless">
        <thead>
          <tr className="userDatatable-header">
            {/* header */}
            <th>
              <span className="userDatatable-title userDatatable-title">
                Codigo
              </span>
            </th>
            <th>
              <span className="userDatatable-title">Nombre</span>
            </th>
            <th>
              <span className="userDatatable-title">Cédula Jurídica</span>
            </th>
            <th>
              <span className="userDatatable-title">Region</span>
            </th>
            <th>
              <span className="userDatatable-title">Modalidad</span>
            </th>
            <th>
              <span className="userDatatable-title">correo Organizacion</span>
            </th>
            <th>
              <span className="userDatatable-title">Estado</span>
            </th>
            <th>
              <span className="userDatatable-title float-end">Acciones</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedItems.map((obs) => (
            <tr key={obs.idOrganizacion}>
              {/* data */}
              {/* <TableData /> */}

              <td>
                <div className="userDatatable-content">
                  <Link
                    className="nav-author__signout"
                    to={`/listpam/${obs.identificacion}`}
                  >
                    {" "}
                    <i className="uil uil-home-alt"></i> {obs.codigoInstitucion}
                  </Link>
                </div>
              </td>
              <td>
                <div className="userDatatable-content">
                  {obs.nombreCONAPAM.substring(40, obs.nombreCONAPAM)}
                </div>
              </td>
              <td>
                <div className="userDatatable-content">
                  {obs.identificacion}
                </div>
              </td>
              <td>
                <div className="userDatatable-content">{obs.region}</div>
              </td>
              <td>
                <div className="userDatatable-content">{obs.modalidadAtencion}</div>
              </td>
              
              <td>
                <div className="userDatatable-content">
                  {obs.correoOrganizacion}
                </div>
              </td>
              <td>
                <div className="userDatatable-content d-inline-block">
                  <span className="bg-opacity-success  color-success rounded-pill userDatatable-content-status active">
                    activo
                  </span>
                </div>
              </td>
              <td>
                <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                  <li>
                    <Link
                      className="view"
                      to={`/detalleobs/${obs.codigoInstitucion}`}
                    >
                      {" "}
                      <i className="uil uil-eye"></i>{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="edit"
                      to={`/detalleobs/${obs.codigoInstitucion}`}
                    >
                      {" "}
                      <i className="uil uil-edit"></i>{" "}
                    </Link>
                  </li>
                  <li>


                   
                     <Link  
                      className="btn remove"
                      to={`/removeobs/${obs.identificacion}`}
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
      <div className="d-flex justify-content-center pt-30">
        <ReactPaginate
          pageCount={Math.ceil(data.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={'pagination'}
          activeClassName={'active'}
          previousLabel={'Anterior'}
          nextLabel={'Siguiente'}
        />
        </div>
    </div>
  );
};

export default Tablaobs;

