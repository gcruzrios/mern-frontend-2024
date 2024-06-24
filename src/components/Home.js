import React, { useEffect, useState } from 'react'
import Welcome from "./Welcome";

import Swal from 'sweetalert2';
import ListaEmpleados from './ListaEmpleados';

//const esObs = true;

const Home = () => {
  
  
  useEffect(() => {

  }, [])


  return (
    <div>

      <div className="crm mb-25">
        <div className="container-fluid">
          <div className="row ">

            <Welcome />



            

            <div className="col-lg-12">

              
                <ListaEmpleados />
             
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Home