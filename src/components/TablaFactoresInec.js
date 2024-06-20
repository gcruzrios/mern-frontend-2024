import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";

import axios from "axios";

const TablaFactoresInec = () => {
  const [obsSeleccionado, setobsSeleccionado] = useState({
    
    ID: "",
    ANNIO: "",
    MES: "",
    REGION: "",
    MONTO: "120136.00"


    // jefe:localStorage.getItem('idUsuario')
  });

  const Token = localStorage.getItem("Token");
  //console.log(Token);
  const [data, setData] = useState([]);
  const [factorSeleccionado, setFactorSeleccionado] = useState({
    idLey: "",
    idModalidad: "",
  });

  const peticionGet = async () => {
    //const idUsuario = localStorage.getItem('idUsuario');

    await axios
      .get("/wsSIPAM/GetIndicePobreza",  {
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

  // useEffect(async () => {
  //   await peticionGet();
  // }, []);

  return (
    <div>
      <table className="table mb-0 table-borderless">
        <thead>
          <tr className="userDatatable-header">
            {/* header */}
            <th>
              <span className="userDatatable-title userDatatable-title">
                Indice
              </span>
            </th>
            <th>
              <span className="userDatatable-title">Año</span>
            </th>
            <th>
              <span className="userDatatable-title">Mes</span>
            </th>
            <th>
              <span className="userDatatable-title">Región</span>
            </th>
            <th>
              <span className="userDatatable-title float-center">Monto</span>
            </th>
           

            <th>
              <span className="userDatatable-title float-end">Acciones</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((obs) => (
            <tr key={obs.ID}>
              {/* data */}
              {/* <TableData /> 
              
              {obs.nombreLey.substring(70, obs.nombreLey)} 
              */}

              <td>
                <div className="userDatatable-content">
                  {/* <Link
                    className="nav-author__signout"
                    to={`/factorficha/${obs.idFactor}`}
                  >
                    <i className="uil uil-home-alt"></i> {obs.nombreLey}
                  </Link> */}
                  {obs.ID}
                </div>
              </td>
              <td>
                <div className="userDatatable-content">
                  {obs.ANNIO}
                </div>
              </td>
              <td>
                <div className="userDatatable-content text-end">
                <div class="input-group mb-1">
                  {/* <span class="input-group-text">¢</span> */}
                  {obs.MES}
                </div>
                </div>
              </td>
              <td>
                <div className="userDatatable-content text-end">
                <div class="input-group mb-1">
                  {/* <span class="input-group-text">¢</span> */}
                  {obs.REGION}
                </div>
                </div>
              </td>
              <td>
                <div className="userDatatable-content text-end">
                <div class="input-group mb-1">
                  {/* <span class="input-group-text">¢</span> */}
                  {obs.MONTO}
                </div>
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

export default TablaFactoresInec;

