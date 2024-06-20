import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import CardFormProfileNew from "./CardFormProfileNew";

const FormProfileNuevo = () => {
 
  const [clave, setClave] = useState('');
  const [cclave, setCclave] = useState('');
  
  const [correo, setCorreo] = useState('');
  
  
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [cedula, setCedula] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [obs, setObs] = useState("");

 
  const idUsuario = localStorage.getItem("idUsuario");
  const nombreUsuario = localStorage.getItem("nombreUsuario");
  
 
  const correoUsuario = localStorage.getItem("correoUsuario");
  const organizacionUsuario = localStorage.getItem("organizacionUsuario");

  const nombreObs = localStorage.getItem("organizacion");
  const rolUsuario = localStorage.getItem("rolUsuario");

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({

    idUsuario: "0",
    usuario: "",
    clave: "",
    correo: "",
    fechaRegistro: "4/4/2023 2:40:19 PM",
    fechaCaducidad: "4/4/2023 2:40:19 PM",
    estado: "",
    rol: "",
    nombreRol: "",
    nombreCompleto: "",
    idOrganizacion: "",
    organizacion: ""
 
  });



  const [passwordError, setPasswordErr] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [passwordInput, setPasswordInput]= useState({
      password:'',
      confirmPassword:''
  })


  const handlePasswordChange =(evnt)=>{
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
    const NewPasswordInput = {...passwordInput,[passwordInputFieldName]:passwordInputValue}
    setPasswordInput(NewPasswordInput);
    
}
const handleValidation= (evnt)=>{
    const passwordInputValue = evnt.target.value.trim();
    const passwordInputFieldName = evnt.target.name;
        //for password 

}

  //




  const CheckPassword =()=>{

  if(clave==='password'){
    const uppercaseRegExp   = /(?=.*?[A-Z])/;
    const lowercaseRegExp   = /(?=.*?[a-z])/;
    const digitsRegExp      = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp   = /.{8,}/;
    const passwordLength =      clave.length;
    const uppercasePassword =   uppercaseRegExp.test(clave);
    const lowercasePassword =   lowercaseRegExp.test(clave);
    const digitsPassword =      digitsRegExp.test(clave);
    const specialCharPassword = specialCharRegExp.test(clave);
    const minLengthPassword =   minLengthRegExp.test(clave);
    let errMsg ="";
    if(passwordLength===0){
            errMsg="Contraseña está vacía";
    }else if(!uppercasePassword){
            errMsg="Debe tener al menos un Mayúscula ";
    }else if(!lowercasePassword){
            errMsg="Debe tener al menos un Miníscula ";
    }else if(!digitsPassword){
            errMsg="Debe haber un número ";
    }else if(!specialCharPassword){
            errMsg="Debe haber un símbolo especial";
    }else if(!minLengthPassword){
            errMsg="Debe ser mínimo en 8 características";
    }else{
        errMsg="";
    }
    setPasswordErr(errMsg);
    }
    // for confirm password
    if((clave=== cclave) && (clave.length>0)) {
            
        if(passwordInput.confirmPassword!==passwordInput.password)
        {
        setConfirmPasswordError("Contraseñas no cooinciden");
        }else{
        setConfirmPasswordError("");
        }
        
    }
  }

  const handleChange = async (e) => {
    e.preventDefault();



    const ingreso = { idUsuario: idUsuario, correo: correoUsuario, clave:clave };
    //const ingreso = { idUsuario, correo, clave }

    console.log(ingreso);
    // {
    //   "idUsuario": "string",
    //   "correo": "string",
    //   "clave": "string"
    // }

    const Token = localStorage.getItem('Token');

   
    const response = await axios.post(`/wsSIPAM/ModifUsuarioPassword`, ingreso, { headers: { Authorization: 'Bearer ' + Token } })
    
    //console.log(response.data.outCodigo)
    //const response = await axios.post(`/wsSIPAM/GetUsuario`, ingreso, { headers: { Authorization: 'Bearer ' + Token } })
    setMensaje(response.data.outCodigo);
    
    if (mensaje !== '200') {
        Swal.fire({
            text: 'Error en el proceso..',
            icon: 'error'
        })
    }
    else {
        Swal.fire({
           text: 'Contraseña modificada con éxito',
           icon: 'success'
    })

       
        setCorreo(response.data.Resultado.correo);
        console.log(correo);

        const estado = 'activo';
        

        window.location.href = '/index'


    }

}

  const getDataUser = async () => {
   // e.preventDefault();

    const cedula_pam = { idUsuario: idUsuario };
    console.log(cedula_pam);
    // {
    //   "idUsuario": "42"
    // }

    const Token = localStorage.getItem("Token");


    await axios
      .post("/wsSIPAM/GetUsuario_X_Id", cedula_pam, {
        headers: { Authorization: "Bearer " + Token },
      })

      .then((response) => {
        
        console.log(response.data.CodigoResultado);
       
        setMensaje(response.data.CodigoResultado);
  
        setUsuarioSeleccionado(response.data.Resultado);

        setObs(response.data.Resultado.organizacion);
        document.getElementById("identificacion").value = "CEDULA COORDINADOR";
        document.getElementById("nombre").value = nombreUsuario;
        document.getElementById("correo").value = usuarioSeleccionado.correo;
        document.getElementById("organizacion").value = usuarioSeleccionado.organizacion;
       
      });

    console.log(usuarioSeleccionado);

    if (mensaje !== "200") {
      Swal.fire({
        icon: "error",
        title: "No aparece en BD de TSE",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
    }
  };

  useEffect(() => {
   // getDataUser();
  }, []);


//   useEffect(() => {
//     obtenerToken();
// }, []);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <div className="breadcrumb-main">
              <h4 className="text-capitalize breadcrumb-title">
                Configuración de Perfil de Usuario SIPAM
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
                      Configuracion OBS / usuarios
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card card-horizontal card-default card-md mb-4"></div>
          </div>

          <div className="col-lg-12">
            <div class="col-lg-12">
              <div class="card card-default card-md mb-4">
                <div class="card-header">
                  <h6>Datos de Usuario SIPAM</h6>
                </div>
                <div class="card-body py-md-30">
                  <form action="#">
                    <div class="form-group row mb-n25">
                    <div class="col-md-12 mb-25">
                        <div class="with-icon">
                          <span class="las la-home color-light"></span>
                          <input
                            type="text"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            id="organizacion"
                            placeholder="OBS"
                            value={organizacionUsuario}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="la-user lar color-light"></span>
                          <input
                            type="text"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            placeholder="Número de Cédula"
                            id="identificacion"
                            value="NúMERO CEDULA"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="la-user lar color-light"></span>
                          <input
                            type="text"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            placeholder="Nombre"
                            id="nombre"
                            value={nombreUsuario}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="las la-envelope color-light"></span>
                          <input
                            type="text"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            placeholder="Correo Electrónico"
                            id="correo"
                            value={correoUsuario}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        
                        </div> 
                      {/* <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="la-phone las color-light"></span>
                          <input
                            type="text"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            id="inputNameIcon6"
                            placeholder="Número de Teléfono"
                          />
                        </div>
                      </div>  */}
                      
                      {/* <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="las la-map-marker color-light"></span>
                          <input
                            type="text"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            id="inputNameIcon3"
                            placeholder="OBS"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        
                      </div> */}
{/* 
                      <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="la-phone las color-light"></span>
                          <input
                            type="text"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            id="inputNameIcon6"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        
                      </div> */}

                      <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="la-lock las color-light"></span>
                          <input
                            type="password"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            id="password"
                            required onChange={(e) => setClave(e.target.value)}
                            placeholder="Contraseña"
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        
                        </div>
                      <div class="col-md-6 mb-25">
                        <div class="with-icon">
                          <span class="la-lock las color-light"></span>
                          <input
                            type="password"
                            class="form-control  ih-medium ip-lightradius-xs b-light"
                            id="cpassword"
                            placeholder="Confirmar Contraseña"
                            required onChange={(e) => setCclave(e.target.value)}
                          />
                        </div>
                      </div>
                      <div class="col-md-6 mb-25">
                        
                        </div>
                      <div className="col-md-6 mb-25">
                        <div className="layout-button mt-0">
                          <button
                            type="button"
                            className="btn btn-default btn-squared btn-light px-20 "
                          >
                            cancelar
                          </button>
                          <button
                            type="button"
                            onClick={handleChange}
                            className="btn btn-primary btn-default btn-squared px-30"
                          >
                            Guardar
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* <CardFormProfileNew/>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProfileNuevo;

