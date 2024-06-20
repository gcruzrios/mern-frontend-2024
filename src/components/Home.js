import React, { useEffect, useState } from 'react'
import Welcome from "./Welcome";
import Listobs from './Listobs';
import ListPam from './Listpam';
import TitleHome from './TitleHome';
//import ListPamxObs from './ListPamxObs';
import TitleHomeObs from './TitleHomeObs';
import Listpamxobs from './Listpamxobs';
import ModalChangePassword from './ModaChangePassword';
import NoModal from './NoModal';
import Swal from 'sweetalert2';
import ListaEmpleados from './ListaEmpleados';

//const esObs = true;

const Home = () => {
  
  
  useEffect(() => {

  }, [])


  return (
    <div>

      <div class="crm mb-25">
        <div class="container-fluid">
          <div class="row ">

            <Welcome />



            

            <div class="col-lg-12">

              
                <ListaEmpleados />
             
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Home