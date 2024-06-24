import React, { useEffect, useState } from "react";
import Swal from 'sweetalert2';
import ReactPaginate from 'react-paginate';
import { Link } from "react-router-dom";
import { useEmpleadoStore } from '../store/empleado-store'
import { useSearchParams } from 'react-router-dom';
import axios from "axios";

const TablaEmpleados = () => {

  const [empleados,setEmpleados] = useState([]);
  // const [nombre, setNombre] = useState('');
  // const [apellidos, setApellidos] = useState('');
  // const [identificacion, setIdentificacion] = useState('');
  // const [puesto, setPuesto] = useState('');
  // const [tcontratos, setTcontratos] = useState([]);
  // const [contratoSelect, setContratoSelect] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const buscarNombre = useEmpleadoStore(state => state.buscarNombre);
  
  let Empleados = [];

  useEffect(() => {
    console.log(buscarNombre);
    obtenerEmpleados();
    setTcontratos(['Fijo', 'Temporal', 'Practicante']);
    setContratoSelect('Fijo');

  }, [])

  const obtenerEmpleados= async() => {
        
    const idUsuario = localStorage.getItem('idUsuario');
    const token = localStorage.getItem('token');

    const respuesta = await axios.get(`/empleado/listar-empleados-jefe/${idUsuario}`,{headers:{token:token}})
  
    //console.log(respuesta.data);
    
    setEmpleados(respuesta.data);
    //console.log(empleados);
   
    
  }

  const eliminarprevio = async (id) => {
    Swal.fire({
      title: "Está seguro de borrar el registro?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Borrar",
      denyButtonText: `No borrar`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        eliminar(id);
        Swal.fire("Registro borrado!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("El Registro no ha sido borrado", "", "info");
      }
    });
  };
  

  const eliminar = async (id)=>{
      const token = localStorage.getItem('token');
      const respuesta = await axios.delete(`/empleado/eliminar/${id}`,{headers:{token:token}})

      const mensaje = respuesta.data.mensaje;
      // Swal.fire({
      //     icon: 'success',
      //     title: mensaje,
      //     showConfirmButton: false,
      //     timer: 1500
      // })
      obtenerEmpleados();
  }


  const buscar = async (e)=>{
    
    const buscar = searchParams.get('search');
    const idUsuario = localStorage.getItem('idUsuario');
    console.log(buscar)
    console.log(idUsuario);

    if (buscar===''){
        obtenerEmpleados();
    }
    //const buscar= e.target.value
    const token = localStorage.getItem('token');
    const respuesta = await axios.get(`/empleado/buscar/${buscar}/${idUsuario}`,{headers:{token:token}})



    setEmpleados(respuesta.data);


}

 
  useEffect(() => {
    //peticionGet();
    if (buscar === ""){
      obtenerEmpleados();
    }else{
      buscar()
    }
    
  }, []);



  const [currentPage, setCurrentPage] = useState(0);

  const itemsPerPage = 20;

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const selectedItems = empleados.slice(startIndex, startIndex + itemsPerPage);


  return (
    <div>
      <table className="table mb-0 table-borderless">
        <thead>
          <tr className="userDatatable-header">
            {/* header */}
            <th>
              <span className="userDatatable-title">#</span>
            </th>
            <th>
              <span className="userDatatable-title">Nombre</span>
            </th>
            <th>
              <span className="userDatatable-title">Apellidos</span>
            </th>
            <th>
              <span className="userDatatable-title">identificacion</span>
            </th>
            <th>
              <span className="userDatatable-title">Puesto</span>
            </th>
            <th>
              <span className="userDatatable-title">Tipo de Contrato</span>
            </th>
            
            <th>
              <span className="userDatatable-title float-end">Acciones</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {selectedItems.map((empleado, i) => (
            <tr key={empleado._id}>
              {/* data */}
          
              <td>{i+1}</td>
             
              <td>
                <div className="userDatatable-content">
                {empleado.nombre}
                </div>
              </td>
              <td>
                <div className="userDatatable-content">
                {empleado.apellidos}
                </div>
              </td>
              <td>
                <div className="userDatatable-content">
                {empleado.identificacion}
                </div>
              </td>
              <td>
                <div className="userDatatable-content">
                {empleado.puesto}</div>
              </td>
              
              <td>
                <div className="userDatatable-content">
                {empleado.tcontrato}
                </div>
              </td>
              
              <td>
                <ul className="orderDatatable_actions mb-0 d-flex flex-wrap">
                  {/* <li>
                    <Link
                      className="view"
                      to={`/detalleobs/${empleado._id}`}
                    >
                      {" "}
                      <i className="uil uil-eye"></i>{" "}
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      className="edit"
                      to={`/editempleado/${empleado._id}`}
                    >
                      {" "}
                      <i className="uil uil-edit"></i>{" "}
                    </Link>
                  </li>
                  <li>


                   
                     <button  
                      className="remove"
                      
                      onClick={()=>eliminarprevio(empleado._id)}
                      >
                      {" "}
                      <i className="uil uil-trash-alt"></i>{" "}
                    </button> 
                  </li>
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex justify-content-center pt-30">
        <ReactPaginate
          pageCount={Math.ceil(empleados.length / itemsPerPage)}
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

export default TablaEmpleados;

