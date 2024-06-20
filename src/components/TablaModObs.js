import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';

import { Link } from "react-router-dom";

import axios from "axios";

const TablaModObs = () => {
  const [obsSeleccionado, setobsSeleccionado] = useState({
    
    idDetallePagos: "",
    idOBS: "",
    OBS: "",
    idModalidad: "",
    modalidad: "",
    idLey: "1",
    Ley: "",
    Factor: "0.00",
    CantPAMAprobados: "0",
    totalPresupuesto: "0.00",
    cantidadAdmitidos: "0",
    cantidadNoCubierta: "0",
    cantidadExcedente: "0",
    SubcidioMensual: "0.00",
    SubcidioPagado: "0.00",
    PorcentajeCubierto: "100.00",
    DiferenciaSubcidio: "0.00",
    mes: "",
    annio: "2023",
    
   

    // jefe:localStorage.getItem('idUsuario')
  });

  const Token = localStorage.getItem("Token");
  //console.log(Token);
  const [data, setData] = useState([]);
  const [factorSeleccionado, setFactorSeleccionado] = useState({
  
    mes: "",
    annio: "",
    idModalidad: "",
    idLey: ""
  })

  const peticionGet = async () => {
    //const idUsuario = localStorage.getItem('idUsuario');

    await axios
      .post("wsSIPAM/GetListaDetallePlanillaOBS", factorSeleccionado, {
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
               Nombre
              </span>
            </th>
            
            <th>
              <span className="userDatatable-title">Mes</span>
            </th>
            <th>
              <span className="userDatatable-title">Año</span>
            </th>
            <th>
              <span className="userDatatable-title">Modalidad</span>
            </th>
            <th>
              <span className="userDatatable-title">Ley</span>
            </th>
            <th>
              <span className="userDatatable-title">Monto</span>
            </th>
            <th>
              <span className="userDatatable-title">Presupuesto</span>
            </th>
            <th>
              <span className="userDatatable-title float-end">Cant Aprobada</span>
            </th>
            <th>
              <span className="userDatatable-title float-end">Cant Actual</span>
            </th>
            <th>
              <span className="userDatatable-title float-end">Cant Disponible</span>
            </th>
            <th>
              <span className="userDatatable-title float-end">Cant Excedente</span>
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
              {/* <TableData /> */}

              <td>
                <div className="userDatatable-content">
                  <Link
                    className="nav-author__signout"
                    to={`/modalidadobs/${obs.idOBS}`}
                  >
                    {" "}
                    <i className="uil uil-home-alt"></i>  {obs.OBS.substring(70, obs.OBS)} 
                  </Link>
                </div>
              </td>
              <td>
                <div className="userDatatable-content text-center">
                    {obs.mes}
                </div>
              </td>
              <td>
                <div className="userDatatable-content text-center">
                  {obs.annio}
                </div>
              </td>
              <td>
                <div className="userDatatable-content text-center">
                  {obs.modalidad}</div>
              </td>
              <td>
                <div className="userDatatable-content text-center">
                  {obs.Ley}
                </div>
              </td>
              <td>
                <div className="userDatatable-content text-end">
                  {obs.Factor}
                </div>
              </td>
              <td>
                <div className="userDatatable-content text-end">
                  {obs.totalPresupuesto}
                </div>
              </td>
              
              <td>
                <div className="userDatatable-content text-center">
                  {obs.CantPAMAprobados.substring(8, obs.CantPAMAprobados)} 
                  {obs.CantPAMAprobados}
                  
                </div>
              </td>
              <td>
                <div className="userDatatable-content text-center">
                {obs.cantidadAdmitidos.substring(10, obs.cantidadAdmitidos)} 
                {obs.cantidadAdmitidos}
                </div>
              </td>
              <td>
                <div className="userDatatable-content text-center">
                
                {obs.cantidadNoCubierta}
                </div>
              </td>
              <td>
                <div className="userDatatable-content text-center">
                {obs.cantidadExcedente.substring(10, obs.cantidadExcedente)} 
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
    </div>
  );
};

export default TablaModObs;

