import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';

const FormProfile = () => {

  
  
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [cedula, setCedula] = useState("");
  const [mensaje, setMensaje] = useState("");

  const idUsuario = localStorage.getItem('idUsuario');
  const nombreUsuario = localStorage.getItem('nombreUsuario');
  const correoUsuario = localStorage.getItem('correoUsuario');
  const correo = localStorage.getItem('correoUsuario');
  const rolUsuario = localStorage.getItem('rolUsuario');

  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
    CEDULA: "",
    FECHACADUC: "",
    NOMBRE: "",
    PRIMER_APELLIDO: "",
    SEGUNDO_APELLIDO: ""
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
if(passwordInputFieldName==='password'){
    const uppercaseRegExp   = /(?=.*?[A-Z])/;
    const lowercaseRegExp   = /(?=.*?[a-z])/;
    const digitsRegExp      = /(?=.*?[0-9])/;
    const specialCharRegExp = /(?=.*?[#?!@$%^&*-])/;
    const minLengthRegExp   = /.{8,}/;
    const passwordLength =      passwordInputValue.length;
    const uppercasePassword =   uppercaseRegExp.test(passwordInputValue);
    const lowercasePassword =   lowercaseRegExp.test(passwordInputValue);
    const digitsPassword =      digitsRegExp.test(passwordInputValue);
    const specialCharPassword = specialCharRegExp.test(passwordInputValue);
    const minLengthPassword =   minLengthRegExp.test(passwordInputValue);
    let errMsg ="";
    if(passwordLength===0){
            errMsg="Password is empty";
    }else if(!uppercasePassword){
            errMsg="At least one Uppercase";
    }else if(!lowercasePassword){
            errMsg="At least one Lowercase";
    }else if(!digitsPassword){
            errMsg="At least one digit";
    }else if(!specialCharPassword){
            errMsg="At least one Special Characters";
    }else if(!minLengthPassword){
            errMsg="At least minumum 8 characters";
    }else{
        errMsg="";
    }
    setPasswordErr(errMsg);
    }
    // for confirm password
    if(passwordInputFieldName=== "confirmPassword" || (passwordInputFieldName==="password" && passwordInput.confirmPassword.length>0) ){
            
        if(passwordInput.confirmPassword!==passwordInput.password)
        {
        setConfirmPasswordError("Confirm password is not matched");
        }else{
        setConfirmPasswordError("");
        }
        
    }
}

  //
   
 
  const getDataPam = async (e) => {
    e.preventDefault();


    const cedula_pam = { cedula: cedula };

    const id_coordinador = { idUsuario: idUsuario };

  
 
    const Token = localStorage.getItem("Token");
    console.log(Token);
    console.log(cedula);

   await axios

      .post("/WSSIPAM/wsSIPAM/GetUsuario_X_Id",id_coordinador,{
        headers: { Authorization: "Bearer " + Token },
      })

      // .post("/wsSIPAM/GetPersonaPadron", cedula_pam, {
      //   headers: { Authorization: "Bearer " + Token },
      // })

      .then((response) => {
        setMensaje(response.data.CodigoResultado);
        console.log(mensaje);
        
        console.log(response.data.Resultado);
        
      //   setData(response.data.Resultado);
      //    console.log(data);
      //   
           setUsuarioSeleccionado(response.data.Resultado);
           document.getElementById("identificacion").value = 'CEDULA COORDINADOR';
           document.getElementById("nombre").value = nombreUsuario;
           document.getElementById("correo").value = correoUsuario;
           
 
      });

    console.log(usuarioSeleccionado);

    

    if (mensaje !== "200") {
      Swal.fire({
        icon: "error",
        title:"No aparece en BD de TSE",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
    
    }
  };

  const handleChange = async (e) => {
    e.preventDefault();


    const ingreso = { idUsuario, correo, clave }

    console.log(ingreso);
    // {
    //   "idUsuario": "string",
    //   "correo": "string",
    //   "clave": "string"
    // }

    const Token = localStorage.getItem('Token');

   
    const response = await axios.post(`/wsSIPAM/ModifUsuarioPassword`, ingreso, { headers: { Authorization: 'Bearer ' + Token } })
    

    //const response = await axios.post(`/wsSIPAM/GetUsuario`, ingreso, { headers: { Authorization: 'Bearer ' + Token } })

    const mensaje = response.data.CodigoResultado;
    const mensaje_alerta = response.data.MensajeResultado;

    if (mensaje !== '200') {
        Swal.fire({
            text: 'Error en el proceso..',
            icon: 'error'
        })
    }
    else {
        const idUsuario = response.data.Resultado[0].idUsuario;
        const nombreUsuario = response.data.Resultado[0].nombreCompleto;
        const rolUsuario = response.data.Resultado[0].nombreRol;
        const estadoUsuario = response.data.Resultado[0].estado;


        console.log("EstadoLogin: " + estadoUsuario)



        const estado = 'activo';
        localStorage.setItem('Estado', estadoUsuario);
        localStorage.setItem('idUsuario', idUsuario);
        localStorage.setItem('nombreUsuario', nombreUsuario);
        localStorage.setItem('rolUsuario', rolUsuario);
        

        window.location.href = '/index'


    }

}

  useEffect(() => {
    //getDataPam();
    
  }, []);

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
            <div className="card card-horizontal card-default card-md mb-4">
              
            </div>
          </div>

          <div className="col-lg-12">
            <div className="card card-Vertical card-default card-md mb-4">
              <div className="card-header">
                <h6>Usuario SIPAM de la OBS </h6>
              </div>
              <div className="card-body py-md-30">
                <form>
                  <div className="row">
                    <div className="col-md-3 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Número de Cédula"
                        id="identificacion"
                        value="NúMERO CEDULA"
                   

                      />
                    </div>
                    <div className="col-md-9 mb-25">
                      <input
                        type="text"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Nombre"
                        id="nombre"
                        value={nombreUsuario}
                      />
                    </div>
                   
                    <div className="col-md-4 mb-25">
                      <input
                        type="email"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Correo Electrónico"
                        id="correo"
                        value={correoUsuario}
                      />
                    </div>

                    <div className="col-md-4 mb-25">
                      <input
                        type="password"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Contraseña"
                        id="password"
                        required onChange={(e) => setClave(e.target.value)}
                        value=""
                      />
                    </div>

                    <div className="col-md-4 mb-25">
                      <input
                        type="password"
                        className="form-control ih-medium ip-gray radius-xs b-light px-15"
                        placeholder="Confirmar Password"
                        id="cpassword"
                        required onChange={(e) => setCclave(e.target.value)}
                        value=""
                      />
                    </div>

                    

                    
                    
                    <div className="col-md-6">
                      <div className="layout-button mt-0">
                        <button
                          type="button"
                          className="btn btn-default btn-squared btn-light px-20 "
                        >
                          cancelar
                        </button>
                        <button
                          // type="button"
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
            {/* <!-- ends: .card --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormProfile;
