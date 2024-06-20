import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {
  Link
} from "react-router-dom";
import ReactPaginate from 'react-paginate';

import axios from "axios";

const Tablapam = () => {
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
    region: ""

  });

  const { id } = useParams();
  //console.log(id);

  const Token = localStorage.getItem("Token");
  //console.log(Token);
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    //const idUsuario = localStorage.getItem('idUsuario');
   
    const cedula = {cedula:id};
    console.log(cedula)
    await axios
      .post('/wsSIPAM/GetPAMPorCedulaOBS',cedula,{
        headers:{Authorization:'Bearer '+Token}
      })
      .then((response) => {
        //console.log(response.data.Resultado);
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
                identificacion
              </span>
            </th>
            <th>
              <span className="userDatatable-title">Nombre</span>
            </th>
            <th>
              <span className="userDatatable-title">Primer Apellido</span>
            </th>
            <th>
              <span className="userDatatable-title">Segundo Apellido</span>
            </th>
            <th>
              <span className="userDatatable-title">Sexo</span>
            </th>
            <th>
              <span className="userDatatable-title">Fecha Nacimiento</span>
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
          {selectedItems.map(pam=>(
          <tr key={pam.identificacion}>
            {/* data */}
            {/* <TableData /> */}
            
            <td>
              
              
              <div className="userDatatable-content">
              <Link  className="nav-author__signout" to={`/detallepam/${pam.identificacion}`}>  <i className="uil uil-home-alt"></i> {pam.identificacion}</Link>
              </div>
            </td>
            <td>
              <div className="userDatatable-content">{pam.nombre.substring(20, pam.nombre)}</div>
            </td>
            <td>
              <div className="userDatatable-content">{pam.primerApellido}</div>
            </td>
            <td>
              <div className="userDatatable-content">{pam.segundoApellido}</div>
            </td>
            <td>
              <div className="userDatatable-content">{pam.sexo==='1'?'Masculino':'Femenino'} </div>
            </td>
            <td>
              <div className="userDatatable-content">{pam.fechaNacimiento}</div>
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
                  <a href="#" className="view">
                    <i className="uil uil-eye"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="edit">
                    <i className="uil uil-edit"></i>
                  </a>
                </li>
                <li>
                  <a href="#" className="remove">
                    <i className="uil uil-trash-alt"></i>
                  </a>
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

export default Tablapam;

