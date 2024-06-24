import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
const ModalAddEmpleado = () => {

  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [identificacion, setIdentificacion] = useState('');
  const [puesto, setPuesto] = useState('');
  const [tcontratos, setTcontratos] = useState([]);
  const [contratoSelect, setContratoSelect] = useState('');

  const guardar = async(e) =>{
    e.preventDefault();

    const usuario={
        nombre,
        apellidos,
        identificacion,
        puesto,
        tcontrato:contratoSelect,
        jefe:localStorage.getItem('idUsuario')

    }

    console.log(usuario);

    const token = localStorage.getItem('token');

    const respuesta = await axios.post(`/empleado/crear`,usuario,{headers:{token:token}})
    const mensaje = respuesta.data.mensaje;
    Swal.fire({
        icon: 'success',
        title: mensaje,
        showConfirmButton: false,
        timer: 1000
    })
    setTimeout(()=>{
        window.location.href='/index'
    },1500)
}
  return (
    <div>
      {/* <!-- Modal --> */}
      <div
        class="modal fade new-member "
        id="new-member"
        role="dialog"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content  radius-xl">
            <div class="modal-header">
              <h6 class="modal-title fw-500" id="staticBackdropLabel">
                Información Empleados
              </h6>
              <button
                type="button"
                class="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <img src="/img/svg/x.svg" alt="x" class="svg" />
              </button>
            </div>
            
            <div class="modal-body">
              <div class="new-member-modal">
                <form onSubmit={guardar}>
                  <div class="form-group mb-20">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Identificacion"
                      onChange={(e)=>setIdentificacion(e.target.value)}
                    />
                  </div>
                  <div class="form-group mb-20">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Nombre"
                      onChange={(e)=>setNombre(e.target.value)}
                    />
                  </div>
                  <div class="form-group mb-20">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Apellidos"
                      onChange={(e)=>setApellidos(e.target.value)}
                    />
                  </div>
                  <div class="form-group mb-20">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Puesto"
                      onChange={(e)=>setPuesto(e.target.value)}/>
                  
                  </div>
                  <div class="form-group">
                    <label
                      for="exampleFormControlSelect1"
                      class="il-gray fs-14 fw-500 align-center mb-10"
                    >
                      Tipo de Contrato
                    </label>
                    <select
                      class="form-control px-15"
                      id="exampleFormControlSelect1"
                      onChange={(e)=>setContratoSelect(e.target.value)}
                    >
                      <option value="Fijo">Fijo</option>
                      <option value="Temporal">Temporal</option>
                      <option value="Practicante">Practicante</option>
                      <option value="Pasantía">Pasantía</option>
                    </select>
                  </div>

                  <div class="button-group d-flex pt-25">
                    <button class="btn btn-primary btn-default btn-squared text-capitalize">
                      Agregar
                    </button>

                    <button
                      type="button"
                      class="btn btn-light btn-default btn-squared fw-400 text-capitalize b-light color-light"
                      data-bs-dismiss="modal"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Modal --> */}
    </div>
  );
};

export default ModalAddEmpleado;
