import React from 'react'
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
         <div className="container-fluid">
            <div className="row justify-content-center">
               <div className="col-12">
                  {/* <!-- Start: error page --> */}
                  <div className="min-vh-100 content-center">
                     <div className="error-page text-center">
                        <img src="/img/svg/404.svg" alt="404" className="svg"/>
                        <div className="error-page__title">404</div>
                        <h5 className="fw-500">Lo siento. La página que busca no existe</h5>
                        <div className="content-center mt-30">
                           <Link to={`/index`} className="btn btn-primary btn-default btn-squared px-30">Regresar al inicio </Link>
                        
                        </div>
                     </div>
                  </div>
                  {/* <!-- End: error page --> */}
               </div>
            </div>
         </div>
    </div>
  )
}

export default NotFound