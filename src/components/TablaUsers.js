import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import {
  Link
} from "react-router-dom";


import axios from "axios";

const TablaUsers = () => {
  const [usuarioSeleccionado, setusuarioSeleccionado] = useState({
    
    idUsuario: "1",
    usuario: "jose.sanchez@conapam.go.cr",
    correo: "jose.sanchez@conapam.go.cr",
    estado: "Activo",
    rol: "2",
    nombreRol: "Fiscalizador",
    nombreCompleto: "José Sanchez",
    idOrganizacion: "",
    organizacion: ""

   
  });

  const { id } = useParams();
  //console.log(id);

  const Token = localStorage.getItem("Token");
  //console.log(Token);
  const [data, setData] = useState([]);

  const peticionGet = async () => {
    //const idUsuario = localStorage.getItem('idUsuario');
   
    
    await axios
      .get('/wsSIPAM/GetListaUsuario',{
        headers:{Authorization:'Bearer '+Token}
      })
      .then((response) => {
        //console.log(response.data.Resultado);
        setData(response.data.Resultado);
      });
  }; 
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setusuarioSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(usuarioSeleccionado);
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
                Nombre Usuario
              </span>
            </th>
            
            <th>
              <span className="userDatatable-title">Correo</span>
            </th>
            <th>
              <span className="userDatatable-title">Rol</span>
            </th>
            <th>
              <span className="userDatatable-title">Organización</span>
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
          {selectedItems.map(usuario=>(
          <tr key={usuario.idUsuario}>
            {/* data */}
            {/* <TableData /> */}
            
            <td>
              
              
              <div className="userDatatable-content">
              <Link  className="nav-author__signout" to={`/detalleusuario/${usuario.idUsuario}`}>  <i className="uil uil-home-alt"></i> {usuario.nombreCompleto}</Link>
              </div>
            </td>
            {/* <td>
              <div className="userDatatable-content">{usuario.nombreCompleto.substring(20, usuario.nombreCompleto)}</div>
            </td> */}
            <td>
              <div className="userDatatable-content">{usuario.correo}</div>
            </td>
            <td>
              <div className="userDatatable-content">{usuario.nombreRol}</div>
            </td>
            <td>
              <div className="userDatatable-content">{usuario.organizacion}</div>
            </td>
            <td>
              <div className="userDatatable-content">{usuario.estado}</div>
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

export default TablaUsers;

