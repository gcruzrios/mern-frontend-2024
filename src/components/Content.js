import React , { useEffect, useState }  from 'react'
import Welcome from "./Welcome";
import Listobs from './Listobs';
import Listpamxobs from './Listpamxobs';

import TitleContent from './TitleContent';
import Listpam from './Listpam';
const Content = () => {

   const [esObs, setEsObs] = useState(true);
   const TipoOBS = ()=>{
   const rolUsuario = localStorage.getItem('rolUsuario');
   console.log (rolUsuario);
     if (rolUsuario ==='Coordinador'){
         setEsObs(true)
     }else{
         setEsObs(false)
     }
     console.log(esObs);
   }

 useEffect(() => {
   TipoOBS();


 }, [])

  return (
    <div>

        <div class="crm mb-25">
            <div class="container-fluid">
               <div class="row ">

                                 

                
                  
                  <div class="col-lg-12">
                     {esObs ? (
                     <Listpamxobs/> 
                    ) : (
                      <Listpam/>
                    )}
                   
                     
                  </div>
                 
               </div>
              
            </div>
         </div>

    </div>
  )
}

export default Content