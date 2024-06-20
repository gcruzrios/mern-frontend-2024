import React from 'react'
import {
   Link
 } from "react-router-dom";
 
const Footer = () => {
  return (
    <div>
      <footer className="footer-wrapper">
         <div className="footer-wrapper__inside">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-6">
                     <div className="footer-copyright">
                        <p><span>© 2024</span><a href="https://www.bemantis.com">Bemantis TI</a>
                        </p>
                     </div>
                  </div>
                  <div className="col-md-6">
                     <div className="footer-menu text-end">
                        <ul>
                           <li>
                             
                               <Link  className="menu-text" to={`/acerca`}>  Acerca de...</Link>
                           </li>
                           <li>
                              
                              <Link  className="menu-text" to={`/contactos`}>  Contactos</Link>
                           </li>
                        </ul>
                     </div>
                     
                  </div>
               </div>
            </div>
         </div>
      </footer>

    </div>
  )
}

export default Footer