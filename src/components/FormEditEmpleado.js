import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useParams } from "react-router-dom";



const FormEditEmpleado = () => {

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [puesto, setPuesto] = useState('');
  const [tcontratos, setTcontratos] = useState([]);
  const [contratoSelect, setContratoSelect] = useState('');
  const { id } = useParams();
  const token = localStorage.getItem('token');

  const GetEmpleado = async () => {
    const respuesta = await axios.get(`/empleado/listar-empleado/${id}`,{headers:{token:token}});
    
    setNombre(respuesta.data.nombre);
    setApellidos(respuesta.data.apellidos);
    setIdentificacion(respuesta.data.identificacion);
    setPuesto(respuesta.data.puesto);
    setContratoSelect(respuesta.data.tcontrato);
   
  };
  const handleVolver = async (e) => {
    setTimeout(()=>{
      window.location.href='/index?search='
  },1500)
  }
 
  const handleEdit = async (e) => {
    e.preventDefault();


    const empleado={
      nombre,
      apellidos,
      identificacion,
      puesto,
      tcontrato:contratoSelect,
      
  }
  console.log(empleado);

  const respuesta = await axios.put(`/empleado/actualizar/${id}`, empleado, {headers:{token:token}})
        
  const mensaje = respuesta.data.mensaje;
  Swal.fire({
      icon: 'success',
      title: mensaje,
      showConfirmButton: false,
      timer: 1000
  })
  setTimeout(()=>{
      window.location.href='/index?search='
  },1500)
}

  useEffect(() => {

    GetEmpleado();
    
  }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-main">
              <h4 className="text-capitalize breadcrumb-title">
                Configuración de Empleado
              </h4>
              <div className="breadcrumb-action justify-content-center flex-wrap">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/index">
                        <i className="uil uil-estate"></i>Inicio
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Configuracion Empleado 
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card card-horizontal card-default card-md mb-4">
              
            </div>
          </div>

          <div className="col-lg-8">
            <div className="card card-Vertical card-default card-md mb-4">
              <div className="card-header">
                <h6>Editar Información del Empleado </h6>
              </div>
              <div className="card-body py-md-30">
                
              <form>
                  <div className="form-group mb-20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Identificacion"
                      value={identificacion}
                      onChange={(e)=>setIdentificacion(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nombre"
                      value={nombre}
                      onChange={(e)=>setNombre(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Apellidos"
                      value={apellidos}
                      onChange={(e)=>setApellidos(e.target.value)}
                    />
                  </div>
                  <div className="form-group mb-20">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Puesto"
                      value={puesto}
                      onChange={(e)=>setPuesto(e.target.value)}/>
                  
                  </div>
                  <div className="form-group">
                    <label
                      for="exampleFormControlSelect1"
                      className="il-gray fs-14 fw-500 align-center mb-10"
                    >
                      Tipo de Contrato
                    </label>
                    <select
                      className="form-control px-15"
                      id="exampleFormControlSelect1"
                      value={contratoSelect}
                      onChange={(e)=>setContratoSelect(e.target.value)}
                    >
                      <option value="Fijo">Fijo</option>
                      <option value="Temporal">Temporal</option>
                      <option value="Practicante">Practicante</option>
                      <option value="Pasantía">Pasantía</option>
                    </select>
                  </div>

                  <div className="button-group d-flex pt-25">
                    <button className="btn btn-primary btn-default btn-squared text-capitalize" onClick={handleEdit}>
                      Editar
                    </button>

                    <button
                      type="button"

                      className="btn btn-light btn-default btn-squared fw-400 text-capitalize b-light color-light"
                      onClick={handleVolver}
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
                
                
                
                
                
              </div>
            </div>
            {/* <!-- ends: .card --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormEditEmpleado;
