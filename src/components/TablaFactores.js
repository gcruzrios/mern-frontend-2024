import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";

import { Link } from "react-router-dom";

import axios from "axios";

const TablaFactores = () => {
  const [obsSeleccionado, setobsSeleccionado] = useState({
    idFactor: "0",
    idLey: "0",
    idModalidad: "1",
    montoFactor: "0.00",
    nombreLey: "",
    modalidad: "",

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
      .post("wsSIPAM/GetListaFactorLey", factorSeleccionado, {
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
                Ley
              </span>
            </th>
            <th>
              <span className="userDatatable-title">Modalidad</span>
            </th>

            <th>
              <span className="userDatatable-title float-center">Monto</span>
            </th>
            <th>
              <span className="userDatatable-title float-center">Nuevo Monto</span>
            </th> 

            <th>
              <span className="userDatatable-title float-end">Acciones</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((obs) => (
            <tr key={obs.idDetallePagos}>
              {/* data */}
              {/* <TableData /> 
              
              {obs.nombreLey.substring(70, obs.nombreLey)} 
              */}

              <td>
                <div className="userDatatable-content">
                  <Link
                    className="nav-author__signout"
                    to={`/factorficha/${obs.idFactor}`}
                  >
                    <i className="uil uil-home-alt"></i> {obs.nombreLey}
                  </Link>
                </div>
              </td>
              <td>
                <div className="userDatatable-content">
                  {obs.modalidad}
                </div>
              </td>
              <td>
                <div className="userDatatable-content text-end">
                <div class="input-group mb-1">
                  {/* <span class="input-group-text">¢</span> */}
                  {obs.montoFactor}
                </div>
                </div>
              </td>
              <td>
                <div className="form-group mb-10">
                  <div class="input-group mb-3">
                    <span class="input-group-text">¢</span>
                      <input
                        type="text"
                        className="form-control"
                        id="name1"
                        placeholder="0.0"
                      />
                      {/* <span class="input-group-text">.00</span> */}
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

export default TablaFactores;

