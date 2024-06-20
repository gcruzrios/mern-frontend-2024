//import React from "react";

import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import {
  Link
} from "react-router-dom";


import axios from "axios";




const Datospam = () => {

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
          .post('/wsSIPAM/GetConsultaPAM',cedula,{
            headers:{Authorization:'Bearer '+Token}
          })
          .then((response) => {
            console.log(response.data.Resultado);
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


  return (
    <>
      <div className="user-info-tab w-100 bg-white global-shadow radius-xl mb-50">
     
      {data.map(pam=>(
        <div className="tab-content" id="v-tabContent">
          
      </div>
   
     ))}
     
    </div>
  </>
    );
};

export default Datospam;

