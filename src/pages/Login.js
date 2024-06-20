//import React from 'react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2';
import Footer from '../components/Footer.js';

import { Link } from "react-router-dom";

export const Login = () => {

    
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('')

    const [isLoggedIn, setIsLoggedIn] = useState(true);





    const handleLogin = async (e) => {
        e.preventDefault();

        const usuario = {correo, contrasena}

        const respuesta= await axios.post(`/jefe/login`, usuario);
        console.log(respuesta);
        const mensaje = respuesta.data.mensaje;
                
        
        if (mensaje !== 'Bienvenido') {
            Swal.fire({
                text: 'Usuario o contraseña incorrectas..',
                icon: 'error'
            })
        }
        else {
            
            const token = respuesta.data.token;
            const nombre = respuesta.data.nombre;
            const idUsuario = respuesta.data.id;
             
           
            localStorage.setItem('token', token);
            localStorage.setItem('nombre', nombre);
            localStorage.setItem('idUsuario', idUsuario);

         
            

            window.location.href = '/index'


        }

    }

    return (
        <>

            <main className="main-content">

                <div className="admin">
                    <div className="container-fluid p-1">
                        <div className="row justify-content-center">

                            <div className="col-xxl-3 col-xl-4 col-md-6 col-sm-8 ">
                                <div className="edit-profile">
                                    <div className="edit-profile__logos">
                                        <a href="index.html">
                                            <img className="dark" src="/img/logo-white.png" alt="" />
                                            <img className="light" src="/img/logo-white.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="card border-0">
                                        <div className="card-header">
                                            <div className="edit-profile__title">
                                                <h6>Entrar al SISTEMA</h6>
                                            </div>
                                        </div>
                                        <div className="card-body">
                                            <form>
                                                <div className="edit-profile__body">
                                                    <div className="form-group mb-25">
                                                        <label htmlFor="username">Email</label>
                                                        <input type="text" className="form-control" id="username" placeholder="ufo@conapam.go.cr" required onChange={(e) => setCorreo(e.target.value)} />
                                                    </div>
                                                    <div className="form-group mb-15">
                                                        <label htmlFor="password-field">contraseña</label>
                                                        <div className="position-relative">
                                                            <input id="password-field" type="password" className="form-control" name="password" placeholder="Password" required onChange={(e) => setContrasena(e.target.value)} />
                                                            <div className="uil uil-eye-slash text-lighten fs-15 field-icon toggle-password2">
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="admin-condition">
                                                        <div className="checkbox-theme-default custom-checkbox ">
                                                            <input className="checkbox" type="checkbox" id="check-1" />
                                                            <label htmlFor="check-1">
                                                                <span className="checkbox-text">Mantenerme conectado</span>
                                                            </label>
                                                        </div>
                                                        <Link className="menu-text" to={`/recordarpassword`}>  ¿Olvido la contraseña?</Link>

                                                    </div>

                                                    <div className="admin__button-group button-group d-flex pt-1 justify-content-md-start justify-content-center">
                                                        <button
                                                            onClick={handleLogin}
                                                            className="btn btn-primary btn-default w-100 btn-squared text-capitalize lh-normal px-50 signIn-createBtn ">
                                                            Entrar
                                                        </button>
                                                    </div>


                                                </div>
                                            </form>
                                        </div>

                                        <div className="admin-topbar">
                                            <p className="mb-0">
                                    No tiene cuenta aún?
                                    
                                    <Link  className="menu-text" to={`/registro`}>  Registrarse</Link>
                                    
                                </p>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                <Footer />

            </main>
            <div id="overlayer">
                <div className="loader-overlay">
                    <div className="dm-spin-dots spin-lg">
                        <span className="spin-dot badge-dot dot-primary"></span>
                        <span className="spin-dot badge-dot dot-primary"></span>
                        <span className="spin-dot badge-dot dot-primary"></span>
                        <span className="spin-dot badge-dot dot-primary"></span>
                    </div>
                </div>
            </div>
            <div className="enable-dark-mode dark-trigger">
                <ul>
                    <li>
                        <a href="#">
                            <i className="uil uil-moon"></i>
                        </a>
                    </li>
                </ul>
            </div>


        </>
    )
}


export default Login
